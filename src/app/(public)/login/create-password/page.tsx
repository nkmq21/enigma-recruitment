'use client';

import React, { useState } from 'react';
import { createPass } from 'enigma/services/userServices';
import styles from './ResetPasswordPage.module.css';
import Link from 'next/link';
import {auth} from "enigma/auth";
import {useRouter} from "next/navigation"

export default async function CreatePasswordPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const session = await auth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            await createPass(email, password);
            setSuccess('Password created successfully. You can now log in with your new password.');
            setEmail('');
            setPassword('');
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Failed to create password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create Password</h1>
            <h2>Current user: {username}</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>New Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.success}>{success}</div>}
                <button className={styles.button} type="submit" disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
            <div style={{ marginTop: 20, textAlign: 'center' }}>
                <Link href="/login">Back to Login</Link>
                {' | '}
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}