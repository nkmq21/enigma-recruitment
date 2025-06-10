// src/app/api/users/[userid]/route.ts
import {NextResponse} from 'next/server';
import {prisma} from '../../../../../prisma/prisma';
import {auth} from 'enigma/auth';
import {getUser} from "enigma/services/userServices";

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
        const user = await getUser(String(id));
        if (!user) {
            return NextResponse.json({error: 'No users found!'});
        }
        return user;
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}