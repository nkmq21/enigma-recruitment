import React from 'react';
import { auth } from "enigma/auth";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import JobsPage from "enigma/components/pages/jobs/JobsPage";

export default async function Page() {
    const session = await auth();
    return (
        <JobsPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Open Jobs | Enigma Recruitment',
    };
}