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

        return NextResponse.json(jobApplications);
    } catch (error) {
        console.error('Error fetching job applications:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}