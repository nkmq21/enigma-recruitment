import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

/**
 * Generate a UUID token for verification and password reset
 */
export function generateToken(): string {
    return uuidv4();
}

/**
 * Generate a secure random token using crypto
 * Alternative to UUID for higher security requirements
 */
export function generateSecureToken(length: number = 32): string {
    return crypto.randomBytes(length).toString('hex');
}

/**
 * Generate token expiration date
 * @param hours - Number of hours from now (default: 1 hour)
 */
export function generateTokenExpiry(hours: number = 1): Date {
    return new Date(Date.now() + hours * 60 * 60 * 1000);
}

/**
 * Check if token is expired
 */
export function isTokenExpired(expiryDate: Date): boolean {
    return new Date(expiryDate) < new Date();
}