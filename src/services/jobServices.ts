// src/services/jobServices.ts
import { Job } from 'enigma/types/models';
import { prisma } from '../../prisma/prisma';

export async function getJob(jobid: string): Promise<Job> {
    const response = await fetch(`/api/jobs/${jobid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}

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

export async function JobIndustry() {
    const jobIndustry = await prisma.industry.findMany({
        select: {
            industry_name: true,
        },
        orderBy: {
            industry_name: 'asc',
        }
    });

    //map to string[]
    return jobIndustry.map((jobIndustry) => jobIndustry.industry_name);
}