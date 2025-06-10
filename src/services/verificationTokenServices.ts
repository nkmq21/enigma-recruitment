import {prisma} from "../../prisma/prisma";
import {v4 as uuidv4} from "uuid";

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        return await prisma.verificationToken.findFirst({
            where: {email: email}
        });
    } catch (error) {
        console.error("verificationTokenServices.getVerificationTokenByEmail: Error fetching verification token: ", error);
        return null;
    }
}

export const getVerificationTokenByToken = async (token: string) => {
    try {
        return await prisma.verificationToken.findUnique({
            where: {token: token}
        });
    } catch (error) {
        console.error("verificationTokenServices.getVerificationTokenByToken: Error fetching verification token: ", error);
    }
}

export const createVerificationToken = async (email: string) => {
    try {
        // Check if the token already exists
        // If it does, delete it and create a new one
        const existingToken = await getVerificationTokenByEmail(email);
        if (existingToken || existingToken !== null) {
            await prisma.verificationToken.delete({
                where: {identifier: existingToken.identifier}
            });
        }
        // Create a new token
        const verificationToken =  await prisma.verificationToken.create({
            data: {
                email: email,
                token: uuidv4(),
                expires: new Date(new Date().getTime() + 3600 * 1000),
            }
        });
        // Send the email
        return {success: "Confirmation email sent! Please check your inbox and your spam folder.", email: verificationToken.email, token: verificationToken.token};
    } catch (error) {
        console.error("verificationTokenServices.createVerificationToken: Error creating verification token: ", error);
        return null;
    }
}
