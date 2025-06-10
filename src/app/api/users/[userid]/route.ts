// src/app/api/users/[userid]/route.ts
import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, context: {params: {userid: string}}) {
    try {
        const {params} = context;
        const userid = parseInt(params.userid, 10);
        if (isNaN(userid)) {
            return NextResponse.json({error: "Invalid user id"}, {status: 400});
        }

        const user = await prisma.user.findUnique({
            where: {id: userid},
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
        if (!user) return NextResponse.json({error: "User not found"}, {status: 404});

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            {error: 'Internal Server Error'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}