// src/app/api/jobs/[jobid]/route.ts
import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, {params}: {params: {jobid: string}}) {
    try {
        const jobid = params.jobid;
        if (!jobid) {
            return NextResponse.json({error: "Invalid job id"}, {status: 400});
        }

        const job = await prisma.job.findUnique({
            where: {job_id: jobid},
            select: {
                job_id: true,
                job_title: true,
                description: true,
                salary_range_start: true,
                salary_range_end: true,
                close_date: true,
                industry: {
                    select: {
                        industry_name: true,
                    },
                },
                job_function: {
                    select: {
                        job_function_name: true,
                    },
                },
                subfunction: {
                    select: {
                        job_subfunction_name: true,
                    },
                },
                location: true,
                status: true,
                employment_type: true
            }
        });
        if (!job) return NextResponse.json({error: "User not found"}, {status: 404});

        return NextResponse.json(job);
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}