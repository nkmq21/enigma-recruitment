// src/middleware.ts - Protect routes from unauthorized access
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import authConfig from "./auth.config";

const privateRoutes = ["/admin"];
const loggedInRoutes = ["/home", "/profile"];
const credentialRoutes = ["/login", "/login/reset-password"];
const publicRoutes = ["/", "/about", "/contact-us", "/register", "/login/new-verification"];

export async function middleware(req: NextRequest) {
    const { pathname, origin } = req.nextUrl;
    const baseUrl = process.env.NEXTAUTH_URL || process.env.FRONTEND_URL || origin;

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
        return NextResponse.redirect(`${baseUrl}/home`);
    }
    if (!isLoggedIn && isCredentialRoute) {
        return;
    }
    if (!isLoggedIn && isLoggedInRoute) {
        return NextResponse.redirect(`${baseUrl}/login`);
    }
    // Protect admin routes
    if (isPrivateRoute && token?.role !== "admin") {
        return NextResponse.redirect(`${baseUrl}/forbidden`);
    }
    // Allow admin through
    if (isPrivateRoute && token?.role === "admin") {
        return;
    }
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};