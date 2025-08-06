// src/app/(auth)/admin/users/page.tsx
import {auth} from "enigma/auth";
import AdminJobsPage from "enigma/pages/admin/users/AdminUsersPage";
import {getPaginatedUsers} from "enigma/services/userServices";

type Params = Promise<{ page?: string }>;

export default async function Page({searchParams}: {searchParams: Params}) {
    const session = await auth();
    const {page} = await searchParams;
    const actualPage = Number(page ?? '1');
    const pageSize = 10;
    const {users, total} = await getPaginatedUsers(actualPage, pageSize);
    return (
        <AdminJobsPage session={session} users={users} totalUsers={total} currentPage={actualPage} pageSize={pageSize}/>
    );
}

export async function generateMetadata() {
    return {
        title: 'User Management | Enigma Recruitment',
    };
}