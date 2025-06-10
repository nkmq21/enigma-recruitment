// src/app/api/login/reset-password/route.ts
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
        const {email, oldPassword, newPassword} = await request.json();
        if (!email || !oldPassword || !newPassword || newPassword.trim() === '') {
            return NextResponse.json(
                {error: 'Email, old password and new password are required.'},
                {status: 400}
            );
        }
        // Check if the email matches
        const user = await prisma.user.findUnique({
            where: {email: email}
        });
        // Check if the old password matches
        const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!user || !isOldPasswordValid) {
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
        // Make sure new password is different from the old one
        const arePasswordsSame = await bcrypt.compare(newPassword, user.password);
        if (arePasswordsSame) {
            return NextResponse.json(
                {error: 'New password cannot be the same as the old password.'},
                {status: 400}
            );
        }
        // Update the password
        const newPasswordHashed = await bcrypt.hash(newPassword, 10);
        await prisma.user.update({
            where: {email: email},
            data: {password: newPasswordHashed}
        });
        return NextResponse.json({messageL: 'Password reset successful.'}, {status: 200});
    } catch (err) {
        return NextResponse.json(
            {error: 'Internal server error.'},
            {status: 500}
        );
    } finally {
        await prisma.$disconnect();
    }
}