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

export class FilterService {
    async getIndustries() {
        const industries = await prisma.industry.findMany({
            select: {
                industry_name: true,
            },
            orderBy: {
                industry_name: 'asc',
            },
            distinct: ['industry_name']
        });
        return industries.map((jobIndustry) => jobIndustry.industry_name);
    }

    async getJobFunctions() {
        const jobFunctions = await prisma.jobFunction.findMany({
            select: {
                job_function_name: true,
            },
            orderBy: {
                job_function_name: 'asc'
            },
            distinct: ['job_function_name']
        });
        return jobFunctions.map((jobFunction) => jobFunction.job_function_name);
    }

    async getJobSubfunctions() {
        const jobSubfunctions = await prisma.jobSubfunction.findMany({
            select: {
                job_subfunction_name: true
            },
            orderBy: {
                job_subfunction_name: 'asc'
            },
            distinct: ['job_subfunction_name']
        });
        return jobSubfunctions.map((jobSubfunction) => jobSubfunction.job_subfunction_name);
    }

    async getLocations() {
        const jobLocation = await prisma.job.findMany({
            where: {
                status: "active",
            },
            select: {
                location: true,
            },
            distinct: ['location'],
        });
        return jobLocation.map((job) => job.location);
    }

}