import React from 'react';
import { ResetPasswordPage } from "enigma/pages/login/reset-password/ResetPasswordPage";

export default function Page() {
    return <ResetPasswordPage />;
}

export async function generateMetadata() {
    return {
        title: 'Reset Password | Enigma Recruitment',
    };
}