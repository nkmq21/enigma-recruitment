// src/app/api/job-applications/[userid]/route.ts
import {NextResponse} from 'next/server';
import {auth} from 'enigma/auth';
import {getJobApplicationsByUserId} from "enigma/services/jobApplicationServices";

type Params = Promise<{ userid: string }>;

export async function GET(request: Request, {params}: {params: Params}) {
    try {
        const {userid} = await params;
        const id = parseInt(userid, 10);
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
        return NextResponse.json(jobApplications);
    } catch (error) {
        console.error('Error fetching job applications:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    }
}