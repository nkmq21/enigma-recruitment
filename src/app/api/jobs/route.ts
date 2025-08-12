import { NextRequest, NextResponse } from 'next/server';
import { JobSearchFilters } from "enigma/repositories/jobRepository";
import { searchJobs } from 'enigma/services/jobService';

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

    const jobSubfunctionParam = searchParams.get('jobSubfunctions') || '' as string;
    const jobSubfunctions = jobSubfunctionParam ? jobSubfunctionParam.split(',').map(jobSubfunc => jobSubfunc.trim()) : [];

    const industryParam = searchParams.get('industries') || '' as string;
    const industries = industryParam ? industryParam.split(',').map(industry => industry.trim()) : [];

    const employmentTypeParam = searchParams.get('employment_type') || '' as string;
    const employment_type = employmentTypeParam ? employmentTypeParam.split(',').map(empType => empType.trim()) : [];

    const postDateRange = searchParams.get('postDateRange') || '' as string;

    const salaryMin = parseInt(searchParams.get('salaryMin') || '0');
    const salaryMax = parseInt(searchParams.get('salaryMax') || '10000');

    //TODO: other filter params will continue from here

    const filters: JobSearchFilters = {
        query,
        status,
        locations,
        jobFunctions,
        jobSubfunctions,
        industries,
        employment_type,
        postDateRange,
        salaryMin,
        salaryMax,
        page,
        limit
    };

    try {
        //fetch filter options
        //TODO: add other filter params to the search method below
        const result = await searchJobs(filters);

        // if (!result.error) {
        //     return NextResponse.json(
        //         { error: result.error || result.message },
        //         { status: 400 }
        //     );
        // }
        return NextResponse.json(result.data)
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch jobs' },
            { status: 500 }
        );
    }
}