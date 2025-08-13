import { JobSearchFilters } from "enigma/repositories/jobRepository";
import { searchJobs } from "enigma/services/jobService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const filters: JobSearchFilters = {
        status: searchParams.get('status')?.split(',') || ['active', 'prioritized', 'expired'],
        page: parseInt(searchParams.get('page') || '1', 10),
        limit: parseInt(searchParams.get('limit') || '20', 10),
        query: searchParams.get('query') || ''
    };

    try {
        const result = await searchJobs(filters);
        return NextResponse.json(result.data);
    } catch (error) {
        console.error('failed in getting jobs via status for admin');
        return NextResponse.json(
            { error: 'Failed to fetch jobs for admin page' },
            { status: 500 }
        );
    }
}