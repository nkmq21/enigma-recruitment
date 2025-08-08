// src/services/resetPasswordTokenService.ts
"use server";
import * as tokenUtils from "enigma/utils/tokenUtils";
import * as _resetPasswordTokenRepository from "enigma/repositories/resetPasswordTokenRepository";
import {prisma} from "../../prisma/prisma";

export const createResetPasswordToken = async (email: string) => {
    try {
        // Check if token already exists and delete it
        const existingToken = await _resetPasswordTokenRepository.getResetPasswordTokenByEmail(email);
        if (existingToken) {
            await prisma.resetPasswordToken.delete({
                where: { identifier: existingToken.identifier }
            });
        }

        // Generate new token using utility
        const token = tokenUtils.generateToken();
        const expires = tokenUtils.generateTokenExpiry(1); // 1 hour

        const resetPasswordToken = await _resetPasswordTokenRepository.createResetPasswordToken(email, token, expires);

        return {
            success: "Reset password email sent! Please check your inbox.",
            email: resetPasswordToken.email,
            token: resetPasswordToken.token
        };
    } catch (error) {
        return null;
    }
}

export const getResetPasswordTokenByToken = async (token: string) => {
    try {
        return await _resetPasswordTokenRepository.getResetPasswordTokenByToken(token);
    } catch (error) {
        return null;
    }
}