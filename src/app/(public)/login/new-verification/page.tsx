import React, {Suspense} from 'react';
import NewVerificationPage from 'enigma/components/pages/login/new-verification/NewVerificationPage';

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewVerificationPage/>
        </Suspense>
    );
};

export default Page;

export async function generateMetadata() {
    return {
        title: 'Email Verification | Enigma Recruitment',
    };
}