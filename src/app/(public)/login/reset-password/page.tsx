import React from 'react';
import { ForgotPass } from "enigma/pages/login/reset-password/forgotPass";

export default function ResetPasswordPage() {
    return <ForgotPass />;
}

export async function generateMetadata() {
    return {
        title: 'Reset Password | Enigma Recruitment',
    };
}