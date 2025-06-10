import * as React from "react";
import SuggestedJobCard from "../suggestJobCard";
import SectionTitle from "../font/sectionTitle";
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import LogoHeader from "../logoHeader";
import SectionContent from "./sectionContent";
import {
    Box,
    Typography,
    Button,
    Chip,
    Card,
    CardContent,
    IconButton,
    TextField, InputAdornment,
    Divider,
} from "@mui/material";

export const DetailContent = () => {

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
            width: '100vh',
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <LogoHeader />
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom color="#101828">
                Dashboard
            </Typography>

            {/* Search and Filter */}
            <Box sx={{
                display: 'flex', gap: 2, p: 3, mb: 3, mt: 3, maxWidth: '100%', mx: 'auto', alignItems: 'center', color: '#98A2B3',
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                    flexDirection: 'column',
                    mb: -2
                },
            }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Job positions/ Company name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#98A2B3', backgroundColor: '#F9FAFB' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            fontSize: 20,
                            height: '64px',
                            '& fieldset': { borderColor: '#98A2B3' },
                            '&:hover fieldset': { borderColor: '#98A2B3' },
                            '&.Mui-focused fieldset': { borderColor: '#98A2B3' },
                        },
                        '& input': { color: '#98A2B3', fontSize: '20px' },
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                />
                <Box
                    sx={{
                        width: '40%',
                        display: 'flex',
                        height: '64px', // Đặt chiều cao bằng với TextField
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        border: '1px solid #e0e0e0', // Thêm viền để khớp với TextField
                        borderRadius: 2, // Bo góc tương tự TextField
                        px: 2, // Thêm padding ngang để nút không sát viền
                        '@media (max-width: 991px)': {
                            width: '100%',
                        },

                    }}
                >
                    <Button
                        variant="outlined"
                        startIcon={<Image src="/sliderIcon.svg" alt="filter" width={24} height={24} />}
                        sx={{
                            borderRadius: 2,
                            height: '48px', // Tăng chiều cao nút để cân đối trong Box
                            textTransform: 'none',
                            fontSize: '16px',
                            width: '100%',
                            fontWeight: '600',
                            borderColor: '#98A2B3',
                            color: '#98A2B3',
                            '&:hover': {
                                borderColor: '#2494B6',
                                color: '#FDFDFD',
                                backgroundColor: '#2494B6', // Hiệu ứng hover
                                '& .MuiButton-startIcon img': {
                                    filter: 'brightness(0) invert(1)',
                                },
                            },
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={
                            <Image src="/arrow.svg" alt="sort" width={24} height={24} />
                        }
                        sx={{
                            borderRadius: 2,
                            height: '48px', // Tăng chiều cao nút để cân đối trong Box
                            textTransform: 'none',
                            fontSize: '16px',
                            width: '100%',
                            fontWeight: 600,
                            borderColor: '#98A2B3',
                            color: '#98A2B3',
                            '&:hover ': {
                                borderColor: '#2494B6',
                                color: '#FDFDFD',
                                backgroundColor: '#2494B6', // Hiệu ứng hover
                                '& .MuiButton-startIcon img': {
                                    filter: 'brightness(0) invert(1)',
                                },
                            },
                        }}
                    >
                        Sort by
                    </Button>
                </Box>
            </Box>

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
                        pr: 2,
                    },
                }}>
                    <SectionContent />
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

