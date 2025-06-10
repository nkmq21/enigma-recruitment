// src/app/(auth)/admin/users/page.tsx

import {auth} from "enigma/auth";
import UserManagement from "enigma/components/admin/user/userManager";

export default async function UsersPage() {
    const session = await auth();
    return (
        <UserManagement session={session} />
    );
}