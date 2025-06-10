import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import {CredentialsSignin, NextAuthConfig} from "next-auth";
import {prisma} from "../prisma/prisma";
import bcrypt from "bcryptjs";
import {User} from "./types/models";
import {LoginSchema} from "enigma/schemas";

export default {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                // Validate the data by safely parsing the LoginSchema (only returns true/false)
                const validatedData = LoginSchema.safeParse(credentials);
                if (!validatedData.success) {
                    console.error("Invalid data");
                    return null;
                }
                // Destructure the validated data
                const {email, password} = validatedData.data;
                // Check if the user exists
                const user = await prisma.user.findFirst({
                    where: {email: email}
                });
                if (!user || !user.password || !user.email) {
                    console.error("User not found");
                    return null;
                }
                // Check if the password is correct
                const passwordMatch = await bcrypt.compare(password, user.password);
                if (passwordMatch) {
                    return {...user, id: String(user.id)} as any;
                }
                return null;
            }
        })
    ],
    secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig;