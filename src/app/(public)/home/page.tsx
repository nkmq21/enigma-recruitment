'use server';
import React from 'react';
import HomePage from 'enigma/components/pages/home/HomePage';
import { auth } from "enigma/auth";

export default async function Home() {
    const session = await auth();

    return (
        <HomePage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Home | Enigma Recruitment',
    };
}