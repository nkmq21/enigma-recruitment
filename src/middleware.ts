// src/middleware.ts - Protect routes from unauthorized access
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import authConfig from "./auth.config";
import {getUsers} from "enigma/services/userServices";

const privateRoutes = ["/admin"];
const loggedInRoutes = ["/home", "/profile"];
const credentialRoutes = ["/login"];
const publicRoutes = ["/", "/about", "/contact-us", "/login/new-verification", "/register"];

export async function middleware(req: NextRequest) {
    // TODO: Change ${url} to enigma-recruitment.com when in production
    const url = "http://localhost:3000";
    const { pathname } = req.nextUrl;

    // Get the token (includes custom fields like role)
    const token = await getToken({ req, secret: authConfig.secret });

    const isLoggedIn = !!token;
    const isPrivateRoute = privateRoutes.includes(pathname);
    const isLoggedInRoute = loggedInRoutes.includes(pathname);
    const isCredentialRoute = credentialRoutes.includes(pathname);
    const isAPIRoute = pathname.includes("/api");
    const isPublicRoute = publicRoutes.includes(pathname);

    if (isAPIRoute || isPublicRoute) return;
    if (isLoggedIn && isCredentialRoute) {
        return NextResponse.redirect(`${url}/home`);
    }
    if (!isLoggedIn && isCredentialRoute) {
        return;
    }
    if (!isLoggedIn && isLoggedInRoute) {
        return NextResponse.redirect(`${url}/login`);
    }
    // Protect admin routes
    if (isPrivateRoute && token?.role !== "admin") {
        return NextResponse.redirect(`${url}/forbidden`);
    }
    // Allow admin through
    if (isPrivateRoute && token?.role === "admin") {
        return;
    }
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};