import { getJobsByStatus } from "enigma/services/jobService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const status = ['active', 'prioritized'];
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    try {
        const result = await getJobsByStatus(status, page, limit);
        return NextResponse.json(result.data);
    } catch (error) {
        console.error('failed in getting jobs via status for admin');
        return NextResponse.json(
            { error: 'Failed to fetch jobs for admin page' },
            { status: 500 }
        );
    }
}