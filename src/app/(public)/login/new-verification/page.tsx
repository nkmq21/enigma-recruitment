import React, {Suspense} from 'react';
import VerificationForm from 'enigma/components/verification/verificationForm';

const VerificationPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerificationForm/>
        </Suspense>
    );
};

export default VerificationPage;