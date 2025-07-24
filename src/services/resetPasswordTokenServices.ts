import {prisma} from "../../prisma/prisma";
import {v4 as uuidv4} from "uuid";

export const getResetPasswordTokenByEmail = async (email: string) => {
    try {
        return await prisma.resetPasswordToken.findFirst({
            where: {email: email}
        });
    } catch (error) {
        return null;
    }
}

export const getResetPasswordTokenByToken = async (token: string) => {
    try {
        return await prisma.resetPasswordToken.findUnique({
            where: {token: token}
        });
    } catch (error) {
        return null;
    }
}

export const createResetPasswordToken = async (email: string) => {
    try {
        // Check if the token already exists
        // If it does, delete it and create a new one
        const existingToken = await getResetPasswordTokenByEmail(email);
        if (existingToken || existingToken !== null) {
            await prisma.resetPasswordToken.delete({
                where: {identifier: existingToken.identifier}
            });
        }
        // Create a new token
        const resetPasswordToken =  await prisma.resetPasswordToken.create({
            data: {
                email: email,
                token: uuidv4(),
                expires: new Date(new Date().getTime() + 3600 * 1000),
            }
        });
        // Send the email
        return {success: "Reset password email sent! Please check your inbox and your spam folder.", email: resetPasswordToken.email, token: resetPasswordToken.token};
    } catch (error) {
        return null;
    }
}
