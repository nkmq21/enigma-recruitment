// src/app/api/users/route.ts
import {NextResponse} from 'next/server';
import {prisma} from '../../../../prisma/prisma';
import {auth} from 'enigma/auth';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}

export async function GET(request: Request) {
    try {
        const session = await auth();
        if (!session || session.user?.role !== 'admin') {
            return NextResponse.json(
                {error: 'Unauthorized access! You must be an admin to view this page.'},
                {status: 401}
            );
        }
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                status: true,
                image: true,
                dob: true,
                address: true,
            },
        });

        return NextResponse.json(users);
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