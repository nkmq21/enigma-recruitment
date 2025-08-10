// src/app/(auth)/admin/jobs/page.tsx

import {auth} from "enigma/auth";
import AdminJobsPage from "enigma/components/pages/admin/jobs/AdminJobsPage";

export default async function JobsPage() {
    const session = await auth();
    return (
        <AdminJobsPage session={session}/>
    );
}

export async function generateMetadata() {
    return {
        title: `Job Management | Enigma Recruitment`,
    };
}