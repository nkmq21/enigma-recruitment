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

export const MainContent = () => {
    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    const [jobs, setJobs] = React.useState<Job[]>([]);
    const [loading, setLoading] = React.useState(true);
    const searchParams = useSearchParams();

    React.useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const query = searchParams.toString();
                const response = await fetch(`/api/jobs?status=active,prioritized${query ? '&' + query : ''}`);

                if (!response.ok) {
                    throw new Error('failed to fetch jobs');
                }

                const data = await response.json();

                if (data.jobs) {
                    setJobs(data.jobs);
                } else {
                    console.error('the reponse have unexpected data', data);
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
            <SearchBar placeholder="Job title, description, or industry name"/>

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

