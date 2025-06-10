import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from 'next/image';

// Định nghĩa kiểu props
interface SectionTitleProps {
    title: string;
    showOptions?: boolean;
    showOptions1?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, showOptions, showOptions1 = false }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #e0e0e0",
                pb: 2,
                mb: 1.5,
            }}
        >
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                fontSize={20}
                sx={{ color: "text.primary" }}
            >
                {title}
            </Typography>

            <Box>
                {(showOptions1 || showOptions) && (
                    <>
                        {showOptions1 &&
                            <IconButton size="medium">
                                <Image src="/sliderIcon.svg" alt="filter" width={24} height={24} />
                            </IconButton>
                        }
                        {showOptions && (
                            <IconButton size="medium">
                                <MoreVertIcon fontSize="medium" />
                            </IconButton>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
};

export default SectionTitle;
