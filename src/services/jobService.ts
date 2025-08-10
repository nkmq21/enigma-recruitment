// src/services/jobService.ts
import { Job } from 'enigma/types/models';
import { GenericResponse, PageginatedResponse } from 'enigma/types/DTOs';
import { findByFilter, findById, findByStatus, JobSearchFilters } from 'enigma/repositories/jobRepository';

export async function getJobById(jobId: string): Promise<GenericResponse<Job>> {
    try {
        if (!jobId) {
            return {
                error: 'job id is required'
            };
        }
        const job = await findById(jobId);
        if (!job) {
            return {
                error: 'job not found'
            }
        }
        return {
            success: 'got the right job',
            data: job
        }
    } catch (error) {
        console.error('error with get job by id', error);
        return {
            error: 'failed to retrieve the job',
        };
    }
}

export async function getJobsByStatus(
    status: string[],
    page: number,
    limit: number,
): Promise<GenericResponse<PageginatedResponse<Job>>> {
    page = 1;
    limit = 20;
    try {
        if (!status || status.length === 0) {
            return {
                error: 'status is required'
            };
        }
        if (page < 1 || limit < 1) {
            return {
                error: 'page and limit must be a positive number'
            };
        }
        const { jobs, total } = await findByStatus(status, page, limit);
        const totalPages = Math.ceil(total / limit);
        return {
            success: 'retrieved jobs by status success',
            data: {
                items: jobs,
                meta: {
                    total,
                    page,
                    limit,
                    totalPages
                }
            }
        };
    } catch (error) {
        console.error('error in get job via status: ', error);
        return {
            error: 'failed to retrieve jobs by status'
        };
    }
}

export async function searchJobs(filters: JobSearchFilters): Promise<GenericResponse<PageginatedResponse<Job>>> {
    try {
        if (!filters.status || filters.status.length === 0) {
            return {
                error: 'status is required'
            };
        }
        if (filters.page < 1 || filters.limit < 1) {
            return {
                error: 'page and limit must be a positive number'
            };
        }

        if (filters.limit > 30) {
            filters.limit = 30;
        }

        const { jobs, total } = await findByFilter(filters);
        const totalPages = Math.ceil(total / filters.limit);
        return {
            success: 'search job success',
            data: {
                items: jobs,
                meta: {
                    total,
                    page: filters.page,
                    limit: filters.limit,
                    totalPages
                }
            },
            message: total > 0 ? 'jobs found' : 'no job match the criteria'
        };
    } catch (error) {
        console.error('search job failed: ', error);
        return {
            error: 'failed to search job'
        };
    }
}

export class FilterService {
    // async getIndustries() {
    //     const industries = await prisma.industry.findMany({
    //         select: {
    //             industry_name: true,
    //         },
    //         orderBy: {
    //             industry_name: 'asc',
    //         },
    //         distinct: ['industry_name']
    //     });
    //     return industries.map((jobIndustry) => jobIndustry.industry_name);
    // }

    // async getJobFunctions() {
    //     const jobFunctions = await prisma.jobFunction.findMany({
    //         select: {
    //             job_function_name: true,
    //         },
    //         orderBy: {
    //             job_function_name: 'asc'
    //         },
    //         distinct: ['job_function_name']
    //     });
    //     return jobFunctions.map((jobFunction) => jobFunction.job_function_name);
    // }

    // async getJobSubfunctions() {
    //     const jobSubfunctions = await prisma.jobSubfunction.findMany({
    //         select: {
    //             job_subfunction_name: true
    //         },
    //         orderBy: {
    //             job_subfunction_name: 'asc'
    //         },
    //         distinct: ['job_subfunction_name']
    //     });
    //     return jobSubfunctions.map((jobSubfunction) => jobSubfunction.job_subfunction_name);
    // }

    async getLocations() {
        const response = await fetch('/api/jobs/filters/locations');
        if (!response.ok) {
            throw new Error('failed to fetch locations')
        }
        return response.json();
    }

}

