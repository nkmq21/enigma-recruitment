import { Prisma } from '@prisma/client';
import type { Job } from "enigma/types/models";
import { prisma } from '../../prisma/prisma';

export interface JobSearchFilters {
    query?: string;
    status: string[];
    locations?: string[];
    jobFunctions?: string[];
    jobSubfunctions?: string[];
    industries?: string[];
    employment_type?: string[];
    postDateRange?: string;
    salaryMin?: number;
    salaryMax?: number;
    page: number;
    limit: number;
}

const maxSalaryValue = 10000;

export async function findById(jobId: string): Promise<Job | null> {
    try {
        const job = await prisma.job.findUnique({
            where: {
                job_id: jobId,
            },
            include: {
                industry: true,
                job_function: true,
                subfunction: true
            }
        });
        return job as Job || null;
    } catch (error) {
        console.error('error find job with the id', error);
        return null;
    }
}

// export async function getJob(jobid: string): Promise<Job> {
//     const response = await fetch(/api/jobs/${jobid}, {
//         method: 'GET',
//             headers: { 'Content-Type': 'application/json' }
//     });
//
//     if (!response.ok) {
//         throw new Error('Failed to fetch users');
//     }
//
//     return response.json();
// }

export async function JobLocation() {
    const jobLocation = await prisma.job.findMany({
        where: {
            status: "active",
        },
        select: {
            location: true,
        },
        distinct: ['location'],
    });

    //map to string[]
    return jobLocation.map((job) => job.location);
}

export async function findByStatus(status: string[], page: number, limit: number): Promise<{ jobs: Job[], total: number }> {
    const skip = (page - 1) * limit;
    try {
        const [jobs, total] = await Promise.all([
            prisma.job.findMany({
                where: { status: { in: status } },
                include: {
                    industry: true,
                    job_function: true,
                    subfunction: true
                },
                skip,
                take: limit,
                orderBy: { created_date: 'desc' }
            }),
            prisma.job.count({ where: { status: { in: status } } })
        ])
        return { jobs: jobs as Job[], total };
    } catch (error) {
        console.error('error finding jobs with by status: ', error);
        return { jobs: [], total: 0 };
    }
}

export async function getJobs(page: number, limit: number): Promise<{ jobs: Job[], total: number }> {
    const skip = (page - 1) * limit;
    try {
        const [jobs, total] = await Promise.all([
            prisma.job.findMany({
                include: {
                    industry: true,
                    job_function: true,
                    subfunction: true,
                },
                skip,
                take: limit,
                orderBy: { created_date: 'desc' }
            }),
            prisma.job.count()
        ]);
        return { jobs: jobs as Job[], total };
    } catch (error) {
        console.error('error fetching all jobs: ', error);
        return { jobs: [], total: 0 };
    }
}

export async function findByFilter(filters: JobSearchFilters): Promise<{ jobs: Job[], total: number }> {
    const skip = (filters.page - 1) * filters.limit;

    if (!filters.query &&
        (!filters.locations || filters.locations.length === 0) &&
        (!filters.jobFunctions || filters.jobFunctions.length === 0) &&
        (!filters.jobSubfunctions || filters.jobSubfunctions.length === 0) &&
        (!filters.industries || filters.industries.length === 0) &&
        (!filters.employment_type || filters.employment_type.length === 0) &&
        (!filters.salaryMin || filters.salaryMin === 0) &&
        (!filters.salaryMax || filters.salaryMax === 0) &&
        !filters.postDateRange
    ) {
        return findByStatus(filters.status, filters.page, filters.limit);
    }
    try {
        const lowercasedQuery = filters.query?.toLowerCase();
        const dateCondition = _buildDateCondition(filters.postDateRange);

        const jobs: Job[] = await prisma.$queryRaw`
            SELECT DISTINCT ON (j.job_id)
                j.*, i.industry_name,
                jf.job_function_name,
                js.job_subfunction_name
            FROM jobs j
                LEFT JOIN industries i ON j.industry_id = i.industry_id
                LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
                LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id
            WHERE j.status = ANY (${filters.status}) 
                ${(filters.locations && filters.locations.length > 0) ? Prisma.sql`AND j.location = ANY(${filters.locations})` : Prisma.empty}
                ${_buildJobFunction(filters.jobFunctions || [])}
                ${_buildJobSubfunction(filters.jobSubfunctions || [])}
                ${_buildIndustries(filters.industries || [])}
                ${_buildEmploymentType(filters.employment_type || [])}
                ${_buildMinSalary(filters.salaryMin || 0)}
                ${_buildMaxSalary(filters.salaryMax || maxSalaryValue)}
                ${dateCondition}
                ${lowercasedQuery ? _buildSearchCondition(lowercasedQuery) : Prisma.empty}
            ORDER BY j.job_id, j.close_date DESC
            LIMIT ${filters.limit}
            OFFSET ${skip}
        `;

        const totalCount: { count: bigint }[] = await prisma.$queryRaw`
            select count(distinct j.job_id) as count
            FROM jobs j
                LEFT JOIN industries i
            ON j.industry_id = i.industry_id
                LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
                LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id AND
                j.job_subfunction_id = js.job_subfunction_id
            WHERE j.status = ANY(${filters.status}) 
                ${filters.locations && filters.locations.length > 0 ? Prisma.sql`AND j.location = ANY(${filters.locations})` : Prisma.empty}
                ${_buildJobFunction(filters.jobFunctions || [])}
                ${_buildJobSubfunction(filters.jobSubfunctions || [])}
                ${_buildIndustries(filters.industries || [])}
                ${_buildEmploymentType(filters.employment_type || [])}
                ${_buildMinSalary(filters.salaryMin || 0)}
                ${_buildMaxSalary(filters.salaryMax || maxSalaryValue)}
                ${dateCondition}
                ${lowercasedQuery ? _buildSearchCondition(lowercasedQuery) : Prisma.empty}
        `;
        return {
            jobs,
            total: Number(totalCount[0].count)
        }

    } catch (error) {
        console.error('error in finding jobs with filters', error);
        return { jobs: [], total: 0 };
    }
}

