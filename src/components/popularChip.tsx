import * as React from "react";
import {
    Box,
    Typography,
    Chip,
} from "@mui/material";

export const PopularJobChip = () => {

    const popularJobs = [
        "Digital Marketer",
        "Software Developer",
        "Tour Guide",
        "English Teacher",
        "Hotel Receptionist",
    ];

    return (
        <Box sx={{
            mb: 2.5, display: 'flex', gap: 2,
            '@media (max-width: 991px)': {
                width: '100%',
                flexDirection: 'column',
                p: 2.5,
                mb: 2
            },

        }
        }>
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
        </Box >
    );
};

