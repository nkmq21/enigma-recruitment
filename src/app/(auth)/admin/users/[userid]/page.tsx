// src/app/(auth)/admin/users/[userid]

import React from "react";
import {auth} from "enigma/auth";
import UserDetails from "enigma/components/admin/user/userDetails/userDetails";
import { getUser } from "enigma/services/userServices";
import {getJobApplicationsByUserId, JobApplicationWithFlatJob} from "enigma/services/jobApplicationServices";
import {User, JobApplication} from "enigma/types/models";

export default async function UserDetailsPage({params}: {params: {userid: string}}) {
    const session = await auth();
    const id = params.userid;
    const [user, applications] = await Promise.all([
        getUser(id),
        getJobApplicationsByUserId(id),
    ]);
    return (
        <UserDetails session={session} user={user as User} applications={applications as JobApplicationWithFlatJob[]}/>
    );
}