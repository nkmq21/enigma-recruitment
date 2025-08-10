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

    const job = await getJobById(jobId);

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <JobDetailsPage session={session} job={job.data}/>
    );
}

export async function generateMetadata() {
    return {
        title: 'Job Details | Enigma Recruitment',
    };
}