// src/app/(auth)/admin/media/page.tsx
import {auth} from "enigma/auth";
import AdminMediaPage from "enigma/components/pages/admin/media/AdminMediaPage";

export default async function Page() {
    const session = await auth();
    return (
        <AdminMediaPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Admin Dashboard | Enigma Recruitment',
    };
}