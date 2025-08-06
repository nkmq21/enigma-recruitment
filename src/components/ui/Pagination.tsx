import React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';

interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
    const handleChangePage = (direction: string) => {
        onPageChange(direction === 'next' ? page + 1 : page - 1);
    };

    // Generate dynamic pagination numbers
    const getPaginationNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5; // Show up to 5 page numbers
        const startPage = Math.max(0, page - 2);
        const endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i + 1);
        }

        // Add ellipsis and last page if needed
        if (endPage < totalPages - 1) {
            pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                borderTop: '1px solid #e4e7ec',
                mt: 3,
            }}
        >
            <Button
                startIcon={<Image src="/arrowLeft.svg" alt="Previous page" width={24} height={24} />}
                onClick={() => handleChangePage('prev')}
                disabled={page === 0}
                sx={{
                    textTransform: 'none',
                    borderColor: 'none',
                    color: '#344054',
                    '&:hover': {
                        backgroundColor: '#f9fafb',
                    },
                    '&[disabled]': {
                        color: '#a0a8b3',
                    },
                }}
            >
                Previous
            </Button>

            <Box sx={{ display: 'flex', gap: 1 }}>
                {getPaginationNumbers().map((num, index) => (
                    <Button
                        key={index}
                        onClick={() => typeof num === 'number' && onPageChange(num - 1)}
                        disabled={typeof num !== 'number' || num - 1 === page}
                        sx={{
                            width: 40,
                            height: 40,
                            minWidth: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: num === page + 1 ? '#f9fafb' : 'transparent',
                            color: num === page + 1 ? '#182230' : '#475467',
                            borderRadius: '50%',
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: '#f9fafb',
                            },
                        }}
                    >
                        {num}
                    </Button>
                ))}
            </Box>

            <Button
                endIcon={<Image src="/arrowRight.svg" alt="Next page" width={24} height={24} />}
                onClick={() => handleChangePage('next')}
                disabled={page >= totalPages - 1}
                sx={{
                    textTransform: 'none',
                    borderColor: 'none',
                    color: '#344054',
                    '&:hover': {
                        backgroundColor: '#f9fafb',
                    },
                    '&[disabled]': {
                        color: '#a0a8b3',
                    },
                }}
            >
                Next
            </Button>
        </Box>
    );
};

export default Pagination;