// src/app/(auth)/admin/jobs/[jobid]/route.ts
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';

import { getJob } from 'enigma/services/jobServices';
import { getJobApplications } from 'enigma/services/jobApplicationServices';
import { Job, JobApplication } from 'enigma/types/models';
import styles from '../../users/Users.module.css';

export default function JobDetailsPage() {
    const { jobid } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [applications, setApplications] = useState<JobApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const jobData = await getJob(jobid as string);
                setJob(jobData);

                const allApplications = await getJobApplications();
                // Filter applications for this job
                const filtered = allApplications.filter(app => app.job.job_id === jobid);
                setApplications(filtered);
            } catch (err) {
                setError('Error loading job or applications');
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        if (jobid) fetchData();
    }, [jobid]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!job) return <div>Job not found</div>;

    return (
        <div className={styles.container}>
            <h1>Job Details</h1>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <tbody>
                    <tr><td>Job ID</td><td>{job.job_id}</td></tr>
                    <tr><td>Title</td><td>{job.job_title}</td></tr>
                    <tr><td>Description</td><td>{job.description}</td></tr>
                    <tr><td>Location</td><td>{job.location}</td></tr>
                    <tr><td>Employment Type</td><td>{job.employment_type}</td></tr>
                    <tr><td>Status</td><td>{job.status}</td></tr>
                    <tr><td>Salary Range</td><td>{job.salary_range_start} - {job.salary_range_end}</td></tr>
                    <tr><td>Close Date</td><td>{format(new Date(job.close_date), 'MM/dd/yyyy')}</td></tr>
                    </tbody>
                </table>
            </div>

            <h2>Job Applications</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Application ID</th>
                    <th>User ID</th>
                    <th>Applied Time</th>
                    <th>Status</th>
                    <th>View CV</th>
                    <th>View User</th>
                </tr>
                </thead>
                <tbody>
                {applications.map(app => (
                    <tr key={app.application_id}>
                        <td>{app.application_id}</td>
                        <td>
                            <Link href={`/admin/users/${app.user_id}`}>{app.user_id}</Link>
                        </td>
                        <td>{format(new Date(app.applied_time), 'MM/dd/yyyy')}</td>
                        <td>{app.status}</td>
                        <td>
                            <Link href={`/cv/${app.cv_id}`}>View CV</Link>
                        </td>
                        <td>
                            <Link href={`/admin/users/${app.user_id}`}>View User</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}