// src/services/googleLoginServices.ts
"use server";

/*import {signIn} from "@/auth";*/
import {AuthError} from "next-auth";
import { signIn } from "enigma/auth";


async function GoogleAuthenticate() {
    try {
        await signIn('google', { redirectTo: '/login/create-password'});
        return undefined;
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Google logged in failed'
        }
        throw error;
    }
}

export default GoogleAuthenticate