// src/services/jobApplicationService.ts
import {prisma} from "../../prisma/prisma";
export type JobApplicationWithFlatJob = {
    application_id: number
    user_id: number
    cv_id: number | null
    applied_time: Date
    status: string
    job: {
        job_id: string
        job_title: string
        employment_type: string
        location: string
        status: string
        industry_name: string | null
        job_function_name: string | null
        job_subfunction_name: string | null
    }
}

export async function getJobApplications() {
    try {
        const jobApplications = await prisma.jobApplication.findMany({
            select: {
                application_id: true,
                user_id: true,
                cv_id: true,
                applied_time: true,
                status: true,
                job: {
                    select: {
                        job_id: true,
                        job_title: true,
                        employment_type: true,
                        industry: {
                            select: {
                                industry_name: true
                            }
                        },
                        job_function: {
                            select: {
                                job_function_name: true
                            }
                        },
                        subfunction: {
                            select: {
                                job_subfunction_name: true
                            }
                        },
                    },
                }
            }
        });
        if (!jobApplications) {
            return null;
        }
        return jobApplications;
    } catch (error) {
        return null;
    }
}

export async function getJobApplicationsByUserId(id: string): Promise<JobApplicationWithFlatJob[] | null> {
    const userid = parseInt(id);
    try {
        const applications = await prisma.jobApplication.findMany({
            where: {user_id: userid},
            select: {
                application_id: true,
                user_id: true,
                cv_id: true,
                applied_time: true,
                status: true,
                job_id: true,
            }
        });
        if (applications.length == 0) {
            return [];
        }
        // collect unique job_ids
        const jobIds = Array.from(new Set(applications.map(a => a.job_id)));

        // 2) bulk-fetch the jobs
        const jobs = await prisma.job.findMany({
            where: { job_id: { in: jobIds } },
            select: {
                job_id: true,
                job_title: true,
                employment_type: true,
                location: true,
                status: true,
                industry_id: true,
                job_function_id: true,
                job_subfunction_id: true,
            }
        });

        // 3) fetch the name lookups
        const [ industries, functions, subfunctions ] = await Promise.all([
            prisma.industry.findMany({
                where: { industry_id: { in: jobs.map(j => j.industry_id) } },
                select: { industry_id: true, industry_name: true }
            }),
            prisma.jobFunction.findMany({
                where: { job_function_id: { in: jobs.map(j => j.job_function_id) } },
                select: { job_function_id: true, job_function_name: true }
            }),
            prisma.jobSubfunction.findMany({
                where: { job_subfunction_id: { in: jobs.map(j => j.job_subfunction_id) } },
                select: { job_subfunction_id: true, job_subfunction_name: true }
            }),
        ]);

        // 4) build quick lookup maps
        const indMap = new Map(industries.map(i => [i.industry_id, i.industry_name]));
        const funcMap = new Map(functions.map(f => [f.job_function_id, f.job_function_name]));
        const subMap = new Map(subfunctions.map(s => [s.job_subfunction_id, s.job_subfunction_name]));
        const jobMap = new Map(jobs.map(j => [j.job_id, j]));

        // 5) stitch it all together
        return applications.map(a => {
            const j = jobMap.get(a.job_id)!;
            return {
                application_id: a.application_id,
                user_id:        a.user_id,
                cv_id:          a.cv_id,
                applied_time:   a.applied_time,
                status:         a.status,
                job: {
                    job_id:            j.job_id,
                    job_title:         j.job_title,
                    employment_type:   j.employment_type,
                    location:          j.location,
                    status:            j.status,
                    industry_name:     indMap.get(j.industry_id)   ?? null,
                    job_function_name: funcMap.get(j.job_function_id) ?? null,
                    job_subfunction_name: subMap.get(j.job_subfunction_id) ?? null,
                }
            }
        });
    } catch (err) {
        return null;
    }
}