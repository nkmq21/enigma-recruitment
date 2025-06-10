// src/app/api/login/create-password/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const {email, password} = await request.json();
        if (!email || !password || password.trim() === '') {
            return NextResponse.json(
                {error: 'Email and password are required.'},
                {status: 400}
            );
        }
        // Check if the email matches
        const user = await prisma.user.findUnique({
            where: {email: email}
        });
        if (!user) {
            return NextResponse.json(
                {error: 'Invalid email or old password.'},
                {status: 401}
            );
        }
        if (user.status !== 'active') {
            return NextResponse.json(
                {error: 'User is not active.'},
                {status: 401}
            );
        }
        // Update the password
        const passwordHashed = await bcrypt.hash(password, 10);
        await prisma.user.update({
            where: {email: email},
            data: {password: passwordHashed}
        });
        return NextResponse.json({messageL: 'Password created successfully.'}, {status: 200});
    } catch (err) {
        return NextResponse.json(
            {error: 'Internal server error.'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}