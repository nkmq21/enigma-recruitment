// src/repositories/resetPasswordTokenRepository.ts
"use server";
import {prisma} from "../../prisma/prisma";

export async function createResetPasswordToken(email: string, token: string, expires: Date) {
    return prisma.resetPasswordToken.create({
        data: { email, token, expires }
    });
}

export async function getResetPasswordTokenByToken(token: string) {
    return prisma.resetPasswordToken.findUnique({
        where: { token }
    });
}

export async function getResetPasswordTokenByEmail(email: string) {
    return prisma.resetPasswordToken.findFirst({
        where: { email }
    });
}

export async function deleteResetPasswordTokenByToken(identifier: string) {
    return prisma.resetPasswordToken.delete({
        where: { identifier }
    });
}

export async function deleteResetPasswordTokenByEmail(email: string) {
    return prisma.resetPasswordToken.deleteMany({
        where: { email }
    });
}