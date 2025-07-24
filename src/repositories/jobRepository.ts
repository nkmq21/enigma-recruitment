import { Job, Prisma } from '@prisma/client';
import { prisma } from '../../prisma/prisma';

export class JobRepository {
    async findBySearch(
        query: string,
        status: string[],
        locations: string[],
        jobFunctions: string[],
        jobSubfunctions: string[],
        industries: string[],
        employment_type: string[],
        postDateRange: string,
        page = 1,
        limit = 19,
    ) {
        const skip = (page - 1) * limit;

        if (!query && locations.length == 0 && jobFunctions.length == 0 && jobSubfunctions.length == 0 && industries.length == 0 && employment_type.length == 0 && !postDateRange) {
            return this.findJobs(status, skip, limit);
        }

        const lowercasedQuery = query.toLowerCase();
        let dateCondition = Prisma.empty;
        if (postDateRange) {
            // const now = new Date();
            // let cutoffDate: Date;
            // const oneDayMilliseconds = 24 * 60 * 60 * 1000;
            switch (postDateRange) {
                case 'Past 24 hours':
                    // cutoffDate = new Date(now.getTime() - oneDayMilliseconds);
                    dateCondition = Prisma.sql`AND j.created_date >= NOW() - INTERVAL '24 Hours'`
                    break;
                case "Past week":
                    // cutoffDate = new Date(now.getTime() - 7 * oneDayMilliseconds);
                    dateCondition = Prisma.sql`AND j.created_date >= NOW() - INTERVAL '1 Week'`
                    break;
                case "Past month":
                    // cutoffDate = new Date(now.getTime() - 30 * oneDayMilliseconds);
                    dateCondition = Prisma.sql`AND j.created_date >= NOW() - INTERVAL '1 Month'`
                    break;
                // default:
                //     cutoffDate = new Date(now.getTime());
            }
            // if (cutoffDate) {
            //     dateCondition = Prisma.sql`AND j.created_date >= ${cutoffDate.toISOString()}`
            // }
        }

        const jobs: Job[] = await prisma.$queryRaw`
            SELECT DISTINCT ON (j.job_id) 
                j.*, i.industry_name, 
                jf.job_function_name, 
                js.job_subfunction_name
            FROM jobs j
                     LEFT JOIN industries i ON j.industry_id = i.industry_id
                     LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
                     LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id
            WHERE j.status = ANY (${status})
                ${locations.length > 0 ? Prisma.sql`AND j.location = ANY(${locations})` : Prisma.empty}
                ${jobFunctions.length > 0
                ? Prisma.sql`AND (${Prisma.join(
                    jobFunctions.map(jf => Prisma.sql`jf.job_function_name ILIKE ${`%${jf.toLowerCase()}%`}`),
                    ' OR '
                )})`
                : Prisma.empty}
                ${jobSubfunctions.length > 0
                ? Prisma.sql`AND (${Prisma.join(
                    jobSubfunctions.map(js => Prisma.sql`js.job_subfunction_name ILIKE ${`%${js.toLowerCase()}%`}`),
                    ' OR '
                )})`
                : Prisma.empty}
                ${industries.length > 0
                ? Prisma.sql`AND (${Prisma.join(
                    industries.map(i => Prisma.sql`i.industry_name ILIKE ${`%${i.toLowerCase()}%`}`),
                    ' OR '
                )})`
                : Prisma.empty}
                ${employment_type.length > 0
                ? Prisma.sql`AND j.employment_type ILIKE ANY(${employment_type})`
                : Prisma.empty}
                ${dateCondition}
            
            -- TODO: add other filter criteria continue from here

              AND (
                to_tsvector('english', 
                    coalesce (j.job_title, '') || ' ' ||
                    coalesce (j.description, '') || ' ' ||
                    coalesce (j.location, '') || ' ' ||
                    coalesce (i.industry_name, '') || ' ' ||
                    coalesce (jf.job_function_name, '')
                ) @@ plainto_tsquery('english', ${lowercasedQuery})
               OR j.job_title ILIKE ${`%${lowercasedQuery}%`}
               OR j.location ILIKE ${`%${lowercasedQuery}%`}
               OR i.industry_name ILIKE ${`%${lowercasedQuery}%`}
               OR jf.job_function_name ILIKE ${`%${lowercasedQuery}%`}
            )
            ORDER BY j.job_id, j.close_date DESC
                LIMIT ${limit}
            OFFSET ${skip}
        `;

        type CountResult = {
            count: string | number;
        }

        const totalCount: CountResult[] = await prisma.$queryRaw`
            select count(distinct j.job_id) as count
            FROM jobs j
                LEFT JOIN industries i
            ON j.industry_id = i.industry_id
                LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
                LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id AND
                j.job_subfunction_id = js.job_subfunction_id
            WHERE j.status = ANY (${status}) 
                ${locations.length > 0 ? Prisma.sql`AND j.location = ANY(${locations})` : Prisma.empty} 
                ${jobFunctions.length > 0
                ? Prisma.sql`AND (${Prisma.join(
                    jobFunctions.map(jf => Prisma.sql`jf.job_function_name ILIKE ${`%${jf.toLowerCase()}%`}`),
                    ' OR '
                )})`
                : Prisma.empty}
                ${jobSubfunctions.length > 0
                ? Prisma.sql`AND (${Prisma.join(
                    jobSubfunctions.map(js => Prisma.sql`js.job_subfunction_name ILIKE ${`%${js.toLowerCase()}%`}`),
                    ' OR '
                )})`
                : Prisma.empty}
                ${industries.length > 0
                ? Prisma.sql`AND (${Prisma.join(
                    industries.map(i => Prisma.sql`i.industry_name ILIKE ${`%${i.toLowerCase()}%`}`),
                    ' OR '
                )})`
                : Prisma.empty}
                ${dateCondition}

            -- TODO: add other filter criteria from here

              AND (
                to_tsvector('english', 
                coalesce (j.job_title, '') || ' ' ||
                coalesce (j.description, '') || ' ' ||
                coalesce (j.location, '') || ' ' ||
                coalesce (i.industry_name, '') || ' ' ||
                coalesce (jf.job_function_name, '')
                ) @@ plainto_tsquery('english', ${lowercasedQuery})
               OR j.job_title ILIKE ${`%${lowercasedQuery}%`}
               OR j.location ILIKE ${`%${lowercasedQuery}%`}
               OR i.industry_name ILIKE ${`%${lowercasedQuery}%`}
               OR jf.job_function_name ILIKE ${`%${lowercasedQuery}%`}
                )
        `;

        return {
            jobs,
            total: Number(totalCount[0].count)
        };

    }

    async findJobs(
        status: string[],
        skip: number,
        limit: number
    ) {
        const whereConditions: Prisma.JobWhereInput = {
            status: { in: status }
        }
        const jobs = await prisma.job.findMany({
            where: whereConditions,
            orderBy: { close_date: "desc" },
            select: {
                job_id: true,
                job_title: true,
                description: true,
                salary_range_start: true,
                salary_range_end: true,
                close_date: true,
                industry: { select: { industry_name: true } },
                job_function: { select: { job_function_name: true } },
                subfunction: { select: { job_subfunction_name: true } },
                location: true,
                status: true,
                employment_type: true
            },
            skip,
            take: limit
        });

        const total = await prisma.job.count({ where: { status: { in: status } } });

        return { jobs, total };
    }

    // method to get popular searches
    // async getPopularJobs(limit = 10) {
    //     return prisma.$queryRaw`
    //         SELECT j.job_title, COUNT(*) as frequency
    //         FROM jobs j
    //         WHERE j.status = 'active'
    //         GROUP BY j.job_title
    //         ORDER BY frequency DESC
    //             LIMIT ${limit}
    //     `;
    // }

}