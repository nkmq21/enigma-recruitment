// src/app/(auth)/admin/users/[userid]
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

    if (userResult.error || !userResult.data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">User Not Found</h1>
                    <p className="mt-4 text-gray-600">{userResult.error ?? "User not found"}</p>
                </div>
            </div>
        );
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