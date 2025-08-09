import { NextRequest, NextResponse } from 'next/server';
import { JobLocation } from 'enigma/services/jobService';

export async function GET(request: NextRequest) {
    try {
        console.log('API: Starting to fetch locations...');
        const locations = await JobLocation();
        console.log('API: Successfully fetched locations:', locations);

        return NextResponse.json(locations);
    } catch (error) {
        console.error('API: Error fetching locations:', error);
        return NextResponse.json(
            {
                message: 'Failed to fetch locations',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}