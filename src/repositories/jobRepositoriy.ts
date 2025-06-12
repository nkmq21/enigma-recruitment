import { Job, Prisma } from '@prisma/client';
import { prisma } from '../../prisma/prisma';


//DO NOT FUCKING FORMAT THIS FILE

export class JobRepositoriy {
    async findBySearch(
        query: string,
        status: string[],
        locations: string[],
        page = 1,
        limit = 19,
        // industries: string[],
        // job_function: string[],
        // job_subfunction: string[],
        // employment_type: string[],
    ) {
        const skip = (page - 1) * limit;

        if (!query) {
            return this.findJobs(status, locations, skip, limit);
        }

        const lowercasedQuery = query.toLowerCase();

        const jobs: Job[] = await prisma.$queryRaw`
            SELECT j.job_id,
                   j.job_title,
                   j.description,
                   j.salary_range_start,
                   j.salary_range_end,
                   j.close_date,
                   j.location,
                   j.status,
                   j.employment_type,
                   i.industry_name,
                   jf.job_function_name,
                   js.job_subfunction_name
            FROM jobs j
                     LEFT JOIN industries i ON j.industry_id = i.industry_id
                     LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
                     LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id AND
                                                      j.job_subfunction_id = js.job_subfunction_id
            WHERE j.status = ANY(${status})
                ${locations.length > 0 ? Prisma.sql`AND j.location = ANY(${locations})` : Prisma.empty}
              AND(
                to_tsvector('english',
                                coalesce(j.job_title, '') || ' ' ||
                                coalesce(j.description, '') || ' ' ||
                                coalesce(j.location, '') || ' ' ||
                                coalesce(i.industry_name, '') || ' ' ||
                                coalesce(jf.job_function_name, '')
                  ) @@ plainto_tsquery('english', ${lowercasedQuery})
                OR j.job_title ILIKE ${`%${lowercasedQuery}%`}
                OR j.description ILIKE ${`%${lowercasedQuery}%`}
                OR j.location ILIKE ${`%${lowercasedQuery}%`}
                OR i.industry_name ILIKE ${`%${lowercasedQuery}%`}
                OR jf.job_function_name ILIKE ${`%${lowercasedQuery}%`}
              ) 
            ORDER BY j.close_date DESC
            LIMIT ${limit} OFFSET ${skip}
        `;

        const totalCount: any = await prisma.$queryRaw`
            select count(*) as count
            from jobs j
            where j.status = ANY(${status})
                ${locations.length > 0 ? Prisma.sql`AND j.location = ANY(${locations})` : Prisma.empty}
              and to_tsvector('english'
                , coalesce (j.job_title
                , '') || '' ||
                coalesce (j.description
                , '') || '' ||
                coalesce (j.location
                , '')
                ) @@ plainto_tsquery('english', ${lowercasedQuery})
        `;

        return {
            jobs,
            total: Number(totalCount[0].count)
        };

    }

    async findJobs(status: string[], locations: string[] = [], skip: number, limit: number) {
        const whereConditions: any = {
            status: { in: status }
        }

        if (locations.length > 0) {
            whereConditions.location = { in: locations }
        }

        console.log('Repository: findJobs with conditions:', whereConditions);


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
    async getPopularJobs(limit = 10) {
        const jobs = await prisma.$queryRaw`
            SELECT j.job_title, COUNT(*) as frequency
            FROM jobs j
            WHERE j.status = 'active'
            GROUP BY j.job_title
            ORDER BY frequency DESC
            LIMIT ${limit}
        `;
        return jobs;
    }

}