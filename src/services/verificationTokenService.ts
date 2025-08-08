// src/services/verificationTokenService.ts
"use server";
import * as tokenUtils from "enigma/utils/tokenUtils";
import * as _verificationTokenRepository from "enigma/repositories/verificationTokenRepository";

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