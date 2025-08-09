// src/services/verificationTokenService.ts
"use server";
import * as tokenUtils from "enigma/utils/tokenUtils";
import * as _verificationTokenRepository from "enigma/repositories/verificationTokenRepository";
import {VerificationToken} from "enigma/types/models";
import {GenericResponse} from "enigma/types/DTOs";

export const createVerificationToken = async (email: string) => {
    try {
        // Check if token already exists and delete it
        const existingToken = await _verificationTokenRepository.getVerificationTokenByEmail(email);
        if (existingToken) {
            await _verificationTokenRepository.deleteVerificationTokenByToken(existingToken.identifier);
        }

        // Generate new token using utility
        const token = tokenUtils.generateToken();
        const expires = tokenUtils.generateTokenExpiry(24); // 24 hours

        const verificationToken = await _verificationTokenRepository.createVerificationToken(email, token, expires);

        return {
            success: "Confirmation email sent! Please check your inbox and your spam folder.",
            email: verificationToken.email,
            token: verificationToken.token
        };
    } catch (error) {
        return null;
    }
}

export async function getVerificationToken(input: string, type: "token" | "email"): Promise<GenericResponse<VerificationToken>> {
    try {
        const verificationToken = type === "token"
            ? await _verificationTokenRepository.getVerificationTokenByToken(input)
            : await _verificationTokenRepository.getVerificationTokenByEmail(input);

        if (!verificationToken) {
            return {error: 'Verification token not found'};
        }

        return {data: verificationToken};
    } catch (error) {
        return {error: error instanceof Error
            ? `Database error: ${error.message}`
            : 'An unexpected error occurred.'};
    }
}

export async function deleteVerificationToken(input: string, type: "token" | "email"): Promise<GenericResponse<void>> {
    try {
        const result = type === "token"
            ? await _verificationTokenRepository.deleteVerificationTokenByToken(input)
            : await _verificationTokenRepository.deleteVerificationTokenByEmail(input);
        if (!result) {
            return {error: 'Verification token not found or could not be deleted'};
        }
        return {data: undefined};
    } catch (error) {
        return {error: error instanceof Error
            ? `Database error: ${error.message}`
            : 'An unexpected error occurred.'};
    }
}