function _buildDateCondition(postDateRange?: string): Prisma.Sql {
    if (!postDateRange) return Prisma.empty;
    switch (postDateRange) {
        case 'Past 24 hours':
            return Prisma.sql`AND j.created_date >= NOW() - INTERVAL '24 Hours'`;
        case 'Past week':
            return Prisma.sql`AND j.created_date >= NOW() - INTERVAL '1 Week'`;
        case 'Past month':
            return Prisma.sql`AND j.created_date >= NOW() - INTERVAL '1 Month'`;
        default:
            return Prisma.empty;
    }
}

function _buildJobFunction(jobFunctions: string[]): Prisma.Sql {
    return jobFunctions.length > 0
        ? Prisma.sql`AND(${Prisma.join(jobFunctions.map(jf => Prisma.sql`jf.job_function_name ILIKE ${`%${jf.toLowerCase()}%`}`),
            ' OR '
        )})`
        : Prisma.empty
}

function _buildJobSubfunction(jobSubfunctions: string[]): Prisma.Sql {
    return jobSubfunctions.length > 0
        ? Prisma.sql`AND(${Prisma.join(
            jobSubfunctions.map(js => Prisma.sql`js.job_subfunction_name ILIKE ${`%${js.toLowerCase()}%`}`),
            ' OR '
        )})`
        : Prisma.empty
}

function _buildIndustries(industries: string[]): Prisma.Sql {
    return industries.length > 0
        ? Prisma.sql`AND(${Prisma.join(
            industries.map(i => Prisma.sql`i.industry_name ILIKE ${`%${i.toLowerCase()}%`}`),
            ' OR '
        )})`
        : Prisma.empty
}

function _buildEmploymentType(employmentType: string[]): Prisma.Sql {
    return employmentType.length > 0
        ? Prisma.sql`AND j.employment_type ILIKE ANY(${employmentType})`
        : Prisma.empty
}

function _buildMinSalary(salaryMin: number | null): Prisma.Sql {
    return (salaryMin != null && salaryMin > 0) ? Prisma.sql`AND j.salary_range_start >= ${salaryMin}` : Prisma.empty
}

function _buildMaxSalary(salaryMax: number | null): Prisma.Sql {
    return (salaryMax != null && salaryMax > 0 && salaryMax < maxSalaryValue) ? Prisma.sql`AND j.salary_range_end <= ${salaryMax}` : Prisma.empty
}

function _buildSearchCondition(query: string): Prisma.Sql {
    return Prisma.sql` AND(
                to_tsvector('english'
                    , coalesce(j.job_title
                        , '') || ' ' ||
                    coalesce(j.description
                        , '') || ' ' ||
                    coalesce(j.location
                        , '') || ' ' ||
                    coalesce(i.industry_name
                        , '') || ' ' ||
                    coalesce(jf.job_function_name
                        , '')
                ) @@plainto_tsquery('english'
                    , ${query})
               OR j.job_title ILIKE ${`%${query}%`}
               OR j.location ILIKE ${`%${query}%`}
               OR i.industry_name ILIKE ${`%${query}%`}
               OR jf.job_function_name ILIKE ${`%${query}%`}
                )`;
}

