// src/app/(auth)/admin/users/route.ts
// 'use client';
//
// import {useEffect, useState} from 'react';
// import Link from 'next/link';
// import {format} from 'date-fns';
// import {useParams} from 'next/navigation';
//
// import {getUser} from 'enigma/services/userServices';
// import {getJobApplications} from 'enigma/services/jobApplicationServices';
//
// import {User, JobApplication} from 'enigma/types/models';
// import styles from '../Users.module.css';
//
// export default function UserPage() {
//     const [user, setUser] = useState<User>();
//     const [jobApplication, setJobApplication] = useState<JobApplication[]>();
//
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const params = useParams();
//     const userid = parseInt(params.userid as string, 10);
//
//     useEffect(() => {
//         async function fetchUser() {
//             try {
//                 const data = await getUser(String(userid));
//                 setUser(data);
//             } catch (err) {
//                 setError('Error fetching users');
//             } finally {
//                 setLoading(false);
//             }
//         }
//         async function fetchJobApplications() {
//             try {
//                 const data = await getJobApplications();
//                 setJobApplication(data);
//             } catch (err) {
//                 setError('Error fetching job applications');
//             } finally {
//                 setLoading(false);
//             }
//         }
//
//         fetchUser();
//         fetchJobApplications();
//     }, [userid]);
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//
//     return (
//         <div className={styles.container}>
//             <h1>{user?.name + "\'s Information" || "Unknown user"}</h1>
//             <div className={styles.tableContainer}>
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>User Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Status</th>
//                             <th>Date of Birth</th>
//                             <th>Address</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>
//                                 {user?.img_url ? (
//                                     <img
//                                         src={user?.img_url}
//                                         alt={user?.user_name}
//                                         className={styles.userImage}
//                                     />
//                                 ) : (
//                                     <div className={styles.userImage}/>
//                                 )}
//                             </td>
//                             <td>{user?.user_name}</td>
//                             <td>{user?.email}</td>
//                             <td>{user?.role}</td>
//                             <td>{user?.status}</td>
//                             <td>
//                                 {user?.dob ? format(new Date(user?.dob), 'MM/dd/yyyy') : '-'}
//                             </td>
//                             <td>{user?.address || '-'}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             {/* Job applications */}
//             <h1>{user?.user_name + "\'s Job Applications" || "Unknown user"}</h1>
//             <div className={styles.tableContainer}>
//                 <table className={styles.table}>
//                     <thead>
//                     <tr>
//                         <th>Application ID</th>
//                         <th>Job ID</th>
//                         <th>Job Title</th>
//                         <th>Industry</th>
//                         <th>Job Function</th>
//                         <th>Job Subfunction</th>
//                         <th>Applied Time</th>
//                         <th>Status</th>
//                         <th>View CV</th>
//                         <th>Actions</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {jobApplication?.map((jobapplication) => (
//                         <tr key={jobapplication.application_id}>
//                             <td>{jobapplication.application_id}</td>
//                             <td>
//                                 <Link href={`/admin/jobs/${jobapplication.job.job_id}`}>
//                                     {jobapplication.job.job_id}
//                                 </Link>
//                             </td>
//                             <td>
//                                 <Link href={`/admin/jobs/${jobapplication.job.job_id}`}>
//                                     {jobapplication.job.job_title}
//                                 </Link>
//                             </td>
//                             <td>
//                                 <Link href={`/admin/jobs?industry=${jobapplication.job.industry.industry_id}`}>
//                                     {jobapplication.job.industry.industry_name}
//                                 </Link>
//                             </td>
//                             <td>
//                                 <Link href={`/admin/jobs?job_function=${jobapplication.job.job_function.job_function_id}`}>
//                                     {jobapplication.job.job_function.job_function_name}
//                                 </Link>
//                             </td>
//                             <td>
//                                 <Link href={`/admin/jobs?job_subfunction=${jobapplication.job.subfunction.job_subfunction_id}`}>
//                                     {jobapplication.job.subfunction.job_subfunction_name}
//                                 </Link>
//                             </td>
//                             <td>
//                                 {format(new Date(jobapplication.applied_time), 'MM/dd/yyyy')}
//                             </td>
//                             <td>{jobapplication.status}</td>
//                             <td>
//                                 <Link href={`/cv/${jobapplication.cv_id}`}>
//                                     View CV
//                                 </Link>
//                             </td>
//                             <td>
//                                 <Link href={`/admin/jobapplications/${jobapplication.application_id}`}
//                                       onClick={async () => {
//                                         // Deleting logic
//                                       }}>
//                                     Revoke Application
//                                 </Link>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
import React from "react";
import {auth} from "enigma/auth";
import UserDetails from "enigma/components/admin/user/userDetails/userDetails";

export default async function UserDetailsPage() {
    const session = await auth();
    return (
        <UserDetails session={session} />
    );
}