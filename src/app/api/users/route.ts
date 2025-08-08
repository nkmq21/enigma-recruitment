// src/app/api/users/route.ts
import {NextRequest, NextResponse} from 'next/server';
import {auth} from "enigma/auth";
import {getPaginatedUsers} from "enigma/services/userService";

export async function GET(request: NextRequest) {
    try {
        // Authentication check
        const session = await auth();
        if (!session || session.user?.role !== 'admin') {
            return NextResponse.json(
                { error: 'Unauthorized access! You must be an admin to view this page.' },
                { status: 401 }
            );
        }

        // Extract query parameters
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);

        // Validate parameters
        if (page < 1 || limit < 1 || limit > 100) {
            return NextResponse.json(
                { error: 'Invalid pagination parameters' },
                { status: 400 }
            );
        }

        // Call service layer
        const result = await getPaginatedUsers(page, limit);
        if (!result.data || result.error || !result.data.users) {
            return NextResponse.json(
                { error: result.error || 'Failed to fetch users' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            users: result.data.users,
            tota: result.data.total,
            page,
            limit,
            totalPages: Math.ceil(result.data.total / limit)
        });
    } catch (error) {
        console.error('Error in getUsersController:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}