"use client";
import * as React from "react";
import SectionTitle from "../font/sectionTitle";
import SearchBar from "../searchBar";
import CTA from "../common/cta";
import { JobListPage } from "../home/JobCard";
import {
    Box,
    Typography,
    Chip,
    Divider,
} from "@mui/material";
import { Job } from "enigma/types/models";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const MainContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    const [jobs, setJobs] = React.useState<Job[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true)
            try {
                const queryParams = new URLSearchParams();
                queryParams.set('status', 'active,prioritized');
                const query = searchParams.get('query');
                if (query) {
                    queryParams.set('query', query);
                }

                const locations = searchParams.get('locations');
                if (locations) {
                    queryParams.set('locations', locations);
                }

                const jobFunctions = searchParams.get('jobFunctions');
                if (jobFunctions) {
                    queryParams.set('jobFunctions', jobFunctions);
                }

                //TODO: other filter criteria will continue from here

                const page = searchParams.get('page') || '1';
                queryParams.set('page', page);

                console.log('query params', queryParams.toString());

                const response = await fetch(`/api/jobs?status=active,prioritized${queryParams.toString()}`);
                if (!response.ok) {
                    throw new Error('failed to fetch jobs');
                }

                const data = await response.json();
                if (data.jobs) {
                    setJobs(data.jobs);
                } else {
                    console.error('the response have unexpected data', data);
                    setJobs([]);
                }
            } catch (error) {
                console.error("job fetch failed: ", error);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [searchParams]);

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            width: '100%',
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Dashboard
            </Typography>

            {/* Search and Filter */}
            <SearchBar />


            {/* ADDED TO CHECK THE ACTIVATED FILTER */}
            {/* Active Filters */}
            {(searchParams.get('locations') || searchParams.get('jobFunctions') || searchParams.get('query')) && (
                <Box sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Active Filters:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {searchParams.get('query') && (
                            <Chip
                                label={`Search: ${searchParams.get('query')}`}
                                size="small"
                                onDelete={() => {
                                    const newParams = new URLSearchParams(searchParams.toString());
                                    newParams.delete('query');
                                    router.push(`/jobs?${newParams.toString()}`);
                                }}
                            />
                        )}
                        {searchParams.get('locations') && (
                            <Chip
                                label={`Locations: ${searchParams.get('locations')?.replace(/,/g, ', ')}`}
                                size="small"
                                onDelete={() => {
                                    const newParams = new URLSearchParams(searchParams.toString());
                                    newParams.delete('locations');
                                    router.push(`/jobs?${newParams.toString()}`);
                                }}
                            />
                        )}
                        {/* Add other filter chips... */}
                        {searchParams.get('jobFunctions') && (
                            <Chip
                                label={`Job Functions: ${searchParams.get('jobFunctions')?.replace(/,/g, ', ')}`}
                                size="small"
                                onDelete={() => {
                                    const newParams = new URLSearchParams(searchParams.toString());
                                    newParams.delete('jobFunctions');
                                    router.push(`/jobs?${newParams.toString()}`);
                                }}
                            />
                        )}
                    </Box>
                </Box>
            )}

            {/* Popular Jobs */}
            <Box sx={{
                mb: 2.5, display: 'flex', gap: 2,
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'row',
                    p: 2.5,
                    mb: 2
                },

            }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                    Popular Jobs:
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                    {popularJobs.map((job, index) => (
                        <Chip
                            key={index}
                            label={job}
                            variant="outlined"
                            clickable
                            sx={{
                                color: '#667085',
                                borderColor: '#2494B6',
                                '&:hover': {
                                    backgroundColor: '#2494B620' // 20% opacity
                                }
                            }} />
                    ))}
                </Box>
            </Box>

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
                    {/* Step Section */}
                    <SectionTitle title="Step Into Your Future" showOptions />
                    <CTA />

                    {/* Trending Jobs */}
                    <SectionTitle title="Trending Jobs This Week" showOptions1 showOptions />

                    {loading ? (
                        <Box sx={{ textAlign: 'center', py: 4 }}>
                            <Typography variant="body1">Loading jobs...</Typography>
                        </Box>
                    ) : jobs.length > 0 ? (
                        <JobListPage jobs={jobs} />
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 4 }}>
                            <Typography variant="body1">No jobs found matching your criteria.</Typography>
                        </Box>
                    )}

                </Box>
            </Box>

        </Box>
    );
};

