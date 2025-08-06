import React from 'react';
import LoginPage from "enigma/pages/login/LoginPage";

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