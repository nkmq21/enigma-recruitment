import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import Image from 'next/image';


interface CTAProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    subtitle: string;
}

const CTA = ({imgSrc, imgAlt, title, subtitle}: CTAProps) => {
    return (

        <Button
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height: 88,
                borderRadius: 2,
                borderColor: '#D0D5DD',
                color: '#475467',
                textTransform: 'none',
                '&:hover': {borderColor: '#98A2B3', bgcolor: 'rgba(33, 150, 243, 0.1)'},
            }}
        >

            <Box sx={{p: 1.5, backgroundColor: '#D6F1F7', borderRadius: 2, height: 48}}>
                <Image src={imgSrc} alt={imgAlt} width={24} height={24}/>
            </Box>
            <Box sx={{justifyItems: 'flex-start'}}>
                <Typography variant="h6" sx={{fontWeight: 600}}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{textAlign: 'center'}}>
                    {subtitle}
                </Typography>
            </Box>
        </Button>
    );
};

export default CTA;