// src/services/resetPasswordTokenService.ts
"use server";
import * as tokenUtils from "enigma/utils/tokenUtils";
import * as _resetPasswordTokenRepository from "enigma/repositories/resetPasswordTokenRepository";
import {prisma} from "../../prisma/prisma";
import {GenericResponse} from "enigma/types/DTOs";
import {ResetPasswordToken} from "enigma/types/models";

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

export async function getResetPasswordToken(input: string, type: "token" | "email"): Promise<GenericResponse<ResetPasswordToken>> {
    try {
        const result = type === "token"
            ? await _resetPasswordTokenRepository.getResetPasswordTokenByToken(input)
            : await _resetPasswordTokenRepository.getResetPasswordTokenByEmail(input);
        if (!result) {
            return {error: `Reset password token not found for ${type}: ${input}`};
        }
        return {data: result};
    } catch (error) {
        return {error: error instanceof Error
            ? `Database error: ${error.message}`
            : 'An unexpected error occurred.'};
    }
}

export async function deleteResetPasswordToken(input: string, type: "token" | "email"): Promise<GenericResponse<void>> {
    try {
        const result = type === "token"
            ? await _resetPasswordTokenRepository.deleteResetPasswordTokenByToken(input)
            : await _resetPasswordTokenRepository.deleteResetPasswordTokenByEmail(input);
        if (!result) {
            return {error: `Reset password token not found or could not be deleted for ${type}: ${input}`};
        }
        return {data: undefined};
    } catch (error) {
        return {error: error instanceof Error
            ? `Database error: ${error.message}`
            : 'An unexpected error occurred.'};
    }
}