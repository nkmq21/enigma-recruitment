import React from 'react';
import { Box, Chip } from '@mui/material';

// Define the props interface for type safety
interface TagChipsProps {
    tags: string[]; // Array of tag strings
    salary: string; // Salary value as a string
    showSalary?: boolean;
}

// Function to generate a random color from a predefined list
const getRandomColor = () => {
    const colors = [
        '#9E77ED', // Red
        '#6172F3', // Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

const TagChips: React.FC<TagChipsProps> = ({ tags, salary, showSalary = true }) => {
    return (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {tags.map((tag, index) => (
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
                        borderRadius: 2,
                    }}
                />
            ))}
            {showSalary && (
                <Chip
                    label={
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
                        </Box>
                    }
                    size="small"
                    sx={{
                        paddingLeft: 0.5,
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #D0D5DD',
                        borderRadius: 2,
                    }}
                />
            )}
        </Box>
    );
};

export default TagChips;