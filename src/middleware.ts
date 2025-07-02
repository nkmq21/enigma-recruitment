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
// // src/middleware.ts
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
//
// export const config = {
//     matcher: [
//         "/",
//         "/login",
//         "/login/reset-password",
//         "/home",
//         "/profile",
//         "/admin/:path*",
//     ],
// };
//
// export async function middleware(req) {
//     const { pathname } = req.nextUrl;
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
//     const isLoggedIn = Boolean(token);
//
//     if (
//         pathname.startsWith("/api") ||
//         ["/", "/about", "/contact-us", "/register", "/login/new-newVerification"].includes(pathname)
//     ) {
//         return NextResponse.next();
//     }
//     if (isLoggedIn && ["/login", "/login/reset-password"].includes(pathname)) {
//         return NextResponse.redirect(new URL("/home", req.url));
//     }
//     if (!isLoggedIn && ["/home", "/profile"].includes(pathname)) {
//         return NextResponse.redirect(new URL("/login", req.url));
//     }
//     if (pathname.startsWith("/admin")) {
//         if (!isLoggedIn) {
//             return NextResponse.redirect(new URL("/login", req.url));
//         }
//         if (token?.role !== "admin") {
//             return NextResponse.redirect(new URL("/forbidden", req.url));
//         }
//     }
//     return NextResponse.next();
// }