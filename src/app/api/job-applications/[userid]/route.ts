// src/app/api/job-applications/[userid]/route.ts
import {NextResponse} from 'next/server';
import {auth} from 'enigma/auth';
import {getJobApplicationsByUserId} from "enigma/services/jobApplicationServices";

export async function GET(request: Request, context: {params: {userid: string}}) {
    try {
        const {params} = await context;
        const id = parseInt(params.userid, 10);
        if (isNaN(id)) {
            return NextResponse.json({error: "Invalid user id"}, {status: 400});
        }
        const session = await auth();
        if (!session || session.user?.role !== 'admin') {
            return NextResponse.json(
                {error: 'Unauthorized access! You must be an admin to view this page.'},
                {status: 401}
            );
        }
        const jobApplications = await getJobApplicationsByUserId(String(id));
        if (!jobApplications) {
            return NextResponse.json({error: 'No users found!'});
        }
        return jobApplications;
    } catch (error) {
        console.error('Error fetching job applications:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    }
}