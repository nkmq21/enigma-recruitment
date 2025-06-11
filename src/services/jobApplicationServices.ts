// src/services/jobApplicationServices.ts
import {NextResponse} from "next/server";
import {prisma} from "../../prisma/prisma";

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
            console.error("jobApplicationServices.getJobApplications: Job applications not found");
            return null;
        }
        return NextResponse.json(jobApplications);
    } catch (error) {
        console.error("jobApplicationServices.getJobApplications: Error fetching user: ", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getJobApplicationsByUserId(id: string) {
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
                        location: true,
                        status: true
                    }
                }
            },
            where: {
                user_id: parseInt(id)
            }
        });
        if (!jobApplications) {
            console.error("jobApplicationServices.getJobApplicationsByUserId: Job applications not found");
            return null;
        }
        return NextResponse.json(jobApplications);
    } catch (error) {
        console.error("jobApplicationServices.getJobApplicationsByUserId: Error fetching user: ", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}