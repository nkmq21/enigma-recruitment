import { FunctionComponent } from 'react';
import { Box, Typography, Stack } from '@mui/material';

const CheckRegister: FunctionComponent = () => (
    <Stack sx={{ width: '100%', gap: 1.5, color: '#475467', fontFamily: 'Inter', fontSize: 14 }}>
        <Stack direction="row" sx={{ gap: 1 }}>
            <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#D0D5DD', position: 'relative', overflow: 'hidden' }}>
                <img
                    alt=""
                    src="/Checkicon.svg"
                />
            </Box>
            <Typography sx={{ flex: 1, lineHeight: '20px' }}>Must be at least 8 characters</Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 1 }}>
            <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#D0D5DD', position: 'relative', overflow: 'hidden' }}>
                <img
                    alt=""
                    src="/Checkicon.svg"
                />
            </Box>
            <Typography sx={{ flex: 1, lineHeight: '20px' }}>Must contain one special character</Typography>
        </Stack>
    </Stack>
);

export default CheckRegister;