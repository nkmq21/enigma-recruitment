import {NextRequest, NextResponse} from 'next/server';
import {prisma} from '../../../../prisma/prisma';
import {JobLocation, JobIndustry} from 'enigma/services/jobServices';
import {JobRepositoriy} from "enigma/repositories/jobRepositoriy";


export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const statusParam = searchParams.get('status');
    const status = statusParam ? statusParam.split(',') : ['active', 'prioritized'];
    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    try {
        //fetch filter options
        const allLocation = await JobLocation();
        const allIndustries = await JobIndustry();

        const jobRepository = new JobRepositoriy();
        const {jobs, total} = await jobRepository.findBySearch(query, status, page, limit);

        return NextResponse.json({
            jobs,
            meta: {
                total, page, limit
            }
        })
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json(
            {error: 'Failed to fetch jobs'},
            {status: 500}
        );
    }
}