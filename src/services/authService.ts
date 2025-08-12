// src/services/authService.ts
"use server";
import {
    ChangePasswordSchema,
    CreatePasswordSchema,
    LoginSchema,
    RegisterSchema,
    ResetPasswordSchema
} from "enigma/schemas";
import bcrypt from "bcryptjs";
import {signIn} from "enigma/auth";
import {AuthError} from "next-auth";
import {sendResetPasswordEmail, sendVerificationEmail} from "enigma/services/mailService";
import * as _resetPasswordTokenService from "enigma/services/resetPasswordTokenService";
import * as _verificationTokenService from "enigma/services/verificationTokenService";
import * as _userService from "enigma/services/userService";
import * as _tokenUtils from "enigma/utils/tokenUtils";
import Cookies from "js-cookie";
import {z} from "zod";
import {GenericResponse} from "enigma/types/DTOs";

export const login = async (data: z.infer<typeof LoginSchema>) => {
    // Validate the data using the LoginSchema
    const validatedData = LoginSchema.parse(data);
    if (!validatedData) {
        return {error: "Invalid data"};
    }
    // Destructure the validated data
    const {email, password} = validatedData;
    // Check if the user exists
    const existingUser = await _userService.getUser(email, "email");
    if (!existingUser || !existingUser.data?.password || !existingUser.data || existingUser.error) {
        return {error: existingUser.error};
    }

    // Resend confirmation email in login page
    if (!existingUser.data.emailVerified) {
        const verificationToken = await _verificationTokenService.createVerificationToken(email);
        if (verificationToken) {
            await sendVerificationEmail(verificationToken?.email, existingUser.data.name, verificationToken?.token);
            return {error: "Please confirm your email address. A new confirmation email has been sent."};
        } else {
            return {error: "Error creating verification token"};
        }
    }
    // Attempt to sign in using signIn() from Auth.js
    try {
        await signIn('credentials', {
            email: existingUser.data.email,
            password: password,
            redirect: true,
            redirectTo: '/home'
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials"};
                default:
                    return {error: "Please confirm your email address"};
            }
        }
        throw error;
    }
    return {success: "User logged in successfully"};
}

export async function loginGoogle() {
    try {
        await signIn('google', {redirectTo: '/home'});
        return undefined;
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Google logged in failed: ' + error;
        }
        throw error;
    }
}

export async function newVerification(token: string) {
    // Check if the token is valid
    const existingToken = await _verificationTokenService.getVerificationToken(token, "token");
    if (!existingToken || existingToken.error || !existingToken.data) {
        return {error: existingToken.error || "Token not found!"};
    }

    // Check if the token is expired
    if (_tokenUtils.isTokenExpired(existingToken.data.expires)) {
        return {error: "Token expired!"};
    }
    // Check if the user exists with the email in the token
    const existingUser = await _userService.getUser(existingToken.data.email, "email");
    if (!existingUser || !existingUser.data?.password || !existingUser.data || existingUser.error) {
        return {error: "Email not found!"};
    }
    // If verification is complete, update emailVerified column
    await _userService.updateUser(String(existingUser.data.id), "id", {
        emailVerified: new Date(),
        email: existingToken.data.email
    });
    // Delete the verification token after successful verification
    await _verificationTokenService.deleteVerificationToken(existingToken.data.identifier, "token");
    console.info("authService.newVerification: User email verified successfully");
    return {success: "Email verified successfully!"};
}

export async function resetPass(data: z.infer<typeof ResetPasswordSchema>): Promise<GenericResponse<void>> {
    // Validate the data using the ResetPasswordSchema
    const validatedData = ResetPasswordSchema.parse(data);
    if (!validatedData) {
        return {error: "Invalid data"};
    }
    // Destructure the validated data
    const {email} = validatedData;
    // Check if the user exists
    const existingUser = await _userService.getUser(email.toLowerCase(), "email");
    if (!existingUser || !existingUser.data) {
        return {error: "Success! If your email exists in our system, you should receive a reset password link in your inbox soon!"};
    }

    // Send reset password email
    const resetPasswordToken = await _resetPasswordTokenService.createResetPasswordToken(email);
    if (resetPasswordToken) {
        await sendResetPasswordEmail(resetPasswordToken?.email, existingUser.data.name, resetPasswordToken?.token);
        return {success: "Success! If your email exists in our system, you should receive a reset password link in your inbox soon!"};
    } else {
        return {error: "Error creating reset password token"};
    }
}

