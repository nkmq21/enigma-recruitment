'use client';
import {signOut} from "enigma/auth";
import {logout} from "enigma/services/authService";

export default async function LogoutButton() {
    const handleLogout = async () => {
        await signOut({redirect: false});
        logout();
    };
    return <button onClick={handleLogout}>Logout</button>;
}