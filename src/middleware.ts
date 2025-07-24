// src/middleware.ts - Protect routes from unauthorized access
import { auth } from "./auth";
import { NextResponse } from "next/server";

// Wrap your custom logic in the `auth` middleware:
export default auth((req) => {
    const url = req.nextUrl.clone();
    const { pathname } = req.nextUrl;
    const user = req.auth?.user; // populated by your session callback

    // 1) Allow public and API routes through
    if (
        pathname.startsWith("/api") ||
        ["/", "/about", "/contact-us", "/register", "/login/new-newVerification"].includes(pathname)
    ) {
        return;
    }

    // 2) Redirect signed-in users away from the credential pages
    if (user && ["/login", "/login/reset-password"].includes(pathname)) {
        url.pathname = "/home";
        return NextResponse.redirect(url);
    }

    // 3) Redirect guests away from protected pages
    if (!user && ["/home", "/profile"].includes(pathname)) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // 4) Admin-only pages
    if (pathname.startsWith("/admin")) {
        if (!user) {
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }
        if (user.role !== "admin") {
            url.pathname = "/forbidden";
            return NextResponse.redirect(url);
        }
    }

    // Otherwise, let them through
});


export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};