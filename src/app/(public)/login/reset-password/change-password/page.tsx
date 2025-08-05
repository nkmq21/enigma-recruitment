import React from 'react';
import { ChangePasswordPage } from 'enigma/pages/login/reset-password/change-password/ChangePasswordPage';

export default function Page() {
    return <ChangePasswordPage />;
}

export async function generateMetadata() {
    return {
        title: 'Change your password | Enigma Recruitment',
    };
}