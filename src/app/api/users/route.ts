// src/app/api/users/route.ts
import {NextResponse} from 'next/server';
import {auth} from 'enigma/auth';
import {getUsers} from "enigma/services/userServices";

export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session || session.user?.role !== 'admin') {
            return NextResponse.json(
                {error: 'Unauthorized access! You must be an admin to view this page.'},
                {status: 401}
            );
        }
        const users = await getUsers();
        if (!users) {
            return NextResponse.json({error: 'No users found!'});
        }
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    }
}