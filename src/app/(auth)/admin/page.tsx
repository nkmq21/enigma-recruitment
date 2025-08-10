// src/app/(auth)/admin/page.tsx
import {auth} from "enigma/auth";
import AdminStatisticsPage from "enigma/components/pages/admin/statistics/AdminStatisticsPage";

export default async function Page() {
    const session = await auth();
    return (
        <AdminStatisticsPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Admin Dashboard | Enigma Recruitment',
    };
}