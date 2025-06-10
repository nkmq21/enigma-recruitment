"use client";
import Link from 'next/link';
import React, {useCallback, useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {newVerification} from "enigma/services/userServices";

const VerificationForm = () => {
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const onSubmit = useCallback(() => {
        if (!token) {
            console.error("verificationForm.tsx - No token provided");
            setError("Missing token");
            return;
        }
        console.log("verificationForm.tsx - Verifying token: " + token);
        newVerification(token).then((data) => {
            if (data.success) {
                setSuccess(data.success);
            } else if (data.error) {
                setError(data.error);
            }
        }).catch((error) => {
            console.error("verificationForm.tsx - Error verifying token: ", error);
            setError("Error verifying token: " + error);
        });
    }, [token]);
    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
    return (
        <div>
            <h1>Verification</h1>
            {error ?
                <h2>{error}</h2> :
                <h2>{success} Click <Link href="/login">here</Link> to log in.</h2>
            }
        </div>
    );
};

export default VerificationForm;