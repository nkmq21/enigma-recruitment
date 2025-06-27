import React from 'react';
import LandingPage from "enigma/components/landing/landingPage";
import { auth } from "enigma/auth";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

export default async function Page() {
    const session = await auth();
    return (
        <LandingPage session={session} />
    );
}