// export class JobRepository {
//     async findBySearch(
//         query: string,
//         status: string[],
//         locations: string[],
//         jobFunctions: string[],
//         jobSubfunctions: string[],
//         industries: string[],
//         employment_type: string[],
//         postDateRange: string,
//         page = 1,
//         limit = 19,
//     ) {
//         const skip = (page - 1) * limit;

//         if (!query && locations.length == 0 && jobFunctions.length == 0 && jobSubfunctions.length == 0 && industries.length == 0 && employment_type.length == 0 && !postDateRange) {
//             return this.findJobs(status, skip, limit);
//         }

//         // const lowercasedQuery = query.toLowerCase();
//         // let dateCondition = Prisma.empty;
//         // if (postDateRange) {
//         //     // const now = new Date();
//         //     // let cutoffDate: Date;
//         //     // const oneDayMilliseconds = 24 * 60 * 60 * 1000;
//         //     switch (postDateRange) {
//         //         case 'Past 24 hours':
//         //             // cutoffDate = new Date(now.getTime() - oneDayMilliseconds);
//         //             dateCondition = Prisma.sql`AND j.created_date >= NOW() - INTERVAL '24 Hours'`
//         //             break;
//         //         case "Past week":
//         //             // cutoffDate = new Date(now.getTime() - 7 * oneDayMilliseconds);
//         //             dateCondition = Prisma.sql`AND j.created_date >= NOW() - INTERVAL '1 Week'`
//         //             break;
//         //         case "Past month":
//         //             // cutoffDate = new Date(now.getTime() - 30 * oneDayMilliseconds);
//         //             dateCondition = Prisma.sql`AND j.created_date >= NOW() - INTERVAL '1 Month'`
//         //             break;
//         //         // default:
//         //         //     cutoffDate = new Date(now.getTime());
//         //     }
//         //     // if (cutoffDate) {
//         //     //     dateCondition = Prisma.sql`AND j.created_date >= ${ cutoffDate.toISOString() } `
//         //     // }
//         // }

//         const jobs: Job[] = await prisma.$queryRaw`
//             SELECT DISTINCT
//     ON(j.job_id)
//     j.*, i.industry_name,
//         jf.job_function_name,
//         js.job_subfunction_name
//             FROM jobs j
//                 LEFT JOIN industries i
//             ON j.industry_id = i.industry_id
//                 LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
//                 LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id
//             WHERE j.status = ANY(${status}) ${locations.length > 0 ? Prisma.sql`AND j.location = ANY(${locations})` : Prisma.empty}
//                 ${jobFunctions.length > 0
//                 ? Prisma.sql`AND (${Prisma.join(jobFunctions.map(jf => Prisma.sql`jf.job_function_name ILIKE ${`%${jf.toLowerCase()}%`}`),
//                     ' OR '
//                 )})`
//                 : Prisma.empty
//             }
//                 ${jobSubfunctions.length > 0
//                 ? Prisma.sql`AND (${Prisma.join(
//                     jobSubfunctions.map(js => Prisma.sql`js.job_subfunction_name ILIKE ${`%${js.toLowerCase()}%`}`),
//                     ' OR '
//                 )})`
//                 : Prisma.empty
//             }
//                 ${industries.length > 0
//                 ? Prisma.sql`AND (${Prisma.join(
//                     industries.map(i => Prisma.sql`i.industry_name ILIKE ${`%${i.toLowerCase()}%`}`),
//                     ' OR '
//                 )})`
//                 : Prisma.empty
//             }
//                 ${employment_type.length > 0
//                 ? Prisma.sql`AND j.employment_type ILIKE ANY(${employment_type})`
//                 : Prisma.empty
//             }
//                 ${dateCondition}

//     --TODO: add other filter criteria continue from here

