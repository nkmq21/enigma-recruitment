import * as React from "react";
import {
    Typography,
    Box,
    CircularProgress
} from "@mui/material";
import { JobListPage } from "enigma/components/common/JobCard";
import { Job } from "enigma/types/models";
import { useSearchParams, useRouter } from "next/navigation";
import { PaginatedResponse } from "enigma/types/DTOs";
import Pagination from "enigma/components/ui/JobPagination";

export default function JobsLoader() {
    const [jobs, setJobs] = React.useState<Job[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [meta, setMeta] = React.useState<PaginatedResponse<Job>['meta'] | null>(null);
    const searchParams = useSearchParams()!;
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`/jobs?${params.toString()}`);
    }

    React.useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true)
            try {
                const queryParams = new URLSearchParams();
                queryParams.set('status', 'active,prioritized');

                // Simplify parameter building
                const paramKeys = [
                    'query', 'locations', 'jobFunctions', 'jobSubfunctions',
                    'industries', 'employment_type', 'postDateRange', 'salaryMin', 'salaryMax'
                ];

                paramKeys.forEach(key => {
                    const value = searchParams.get(key);
                    if (value) {
                        queryParams.set(key, value);
                    }
                });

                const page = searchParams.get('page') || '1';
                queryParams.set('page', page);
                queryParams.set('limit', '10');

                console.log('query params', queryParams.toString());

                const response = await fetch(`/api/jobs?${queryParams.toString()}`);
                if (!response.ok) {
                    throw new Error('failed to fetch jobs');
                }

                const data: PaginatedResponse<Job> = await response.json();
                if (data.items && Array.isArray(data.items)) {
                    const transformedJobs = data.items.map((job: Job) => ({
                        ...job,
                        industry: job.industry || { industry_name: "" },
                        job_function: job.job_function || { job_function_name: "" },
                        subfunction: job.subfunction || { job_subfunction_name: "" },
                        close_date: job.close_date ? new Date(job.close_date) : new Date(),
                        created_date: job.created_date ? new Date(job.created_date) : new Date()
                    }));
                    setJobs(transformedJobs);
                    setMeta(data.meta);
                } else {
                    console.error('the response have unexpected data', data);
                    setJobs([]);
                    setMeta(null);
                }
            } catch (error) {
                console.error("jobs fetch failed: ", error);
                setJobs([]);
                setMeta(null);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [searchParams]);

    // Helper function to safely extract meta values
    const getMetaInfo = () => {
        if (!meta) return null;

        return {
            page: meta.page ?? 1,
            limit: meta.limit ?? 10,
            total: meta.total ?? 0,
            totalPages: meta.totalPages ?? 1
        };
    };

    const metaInfo = getMetaInfo();

    return (
        <Box sx={{
            display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4, width: '100%'
        }}>
            {/* Left Column */}
            <Box sx={{
                width: '100%',
                '@media (max-width: 991px)': {
                    width: '100%',
                    pr: 2
                },
            }}>
                {loading ? (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 4,
                            opacity: 0,
                            animation: 'fadeIn 0.5s ease-in-out forwards', // Fade-in transition for the Box
                            '@keyframes fadeIn': {
                                from: { opacity: 0, transform: 'scale(0.8)' },
                                to: { opacity: 1, transform: 'scale(1)' },
                            },
                        }}
                    >
                        <CircularProgress
                            sx={{
                                color: '#40b0d0', // Match the blue theme from OurServices component
                                animation: 'spin 1s linear infinite', // Continuous spinning animation
                                '@keyframes spin': {
                                    '0%': { transform: 'rotate(0deg)' },
                                    '100%': { transform: 'rotate(360deg)' },
                                },
                            }}
                            size={40} // Size of the loader
                        />
                        <Typography variant="body1" sx={{ mt: 2, color: '#475467' }}>
                            Loading jobs...
                        </Typography>
                    </Box>
                ) : jobs.length > 0 ? (
                    <>
                        <JobListPage jobs={jobs} />

                        {/* Using helper function */}
                        {metaInfo && (
                            <Box sx={{ mt: 2, textAlign: 'center', color: '#475467' }}>
                                <Typography variant="body2">
                                    Showing {((metaInfo.page - 1) * metaInfo.limit + 1)}-{Math.min(metaInfo.page * metaInfo.limit, metaInfo.total)} of {metaInfo.total} jobs
                                    (Page {metaInfo.page} of {metaInfo.totalPages})
                                </Typography>
                            </Box>
                        )}

                        {metaInfo && metaInfo.totalPages > 1 && (
                            <Pagination
                                currentPage={metaInfo.page}
                                totalPages={metaInfo.totalPages}
                                onPageChange={handlePageChange}
                                loading={loading}
                            />
                        )}
                    </>
                ) : (
                    <Box sx={{ textAlign: 'center', py: 4, color: '#475467' }}>
                        <Typography variant="body1">No jobs found matching your criteria.</Typography>
                    </Box>
                )}
            </Box>
        </Box>

    );
}
