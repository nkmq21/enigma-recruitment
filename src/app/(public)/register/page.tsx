// src/app/(public)/register/page.tsx
import React from 'react';
import RegisterPage from "enigma/components/pages/register/RegisterPage";

export default function Page() {
    return (
        <RegisterPage/>
    );
}

export async function generateMetadata() {
    return {
        title: 'Sign Up | Enigma Recruitment',
    };
}