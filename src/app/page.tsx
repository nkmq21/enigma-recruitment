import React from 'react';
import LandingPage from "enigma/components/landing/landingPage";
import { auth } from "enigma/auth";

export default async function Page() {
    const session = await auth();
    return <LandingPage session={session} />;
}