import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    loading?: boolean;
}

export default function Pagination({ currentPage, totalPages, onPageChange, loading = false }: PaginationProps) {
    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    if (totalPages <= 1) return null;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mt: 4,
                mb: 2,
                flexWrap: 'wrap'
            }}
        >
            <IconButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                sx={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    width: 40,
                    height: 40,
                    '&:hover': { backgroundColor: '#f8fafc' },
                    '&:disabled': { opacity: 0.5 }
                }}
            >
                <ChevronLeft fontSize="small" />
            </IconButton>

            {getVisiblePages().map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <Typography variant="body2" sx={{ px: 1, color: '#64748b' }}>
                            ...
                        </Typography>
                    ) : (
                        <Button
                            onClick={() => onPageChange(page as number)}
                            disabled={loading}
                            variant={currentPage === page ? 'contained' : 'outlined'}
                            sx={{
                                minWidth: 40,
                                height: 40,
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: 500,
                                ...(currentPage === page ? {
                                    backgroundColor: '#2494b6',
                                    color: 'white',
                                    '&:hover': { backgroundColor: '#1e7a94' }
                                } : {
                                    borderColor: '#e2e8f0',
                                    color: '#64748b',
                                    '&:hover': { backgroundColor: '#f8fafc' }
                                })
                            }}
                        >
                            {page}
                        </Button>
                    )}
                </React.Fragment>
            ))}

            <IconButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                sx={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    width: 40,
                    height: 40,
                    '&:hover': { backgroundColor: '#f8fafc' },
                    '&:disabled': { opacity: 0.5 }
                }}
            >
                <ChevronRight fontSize="small" />
            </IconButton>
        </Box>
    );
}