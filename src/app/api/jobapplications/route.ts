// src/app/api/jobapplications/route.ts
import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const jobapplications = await prisma.jobApplication.findMany({
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

        return NextResponse.json(jobapplications);
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