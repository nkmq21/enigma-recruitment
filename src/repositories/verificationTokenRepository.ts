// src/repositories/verificationTokenRepository.ts
"use server";
import {prisma} from "../../prisma/prisma";

export async function createVerificationToken(email: string, token: string, expires: Date) {
    return prisma.verificationToken.create({
        data: { email, token, expires }
    });
}

export async function getVerificationTokenByToken(token: string) {
    return prisma.verificationToken.findUnique({
        where: { token }
    });
}

export async function getVerificationTokenByEmail(email: string) {
    return prisma.verificationToken.findFirst({
        where: { email }
    });
}

export async function deleteVerificationTokenByToken(identifier: string) {
    return prisma.verificationToken.delete({
        where: { identifier }
    });
}

export async function deleteVerificationTokenByEmail(email: string) {
    return prisma.verificationToken.deleteMany({
        where: { email }
    });
}