// src/app/forbidden/page.tsx
import React from 'react';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import Link from "next/link";

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function ForbiddenPage() {
    let username = '';
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        if (token) {
            const decoded: any = jwt.verify(token, JWT_SECRET);
            username = decoded.username;
        }
    } catch {
        username = '';
    }

    return (
        <div>
            <h1>ACCESS DENIED!</h1>
            <p>You do not have access to the page.</p>
            <p>Logged in as: {username || 'Unknown'}</p>
            <br/>
            <Link href="/">Back to home page</Link>
        </div>
    );
}