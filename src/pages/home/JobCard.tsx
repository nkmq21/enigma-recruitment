"use client";
import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    IconButton,
    Chip,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { JobTitleTypography } from 'enigma/styles/typography';
import { format } from "date-fns";

// Define the props interface for better type safety
interface JobCardProps {
    job?: {
        job_id: string;
        job_title: string;
        description: string;
        salary_range_start: number;
        salary_range_end: number;
        created_date: string | Date;
        close_date: string | Date;
        industry?: { industry_name: string };
        location: string;
        employment_type: string;
    };
    image?: string;
    width?: string | { [key: string]: string };
    onBookmarkClick?: () => void;
    /*    company?: string;
        date?: string;
        title?: string;
        description?: string;
        tags?: string[];
        salary?: string;
        onBookmarkClick?: () => void;*/
}

const getRandomColor = () => {
    const colors = [
        '#9E77ED', // Red
        '#6172F3', // Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

const toDisplayValue = (value: string | number | Date | null | undefined) => {
    if (value instanceof Date) {
        return format(value, "MMMM d, yyyy");
    }
    if (typeof value === "string" && !isNaN(Date.parse(value))) {
        return format(new Date(value), "MMMM d, yyyy");
    }
    return value ?? "None";
};

const JobCard: React.FC<JobCardProps> = ({
    job,
    width = '32%',
    image = 'https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/e0f19983d1fc96223a6c8b683cd1f6149e05cb54?placeholderIfAbsent=true',
    onBookmarkClick,
}) => {

    //use provided job data
    const title = job?.job_title || '';
    const createDate = job?.created_date || '';
    const closeDate = job?.close_date || '';
    const description = job?.description || '';
    const salary = job?.salary_range_end || "";

    const tags = [
        job?.industry?.industry_name,
        job?.employment_type,
        job?.location
    ]

    return (
        <Card sx={{
            width: width, borderRadius: 4, border: '1px solid #D0D5DD', transition: 'all 0.3s ease'
        }}>
            <CardMedia
                component="img"
                image={image}
                alt="Job thumbnail"
                sx={{ objectFit: 'cover' }}
            />
            <CardContent >
                <Typography
                    color="#6941C6"
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mb: 1 }}
                >
                    {toDisplayValue(createDate)} - {toDisplayValue(closeDate)}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <JobTitleTypography
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.3rem' },
                            maxWidth: '80%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {title}
                    </JobTitleTypography>
                    <IconButton size="small" onClick={onBookmarkClick} aria-label="Bookmark job">
                        <ArrowOutwardIcon color='action' />
                    </IconButton>

                </Box>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 2,
                        lineHeight: '1.5rem', // 24px
                        maxHeight: '4.5rem', // 3 dòng * 1.5rem
                        display: '-webkit-box', // Hỗ trợ multiline ellipsis
                        WebkitBoxOrient: 'vertical', // Hướng dọc
                        WebkitLineClamp: 3, // Giới hạn 3 dòng
                        overflow: 'hidden', // Ẩn phần dư
                        textOverflow: 'ellipsis', // Thêm "..."
                    }}
                >
                    {description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', pb: "-10px !important" }}>
                    {tags.map((tag, index) => {
                        // Function to generate or select a random color
                        return (
                            <Chip
                                key={index}
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: getRandomColor(),
                                            }}
                                        />
                                        {tag}
                                    </Box>
                                }
                                size="small"
                                sx={{
                                    paddingLeft: 0.5,
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #D0D5DD',
                                    borderRadius: 2
                                }}
                            />
                        );
                    })}
                    <Chip label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: '#EE46BC',
                                }}
                            />
                            {salary}
                        </Box>}
                        size="small"
                        sx={{
                            paddingLeft: 0.5,
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #D0D5DD',
                            borderRadius: 2
                        }} />
                </Box>
            </CardContent>
        </Card>
    );
}

type Job = {
    job_id: string;
    job_title: string;
    description: string;
    salary_range_start: number;
    salary_range_end: number;
    created_date: string | Date;
    close_date: string | Date;
    industry?: { industry_name: string };
    location: string;
    employment_type: string;
};

interface JobListPageProps {
    jobs?: Job[];
}

const JobListPage: React.FC<JobListPageProps> = ({ jobs }) => {
    // Dữ liệu mẫu
    const jobData = jobs?.length ? jobs : [
        {
            job_id: "1",
            job_title: "Social Media Manager (KOL Specialist)",
            description: "Lead digital marketing strategies for a growing e-commerce platform. Develop and execute campaigns to enhance brand visibility, collaborate with Key Opinion Leaders (KOLs) to boost engagement, and optimize content for multiple social media channels.",
            salary_range_start: 1200,
            salary_range_end: 1500,
            created_date: "01 Jan 2025",
            close_date: "20 Jan 2025",
            industry: { industry_name: "Marketing" },
            location: "Bangkok",
            employment_type: "Full-time",
        },
        {
            job_id: "2",
            job_title: "Product Designer (ui/UX Specialist)",
            description: "Join GreenWave Tech to design intuitive and visually appealing interfaces for our sustainability-focused mobile app. Collaborate with product managers and developers to create user-centered designs and iterate on prototypes.",
            salary_range_start: 1800,
            salary_range_end: 2200,
            created_date: "15 Feb 2025",
            close_date: "25 May 2025",
            industry: { industry_name: "Design" },
            location: "Remote",
            employment_type: "Contract",
        },
        {
            job_id: "3",
            job_title: "Frontend Developer (React Expert)",
            description: "Build and maintain responsive web applications for NovaTech's AI-driven platform. Work closely with the design team to implement modern ui components and ensure seamless user experiences.",
            salary_range_start: 1500,
            salary_range_end: 2000,
            created_date: "10 Mar 2025",
            close_date: "25 May 2025",
            industry: { industry_name: "Software Development" },
            location: "Chiang Mai",
            employment_type: "Full-time",
        },
    ];

    const handleBookmarkClick = (jobTitle: string) => {
        console.log(`Bookmarked: ${jobTitle}`);
        // Add logic to save bookmark (e.g., to localStorage or an API)
    };

    return (
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
                        {jobData.slice(rowIndex * 3, rowIndex * 3 + 3).map((job, index: React.Key | null | undefined) => (
                            <JobCard
                                key={index}
                                width={{ xs: '100%', sm: '32%' }}
                                job={job}
                                onBookmarkClick={() => handleBookmarkClick(job.job_title)}
                            />
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export { JobListPage, JobCard };