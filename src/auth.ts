import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "../prisma/prisma";
import authConfig from "./auth.config";
import {getAccount, getUser} from "enigma/services/userServices";

export const {handlers: {GET, POST}, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {strategy: "jwt"},
    ...authConfig,
    // events: {
    //     async linkAccount({user}) {
    //         // This is called when a user links an account to their profile
    //         // You can use this to update the user in the database
    //         await prisma.user.update({
    //             where: {id: parseInt(<string>user.id)},
    //             data: {
    //                 emailVerified: new Date(),
    //                 image: user.image,
    //                 name: user.name
    //             }
    //         });
    //         console.log("auth.js - Link Account: " + user.id);
    //     }
    // },
    callbacks: {
        async jwt({token}) {
            if (!token.sub) return token;
            // Check if the user exists in the database, token sub is ID of the user
            const existingUser = await getUser(token.sub);
            if (!existingUser) return token;
            // Check if the user has an account in the database if they use 3rd party services
            const existingAccount = await getAccount(String(existingUser.id));
            // If the user has an account, set the token to be an oauth token
            token.isOauth = !!existingAccount;
            // Set the token name to be the user's name in case
            // they log in with 3rd party services with a different name.
            // You can also append the token with other user data
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.image = existingUser.image;
            token.role = existingUser.role || 'seeker';
            console.log("auth.js - JWT Token: " + token.sub + " " + token.isOauth + " " + token.name + " " + token.email + " " + token.role);
            return token;
        },
        async session({token, session}) {
            // Append the token to the session object
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                    isOauth: token.isOauth,
                    role: token.role as string | undefined,
                    name: token.name,
                    email: token.email,
                    image: token.image as string | undefined
                }
            };
        },
        async signIn({user, account}) {
            // Callback function to allow or deny sign in, returns true to allow signing in, false to deny
            // Check if the user signs in with a 3rd party service,
            // if so, allow the user to sign in without checking
            if (account?.provider !== 'credentials') {
                return true;
            }
            // Check if the user exists in the database
            const existingUser = await getUser(String(user.id));
            // Check if the user email is verified
            if (!existingUser?.emailVerified) {
                console.error("auth.signIn: User email not verified");
                return false;
            }
            // TODO: 2FA check
            return true;
        }
    }
})