//     AND(
//         to_tsvector('english'
//             , coalesce(j.job_title
//                 , '') || ' ' ||
//             coalesce(j.description
//                 , '') || ' ' ||
//             coalesce(j.location
//                 , '') || ' ' ||
//             coalesce(i.industry_name
//                 , '') || ' ' ||
//             coalesce(jf.job_function_name
//                 , '')
//         ) @@plainto_tsquery('english'
//             , ${lowercasedQuery})
//                OR j.job_title ILIKE ${`%${lowercasedQuery}%`}
//                OR j.location ILIKE ${`%${lowercasedQuery}%`}
//                OR i.industry_name ILIKE ${`%${lowercasedQuery}%`}
//                OR jf.job_function_name ILIKE ${`%${lowercasedQuery}%`}
//                 )
//             ORDER BY j.job_id, j.close_date DESC
//                 LIMIT ${limit}
//             OFFSET ${skip}
// `;

//         type CountResult = {
//             count: string | number;
//         }

//         const totalCount: CountResult[] = await prisma.$queryRaw`
//             select count(distinct j.job_id) as count
//             FROM jobs j
//                 LEFT JOIN industries i
//             ON j.industry_id = i.industry_id
//                 LEFT JOIN job_functions jf ON j.job_function_id = jf.job_function_id
//                 LEFT JOIN job_subfunctions js ON j.job_function_id = js.job_function_id AND
// j.job_subfunction_id = js.job_subfunction_id
//             WHERE j.status = ANY(${status}) ${locations.length > 0 ? Prisma.sql`AND j.location = ANY(${locations})` : Prisma.empty} ${jobFunctions.length > 0
//                 ? Prisma.sql`AND (${Prisma.join(
//                     jobFunctions.map(jf => Prisma.sql`jf.job_function_name ILIKE ${`%${jf.toLowerCase()}%`}`),
//                     ' OR '
//                 )})`
//                 : Prisma.empty
//             } ${jobSubfunctions.length > 0
//                 ? Prisma.sql`AND (${Prisma.join(
//                     jobSubfunctions.map(js => Prisma.sql`js.job_subfunction_name ILIKE ${`%${js.toLowerCase()}%`}`),
//                     ' OR '
//                 )})`
//                 : Prisma.empty
//             } ${industries.length > 0
//                 ? Prisma.sql`AND (${Prisma.join(
//                     industries.map(i => Prisma.sql`i.industry_name ILIKE ${`%${i.toLowerCase()}%`}`),
//                     ' OR '
//                 )})`
//                 : Prisma.empty
//             } ${dateCondition}

// --TODO: add other filter criteria from here

// AND(
//     to_tsvector('english'
//         , coalesce(j.job_title
//             , '') || ' ' ||
//         coalesce(j.description
//             , '') || ' ' ||
//         coalesce(j.location
//             , '') || ' ' ||
//         coalesce(i.industry_name
//             , '') || ' ' ||
//         coalesce(jf.job_function_name
//             , '')
//     ) @@plainto_tsquery('english'
//         , ${lowercasedQuery})
//                OR j.job_title ILIKE ${`%${lowercasedQuery}%`}
//     OR j.location ILIKE ${`%${lowercasedQuery}%`}
//     OR i.industry_name ILIKE ${`%${lowercasedQuery}%`}
//     OR jf.job_function_name ILIKE ${`%${lowercasedQuery}%`}
// )
//     `;

//         return {
//             jobs,
//             total: Number(totalCount[0].count)
//         };

//     }

//     async findJobs(
//         status: string[],
//         skip: number,
//         limit: number
//     ) {
//         const whereConditions: Prisma.JobWhereInput = {
//             status: { in: status }
//         }
//         const jobs = await prisma.job.findMany({
//             where: whereConditions,
//             orderBy: { close_date: "desc" },
//             select: {
//                 job_id: true,
//                 job_title: true,
//                 description: true,
//                 salary_range_start: true,
//                 salary_range_end: true,
//                 close_date: true,
//                 industry: { select: { industry_name: true } },
//                 job_function: { select: { job_function_name: true } },
//                 subfunction: { select: { job_subfunction_name: true } },
//                 location: true,
//                 status: true,
//                 employment_type: true
//             },
//             skip,
//             take: limit
//         });

//         const total = await prisma.job.count({ where: { status: { in: status } } });

//         return { jobs, total };
//     }

//     // method to get popular searches
//     // async getPopularJobs(limit = 10) {
//     //     return prisma.$queryRaw`
//     //         SELECT j.job_title, COUNT(*) as frequency
//     //         FROM jobs j
//     //         WHERE j.status = 'active'
//     //         GROUP BY j.job_title
//     //         ORDER BY frequency DESC
//     //             LIMIT ${limit}
//     //     `;
//     // }

// }