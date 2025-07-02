'use server';
import React from 'react';
import HomePage from 'enigma/components/home/homePage';
import { auth } from "enigma/auth";

export default async function Home() {
    const session = await auth();
    console.log("Home page - Session: " + session);
    return (
        <HomePage session={session} />

    );
}

export async function generateMetadata() {
    return {
        title: 'Home | Enigma Recruitment',
    };
}