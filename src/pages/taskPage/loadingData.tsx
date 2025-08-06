// import * as React from "react";
// import {
//     Typography,
//     Box,
//     CircularProgress
// } from "@mui/material";
// import { JobListPage } from "../../components/ui/JobCard";
// import { Job } from "enigma/types/models";
// import { useSearchParams } from "next/navigation";
//
// export default function LoadingData() {
//     const [jobs, setJobs] = React.useState<Job[]>([]);
//     const [loading, setLoading] = React.useState(true);
//     const searchParams = useSearchParams()!;
//
//     React.useEffect(() => {
//         const fetchJobs = async () => {
//             setLoading(true)
//             try {
//                 const queryParams = new URLSearchParams();
//                 queryParams.set('status', 'active,prioritized');
//                 const query = searchParams.get('query');
//                 if (query) {
//                     queryParams.set('query', query);
//                 }
//
//                 const locations = searchParams.get('locations');
//                 if (locations) {
//                     queryParams.set('locations', locations);
//                 }
//
//                 const jobFunctions = searchParams.get('jobFunctions');
//                 if (jobFunctions) {
//                     queryParams.set('jobFunctions', jobFunctions);
//                 }
//
//                 const jobSubfunctions = searchParams.get('jobSubfunctions');
//                 if (jobSubfunctions) {
//                     queryParams.set('jobSubfunctions', jobSubfunctions);
//                 }
//
//                 const industries = searchParams.get('industries');
//                 if (industries) {
//                     queryParams.set('industries', industries);
//                 }
//
//                 const employmentType = searchParams.get('employment_type');
//                 if (employmentType) {
//                     queryParams.set('employment_type', employmentType);
//                 }
//
//                 const postDateRange = searchParams.get('postDateRange');
//                 if (postDateRange) {
//                     queryParams.set('postDateRange', postDateRange);
//                 }
//
//                 //TODO: other filter criteria will continue from here
//
//                 const page = searchParams.get('page') || '1';
//                 queryParams.set('page', page);
//
//                 console.log('query params', queryParams.toString());
//
//                 const response = await fetch(`/api/jobs?${queryParams.toString()}`);
//                 if (!response.ok) {
//                     throw new Error('failed to fetch jobs');
//                 }
//
//                 const data = await response.json();
//                 if (data.jobs) {
//                     // Make sure each jobs has the required properties
//                     const transformedJobs = data.jobs.map((job: Job) => ({
//                         ...job,
//                         // Ensure the jobs has industry object with industry_name
//                         industry: job.industry || { industry_name: "" },
//                         // Convert any string dates to Date objects if needed
//                         close_date: job.close_date ? new Date(job.close_date) : new Date()
//                     }));
//                     setJobs(transformedJobs);
//                 } else {
//                     console.error('the response have unexpected data', data);
//                     setJobs([]);
//                 }
//             } catch (error) {
//                 console.error("jobs fetch failed: ", error);
//                 setJobs([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchJobs();
//     }, [searchParams]);
//
//     return (
//         <Box sx={{
//             display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4, width: '100%'
//         }}>
//             {/* Left Column */}
//             <Box sx={{
//                 width: '100%',
//                 '@media (max-width: 991px)': {
//                     width: '100%',
//                     pr: 2
//                 },
//             }}>
//                 {loading ? (
//                     <Box
//                         sx={{
//                             textAlign: 'center',
//                             py: 4,
//                             opacity: 0,
//                             animation: 'fadeIn 0.5s ease-in-out forwards', // Fade-in transition for the Box
//                             '@keyframes fadeIn': {
//                                 from: { opacity: 0, transform: 'scale(0.8)' },
//                                 to: { opacity: 1, transform: 'scale(1)' },
//                             },
//                         }}
//                     >
//                         <CircularProgress
//                             sx={{
//                                 color: '#40b0d0', // Match the blue theme from OurServices component
//                                 animation: 'spin 1s linear infinite', // Continuous spinning animation
//                                 '@keyframes spin': {
//                                     '0%': { transform: 'rotate(0deg)' },
//                                     '100%': { transform: 'rotate(360deg)' },
//                                 },
//                             }}
//                             size={40} // Size of the loader
//                         />
//                         <Typography variant="body1" sx={{ mt: 2, color: '#475467' }}>
//                             Loading jobs...
//                         </Typography>
//                     </Box>
//                 ) : jobs.length > 0 ? (
//                     <JobListPage jobs={jobs} />
//                 ) : (
//                     <Box sx={{ textAlign: 'center', py: 4, color: '#475467' }}>
//                         <Typography variant="body1">No jobs found matching your criteria.</Typography>
//                     </Box>
//                 )}
//
//             </Box>
//         </Box>
//
//     );
// }
