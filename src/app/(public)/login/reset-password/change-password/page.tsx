import React from 'react';
import { ConfirmPasss } from 'enigma/pages/login/reset-password/confirmPass';

export default function ChangePasswordPage() {
    return <ConfirmPasss />;
}

export async function generateMetadata() {
    return {
        title: 'Change your password | Enigma Recruitment',
    };
}