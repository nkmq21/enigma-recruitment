import React from 'react';
import {auth} from "enigma/auth";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import JobDetailsPage from "enigma/components/pages/job-details/JobDetailsPage";
import {getJobById} from "enigma/services/jobService";

type Params = Promise<{ jobId: string }>;

export default async function Page({params}: { params: Params }) {
    const session = await auth();
    const {jobId} = await params;

    const job = await getJobById(jobId);

    if (!job || !job.data) {
        return <div>Job not found</div>;
    }

    return (
        <JobDetailsPage session={session} job={job.data}/>
    );
}

export async function generateMetadata({params}: { params: Params }) {
    const {jobId} = await params;

    if (!jobId) {
        return {
            title: 'Job Details | Enigma Recruitment',
        };
    }

    const job = await getJobById(jobId);

    return {
        title: job?.data ? `${job.data.job_title} | Enigma Recruitment` : 'Job Details | Enigma Recruitment',
    };
}