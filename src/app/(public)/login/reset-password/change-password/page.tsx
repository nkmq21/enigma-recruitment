import React, {Suspense} from 'react';
import ChangePasswordPage from 'enigma/components/pages/login/reset-password/change-password/ChangePasswordPage';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ChangePasswordPage />;
        </Suspense>
    );
}

export async function generateMetadata() {
    return {
        title: 'Change your password | Enigma Recruitment',
    };
}