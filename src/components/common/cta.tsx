import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

const CTA = () => {
    return (
        <Box sx={{
            display: 'flex', gap: 2, mt: 2, mb: 3, justifyContent: 'space-between',
            '@media (max-width: 991px)': {
                flexDirection: 'column',
            },
        }}>
            <Button
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
    );
};

export default CTA;