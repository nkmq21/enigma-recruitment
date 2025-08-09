import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import {NextAuthConfig} from "next-auth";
import {getUser} from "enigma/services/userService";
import bcrypt from "bcryptjs";
import {LoginSchema} from "enigma/schemas";

export default {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true
        }),
        Credentials({
            async authorize(credentials) {
                // Validate the data by safely parsing the LoginSchema (only returns true/false)
                const validatedData = LoginSchema.safeParse(credentials);
                if (!validatedData.success) {
                    return null;
                }
                // Destructure the validated data
                const {email, password} = validatedData.data;
                // Check if the user exists
                const user = await getUser(email, "email");
                if (!user || !user.data || user.error || !user.data.password) {
                    return null;
                }
                // Check if the password is correct
                const passwordMatch = await bcrypt.compare(password, user.data.password);
                if (passwordMatch) {
                    return {...user.data, id: String(user.data.id)} as any;
                }
                return null;
            }
        })
    ],
    useSecureCookies: process.env.NODE_ENV === 'production',
    secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig;