// src/app/(auth)/admin/users/page.tsx

import {auth} from "enigma/auth";
import UserManagement from "enigma/components/admin/user/userManager";
import {getPaginatedUsers} from "enigma/services/userServices";

export default async function UsersPage({searchParams}: {searchParams: {page?: string}}) {
    const session = await auth();
    const page = Number(searchParams.page ?? '1');
    const pageSize = 10;
    const {users, total} = await getPaginatedUsers(page, pageSize);
    return (
        <UserManagement session={session} users={users} totalUsers={total} currentPage={page} pageSize={pageSize}/>
    );
}