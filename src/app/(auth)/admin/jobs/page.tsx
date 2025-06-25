// src/app/(auth)/admin/jobs/page.tsx

import {auth} from "enigma/auth";
import Job from "enigma/components/admin/job/job";

export default async function JobsPage() {
    const session = await auth();
    return (
        <Job session={session}/>
    );
}