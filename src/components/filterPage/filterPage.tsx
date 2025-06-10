import React from 'react';
import { FunctionComponent, useRef, useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    ThemeProvider,
    DialogActions,
    Dialog,
} from '@mui/material';
import theme from '../font/theme';
import Image from 'next/image';
import { Close, ArrowDropDown } from '@mui/icons-material';
import CheckboxGroup from './checkboxGroup';
import SalaryFilter from './salaryFilter';
import DatePickerMenu from './calendar';
import Location from './locationFilter';
import DistanceFilter from './distance';
import IndustriesFilter from './industries';
import JobRoleFilter from './jobRole';
import JobSubRoleFilter from './jobSubRole';
// Reusable ResetButton component
const ResetButton: FunctionComponent<{
    filterName: string;
    onReset: (filterName: string) => void;
}> = ({ filterName, onReset }) => (
    <Button
        variant="text"
        size="small"
        onClick={() => onReset(filterName)}
        sx={{ p: 0, justifyContent: 'end', mb: 0.5 }}
    >
        Reset
    </Button>
);

const SlideOutMenu: FunctionComponent = () => {

    // Refs for each TextField
    const postDateRangeRef = useRef<HTMLInputElement | null>(null);
    const locationCountryRef = useRef<HTMLInputElement | null>(null);
    const locationDistanceRef = useRef<HTMLInputElement | null>(null);
    const industriesRef = useRef<HTMLInputElement | null>(null);
    const jobFunctionsRef = useRef<HTMLInputElement | null>(null);
    const jobSubFunctionsRef = useRef<HTMLInputElement | null>(null);
    const [checkedTypes, setCheckedTypes] = useState({
        experienceLevel: ['Fresher'], // Initial state
        employmentType: ['Permanent'],
        workArrangement: ['On-site'],
    });
    // Reset handler for specific filter sections
    const handleReset = (filterName: string) => {
        switch (filterName) {
            case 'Post Date Range':
                if (postDateRangeRef.current) postDateRangeRef.current.value = '';
                break;
            case 'Location':
                if (locationCountryRef.current) locationCountryRef.current.value = '';
                if (locationDistanceRef.current) locationDistanceRef.current.value = '';
                break;
            case 'Industries':
                if (industriesRef.current) industriesRef.current.value = '';
                break;
            case 'Job Role':
                if (jobFunctionsRef.current) jobFunctionsRef.current.value = '';
                if (jobSubFunctionsRef.current) jobSubFunctionsRef.current.value = '';
                break;
            case 'Experience Level':
                setCheckedTypes((prev) => ({ ...prev, experienceLevel: [] }));
            default:
                console.log(`No reset logic for ${filterName}`);
        }
    };

    const [value, setValue] = React.useState([0, 2000]);

    const handleChange = (event: any, newValue: React.SetStateAction<number[]>) => {
        setValue(newValue);
    };

    // State to control dialog open/close
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
        <ThemeProvider theme={theme} >
            <Box
                sx={{
                    width: '100%',
                    bgcolor: 'white',
                    borderRadius: 3,
                    boxShadow: 3,
                    borderLeft: '1px solid #e4e7ec',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#2494b6 #f1f1f1',
                    // Webkit scrollbar styles
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#2494b6',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#2494b6',
                        borderRadius: '10px',
                    },
                }}
            >
                {/* Header */}
                <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2, }}>
                    <Typography variant="h6" fontWeight={600} color='#101828'>
                        Filters by
                    </Typography>
                    <IconButton sx={{ ml: 'auto' }}>
                        <Close />
                    </IconButton>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3, flex: 1, mb: 20 }}>
                    {/* Post Date Range */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Post Date Range</Typography>
                            <ResetButton onReset={handleReset} filterName="Post Date Range" />
                        </Box>
                        <TextField
                            fullWidth
                            variant="outlined"
                            inputRef={postDateRangeRef}
                            placeholder="From - To"
                            InputProps={{
                                startAdornment: <Image src='/calendar.svg' alt='calendar' height={20} width={20} style={{ marginRight: '10px' }} />,
                                endAdornment:
                                    <IconButton >
                                        <ArrowDropDown sx={{ color: 'grey.600' }} />
                                    </IconButton>,
                            }}
                            onClick={handleOpen}
                            sx={{
                                "& .MuiInputLabel-asterisk": {
                                    color: "#236785"
                                },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                },
                            }}
                        />
                        <Dialog open={open}
                            onClose={handleClose}
                            maxWidth="md"
                            fullWidth
                            PaperProps={{
                                sx: {
                                    borderRadius: '12px', // Apply rounded corners here
                                },
                            }}>
                            <DatePickerMenu />
                        </Dialog>
                    </Box>

                    {/* Location */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Location</Typography>
                            <ResetButton filterName="Location" onReset={handleReset} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Location />
                            <DistanceFilter />
                        </Box>
                    </Box>

                    {/* Industries */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Industries</Typography>
                            <ResetButton filterName="Industries" onReset={handleReset} />
                        </Box>
                        <IndustriesFilter />
                    </Box>

                    {/* Job Role */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Job Role</Typography>
                            <ResetButton filterName="Job Role" onReset={handleReset} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <JobRoleFilter />

                            <JobSubRoleFilter />
                        </Box>
                    </Box>

                    {/* Experience Level */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Experience Level</Typography>
                            <ResetButton filterName="Experience Level" onReset={handleReset} />
                        </Box>
                        <CheckboxGroup
                            types={['Fresher', 'Junior', 'Midle', 'Senior', 'Lead', 'Manager',]}
                            defaultChecked={['Fresher']}
                        />
                    </Box>

                    {/* Salary Range */}
                    <Box>
                        <SalaryFilter />
                    </Box>

                    {/* Employment Type */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Employment Type</Typography>
                            <ResetButton filterName="Employment Type" onReset={handleReset} />
                        </Box>
                        <CheckboxGroup
                            types={['Permanent', 'Contract', 'Temporary']}
                            defaultChecked={['Permanent']}
                        />
                    </Box>

                    {/* Work Arrangement */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Work Arrangement</Typography>
                            <ResetButton filterName="Work Arrangement" onReset={handleReset} />
                        </Box>
                        <CheckboxGroup
                            types={['On-site', 'Remote', 'Hybrid']}
                            defaultChecked={['On-site']}
                        />
                    </Box>
                </Box>

                {/* Footer */}
                <Box
                    sx={{
                        borderTop: '1px solid #e4e7ec',
                        p: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button variant="text" color="primary">
                        Save filter
                    </Button>
                    <DialogActions>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="outlined"
                                sx={{
                                    color: "#344054",
                                    borderColor: '#D0D5DD',
                                    borderRadius: '8px'
                                }}
                                onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="contained"
                                sx={{
                                    borderColor: ' rgba(255, 255, 255, 0.12)'
                                }}
                                onClick={handleClose}>
                                Apply
                            </Button>
                        </Box>
                    </DialogActions>
                </Box>
            </Box>
        </ThemeProvider >
    );
};

export default SlideOutMenu;