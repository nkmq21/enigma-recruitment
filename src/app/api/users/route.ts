// src/app/api/users/route.ts
import {NextResponse} from 'next/server';
import {auth} from 'enigma/auth';
import {getPaginatedUsers} from "enigma/services/userServices";

export async function GET(request: Request) {
    const session = await auth();
    if (!session || session.user?.role !== 'admin') {
        return NextResponse.json(
            {error: 'Unauthorized access! You must be an admin to view this page.'},
            {status: 401}
        );
    }

    const url = new URL(request.url);
    const page  = parseInt(url.searchParams.get('page')  || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);

    try {
        // 3. Fetch exactly that slice + total count
        const { users, total } = await getPaginatedUsers(page, limit);
        return NextResponse.json({ users, total });
    } catch (error) {
        console.error('Error fetching paginated users:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}