import * as React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import SlideOutMenu from 'enigma/pages/filter/FilterPage';

export function FilterSortBar() {
    const [open, setOpen] = useState(false);

    // Handle opening the dialog
    const handleOpen = () => {
        setOpen(true);
    };

    // Handle closing the dialog
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                width: '38%',
                backgroundColor: '#F9FAFB', // Updated from #FFF to match ExpandedSearchBar
                display: 'flex',
                height: '64px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                px: 2,
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
                    height: '48px',
                    textTransform: 'none',
                    fontSize: '16px',
                    width: '100%',
                    fontWeight: '600',
                    borderColor: '#98A2B3',
                    color: '#475467',
                    '&:hover': {
                        borderColor: '#2494B6',
                        color: '#FDFDFD',
                        backgroundColor: '#2494B6',
                        '& .MuiButton-startIcon img': {
                            filter: 'brightness(0) invert(1)',
                        },
                    },
                    '@media (max-width: 991px)': {
                        justifyContent: "center"
                    }
                }}
                onClick={handleOpen} // Trigger dialog on click
            >
                Filter
            </Button>

            <Button
                variant="outlined"
                startIcon={<Image src="/arrow.svg" alt="sort" width={24} height={24} />}
                sx={{
                    borderRadius: 2,
                    height: '48px',
                    textTransform: 'none',
                    fontSize: '16px',
                    width: '100%',
                    fontWeight: 600,
                    borderColor: '#98A2B3',
                    color: '#475467',
                    '&:hover': {
                        borderColor: '#2494B6',
                        color: '#FDFDFD',
                        backgroundColor: '#2494B6',
                        '& .MuiButton-startIcon img': {
                            filter: 'brightness(0) invert(1)',
                        },
                    },
                }}
            >
                Sort by
            </Button>

            {/* Dialog (Pop-up Page) */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: '12px', // Apply rounded corners here
                    },
                }}
            >
                <SlideOutMenu
                    onClose={handleClose}
                />
            </Dialog>
        </Box>
    );
}