export async function changePass(data: z.infer<typeof ChangePasswordSchema>, token?: string | null): Promise<GenericResponse<void>> {
    if (!token)
        return {error: "Missing token."}
    const validatedData = ChangePasswordSchema.parse(data);
    if (!validatedData) {
        return {error: "Invalid data."};
    }
    const {password, confirmPassword} = validatedData;
    if (password !== confirmPassword) {
        return {error: "Confirm password does not match! Please enter again."}
    }
    const existingToken = await _resetPasswordTokenService.getResetPasswordToken(token, "token");
    if (!existingToken || existingToken.error || !existingToken.data) {
        return {error: existingToken.error || "Invalid token. You have already changed your password with this token."};
    }
    if (_tokenUtils.isTokenExpired(existingToken.data.expires)) {
        return {error: "Token expired."};
    }
    const existingUser = await _userService.getUser(existingToken.data.email, "email");
    if (!existingUser || !existingUser.data || existingUser.error) {
        return {error: existingUser.error || "Email does not exist."};
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await _userService.updateUser(String(existingUser.data.id), "id", {
        password: hashedPassword,
        emailVerified: new Date() // Update emailVerified to current date
    });
    await _resetPasswordTokenService.deleteResetPasswordToken(existingToken.data.identifier, "token");
    return {success: "Success! Password reset successfully! Redirecting you back to login..."};
}

export async function createPass(email: string, data: z.infer<typeof CreatePasswordSchema>): Promise<GenericResponse<void>> {
    const validatedData = CreatePasswordSchema.parse(data);
    if (!validatedData) {
        return {error: "Invalid data"};
    }
    // Destructure the validated data
    const {password} = validatedData;
    // Check if the user exists
    const existingUser = await _userService.getUser(email.toLowerCase(), "email");
    if (!existingUser || !existingUser.data || existingUser.error) {
        return {error: existingUser.error || "Invalid credentials"};
    }

    // Attempt to create password and sign in
    try {
        await _userService.updateUser(email, "email", {
            password: await bcrypt.hash(password, 10),
            emailVerified: new Date() // Update emailVerified to current date
        });
        await signIn('credentials', {
            email: existingUser.data.email,
            password: password,
            redirectTo: '/home'
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials"};
                default:
                    return {error: error.message};
            }
        }
        throw error;
    }
    return {success: "Password created successfully, user logged in successfully"};
}

export async function register(data: z.infer<typeof RegisterSchema>): Promise<GenericResponse<void>>  {
    try {
        // Validate the data using the RegisterSchema
        const validatedData = RegisterSchema.parse(data);
        if (!validatedData) {
            return {error: "Invalid data"};
        }
        // Destructure the validated data
        const {email, password, name} = validatedData;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Check if the user already exists
        const existingUser = await _userService.getUser(email, "email");
        if (existingUser.data) {
            return {error: "User already exists"};
        }
        // Create the user
        const user = await _userService.createUser({
            email: email.toLowerCase(),
            password: hashedPassword,
            name: name,
            emailVerified: null
        });
        if (!user || !user.data || user.error) {
            return {error: user.error || "Error when registering, please try again."};
        }
        // Create a verification token
        const verificationToken = await _verificationTokenService.createVerificationToken(email);
        // Send the verification email
        if (verificationToken) {
            await sendVerificationEmail(verificationToken?.email, name, verificationToken?.token);
            return {success: "User created successfully, email verification sent!"};
        } else {
            return {error: "Error when registering, please try again."};
        }
    } catch (error) {
        return {error: `An error occurred during registration: ${error}`};
    }
}

export async function logout() {
    Cookies.remove('token');
}