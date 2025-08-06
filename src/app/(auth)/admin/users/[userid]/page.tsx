// src/app/(auth)/admin/users/[userid]

import React from "react";
import {auth} from "enigma/auth";
import AdminUserDetailsPage from "enigma/pages/admin/users/user-details/AdminUserDetailsPage";
import { getUser } from "enigma/services/userServices";
import {getJobApplicationsByUserId, JobApplicationWithFlatJob} from "enigma/services/jobApplicationServices";
import {User} from "enigma/types/models";

type Params = Promise<{ userid: string }>;

export default async function UserDetailsPage({params}: {params: Params}) {
    const session = await auth();
    const {userid} = await params;
    const [user, applications] = await Promise.all([
        getUser(userid),
        getJobApplicationsByUserId(userid),
    ]);
    return (
        <AdminUserDetailsPage session={session} user={user as User} applications={applications as JobApplicationWithFlatJob[]}/>
    );
}

export async function generateMetadata() {
    return {
        title: `User Management | Enigma Recruitment`,
    };
}