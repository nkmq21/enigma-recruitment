// src/app/(auth)/admin/users/[userid]/page.tsx
import React from "react";
import {auth} from "enigma/auth";
import AdminUserDetailsPage from "enigma/pages/admin/users/user-details/AdminUserDetailsPage";
import { getUser } from "enigma/services/userService";
import {getJobApplicationsByUserId, JobApplicationWithFlatJob} from "enigma/services/jobApplicationService";

type Params = Promise<{ userid: string }>;

export default async function UserDetailsPage({params}: {params: Params}) {
    const session = await auth();
    const {userid} = await params;

    const [userResult, applications] = await Promise.all([
        getUser(userid, "id"),
        getJobApplicationsByUserId(userid),
    ]);

    if (!userResult.data) {
        return <div>User not found</div>;
    }

    return (
        <AdminUserDetailsPage session={session} user={userResult.data} applications={applications as JobApplicationWithFlatJob[]}/>
    );
}

export async function generateMetadata() {
    return {
        title: `User Management | Enigma Recruitment`,
    };
}