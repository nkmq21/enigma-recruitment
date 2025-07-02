import React, {Suspense} from 'react';
import NewVerificationPage from 'enigma/components/newVerification/newVerificationPage';

const NewVerification = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NewVerificationPage/>
        </Suspense>
    );
};

export default NewVerification;

export async function generateMetadata() {
    return {
        title: 'Email Verification | Enigma Recruitment',
    };
}