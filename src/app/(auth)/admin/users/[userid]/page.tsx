// src/app/(auth)/admin/users/route.ts

import React from "react";
import {auth} from "enigma/auth";
import UserDetails from "enigma/components/admin/user/userDetails/userDetails";

export default async function UserDetailsPage() {
    const session = await auth();

    return (
        <UserDetails session={session} />
    );
}