import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';

// Định nghĩa kiểu props
interface SectionTitleProps {
    title: string;
    shopBage?: boolean; // Note: Consider renaming to `showBadge` for clarity
    showOptions?: boolean;
    showOptions1?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, shopBage, showOptions = false, showOptions1 = false }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e0e0e0',
                pb: 2,
                mb: 1.5,
            }}
        >
            <Typography
                variant="subtitle1"
                fontWeight="600"
                fontSize="20px"
                lineHeight="30px"
                sx={{
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                {title}
                {(shopBage) && (
                    <Box
                        sx={{
                            borderRadius: '30px', // Bo góc lớn để tạo hình pill
                            backgroundColor: '#effbfc', // Màu nền
                            border: '1px solid #40b0d0', // Viền
                            padding: '0 8px',
                            color: '#217799',
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 500,
                                color: '#217799',
                            }}
                        >
                            100 users
                        </Typography>
                    </Box>
                )}
            </Typography>

            <Box>
                {(showOptions1 || showOptions) && (
                    <>
                        {showOptions1 && (
                            <IconButton size="medium">
                                <Image src="/sliderIcon.svg" alt="filter" width={24} height={24} />
                            </IconButton>
                        )}
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