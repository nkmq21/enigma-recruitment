import * as React from "react";
import SuggestedJobCard from "../suggestJobCard";
import SectionTitle from "../font/sectionTitle";
import Image from 'next/image';
import { JobCard } from "./JobCard";
import {
    Box,
    Typography,
    Button,
    Chip,
    Card,
    CardContent,
    IconButton,
    useTheme,
    Divider,
} from "@mui/material";
import SearchBar from "enigma/components/searchBar";

export const MainContent = () => {
    const jobData = [1, 2, 3, 4];
    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

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

            <SearchBar placeholder="Job title, description, or industry name"/>

            {/* Popular Jobs */}
            <Box sx={{
                mb: 2.5, display: 'flex', gap: 2,
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'column',
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
                    width: '70%',
                    '@media (max-width: 991px)': {
                        width: '100%',
                        pr: 2
                    },
                }}>
                    {/* Step Section */}
                    <SectionTitle title="Step Into Your Future" showOptions />

                    <Box sx={{
                        display: 'flex', gap: 2, mt: 2, mb: 3, justifyContent: 'space-between',
                        '@media (max-width: 991px)': {
                            flexDirection: 'column',
                        },
                    }}>
                        < Button
                            variant="outlined"
                            sx={{
                                flexDirection: 'row', gap: 2, alignItems: 'center',
                                justifyContent: 'flex-start', width: '100%', height: 88, borderRadius: 2,
                                borderColor: '#D0D5DD', color: '#475467', textTransform: 'none',
                                '&:hover': { borderColor: '#98A2B3', bgcolor: 'rgba(33, 150, 243, 0.1)' }
                            }}
                        >
                            <Box sx={{ p: 1.5, backgroundColor: '#D6F1F7', borderRadius: 2, height: 48 }}><Image src="/folder.svg" alt="upload" width={24} height={24} /></Box>
                            <Box sx={{ justifyItems: 'flex-start' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>Upload CV</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>Stand out with your expertise</Typography>
                            </Box>
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                flexDirection: 'row', gap: 2, alignItems: 'center',
                                justifyContent: 'flex-start', width: '100%', height: 88, borderRadius: 2,
                                borderColor: '#D0D5DD', color: '#475467', textTransform: 'none',
                                '&:hover': { borderColor: '#98A2B3', bgcolor: 'rgba(33, 150, 243, 0.1)' }
                            }}
                        >
                            <Box sx={{ p: 1.5, m: 1, backgroundColor: '#D6F1F7', borderRadius: 2, height: 48 }}>
                                <Image src="/create.svg" alt="profile" width={24} height={24} /></Box>
                            <Box sx={{ justifyItems: 'flex-start' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>Create Your Profile</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>Attract premium employers instantly</Typography>
                            </Box>
                        </Button>
                    </Box>

                    {/* Trending Jobs */}
                    <SectionTitle title="Trending Jobs This Week" showOptions1 showOptions />

                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {Array.from({ length: Math.ceil(jobData.length / 2) }, (_, rowIndex) => (
                                <Box
                                    key={rowIndex}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on larger screens
                                        gap: 3,
                                    }}
                                >
                                    {jobData.slice(rowIndex * 2, rowIndex * 2 + 2).map((job) => (
                                        <JobCard key={job} />
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                </Box>

                {/* Right Column */}
                <Box sx={{ mr: 2 }}>
                    <SectionTitle title="Suggested" showOptions />

                    <Box sx={{
                        mt: 2
                    }}>
                        {[1, 2, 3, 4, 5].map((job) => (
                            <SuggestedJobCard />
                        ))}
                    </Box>
                </Box>
            </Box >

        </Box >
    );
};

const FeatureCard = ({
                         icon,
                         title,
                         subtitle,
                     }: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) => (
    <Box sx={{ mb: 2, width: "100% " }}>
        <Card>
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <IconButton sx={{ bgcolor: "#D6F1F7", color: "primary.main" }}>
                    {icon}
                </IconButton>
                <Box>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subtitle}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Box>
);