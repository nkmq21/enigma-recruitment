import React from 'react';
import LoginPage from "enigma/components/login/loginPage";

export default function Page() {
    return (
        <LoginPage/>
    );
}

export async function generateMetadata() {
    return {
        title: 'Login | Enigma Recruitment',
    };
}