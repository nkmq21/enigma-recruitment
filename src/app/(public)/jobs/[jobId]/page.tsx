// TODO: Load job details based on jobId from searchParams
import React from 'react';
import { auth } from "enigma/auth";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import JobDetailsPage from "enigma/components/pages/job-details/JobDetailsPage";

export default async function Page({ searchParams }: { searchParams: Promise<{ jobId?: string }> }) {
    const session = await auth();
    const {jobId} = await searchParams;
    return (
        <JobDetailsPage session={session} />
    );
}

export async function generateMetadata() {
    return {
        title: 'Job Details | Enigma Recruitment',
    };
}