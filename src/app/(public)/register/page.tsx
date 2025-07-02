// src/app/(public)/register/page.tsx
import React from 'react';
import SignUpPage from "enigma/components/signUp/signUpPage";

export default function RegisterPage() {
    return (
        <SignUpPage/>
    );
}

export async function generateMetadata() {
    return {
        title: 'Sign Up | Enigma Recruitment',
    };
}