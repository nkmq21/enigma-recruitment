import { NextRequest, NextResponse } from 'next/server';
import { JobRepositoriy } from "enigma/repositories/jobRepositoriy";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const statusParam = searchParams.get('status');
    const status = statusParam ? statusParam.split(',') : ['active', 'prioritized'];
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const query = searchParams.get('query') || '';

    const locationsParam = searchParams.get('locations') || '' as string;
    const locations = locationsParam ? locationsParam.split(',').map(loc => loc.trim()) : [];

    const jobFunctionParam = searchParams.get('jobFunctions') || '' as string;
    const jobFunctions = jobFunctionParam ? jobFunctionParam.split(',').map(jobFunc => jobFunc.trim()) : [];

    //TODO: other filter params will continue from here

    try {
        //fetch filter options
        const jobRepository = new JobRepositoriy();
        //TODO: add other filter params to the search method below
        const { jobs, total } = await jobRepository.findBySearch(query, status, locations, jobFunctions, page, limit);

        return NextResponse.json({
            jobs,
            meta: {
                total, page, limit
            }
        })
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch jobs' },
            { status: 500 }
        );
    }
}