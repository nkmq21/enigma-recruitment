'use client';
import { logout } from 'enigma/services/userServices';
import {signOut} from "enigma/auth";

export default async function LogoutButton() {
    const handleLogout = async () => {
        await signOut({redirect: false});
        logout();
    };
    return <button onClick={handleLogout}>Logout</button>;
}