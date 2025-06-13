import React, {useEffect, useCallback} from 'react';
import {FunctionComponent, useRef, useState} from 'react';
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
import {Close, ArrowDropDown} from '@mui/icons-material';
import CheckboxGroup from './checkboxGroup';
import SalaryFilter from './salaryFilter';
import DatePickerMenu from './calendar';
import Location from './locationFilter';
import IndustriesFilter from './industries';
import JobRoleFilter from './jobFunction';
import JobSubRoleFilter from './jobSubfunction';

import {usePathname, useRouter, useSearchParams} from 'next/navigation';

import {EmploymentType} from '@prisma/client';
import {useParams} from 'next/navigation';

// Reusable ResetButton component
const ResetButton: FunctionComponent<{
    filterName: string;
    onReset: (filterName: string) => void;
}> = ({filterName, onReset}) => (
    <Button
        variant="text"
        size="small"
        onClick={() => onReset(filterName)}
        sx={{p: 0, justifyContent: 'end', mb: 0.5}}
    >
        Reset
    </Button>
);

interface SlideOutMenuProps {
    open: boolean;
    onClose: () => void;
}

const SlideOutMenu: FunctionComponent<SlideOutMenuProps> = ({open, onClose}) => {
    const router = useRouter();
    const currentPath = usePathname();
    const searchParams = useSearchParams();
    const [childDialogOpen, setChildDialogOpen] = useState(false);

    const [filterValues, setFilterValues] = useState({
        postDateRange: '',
        selectedLocations: searchParams.get('locations')?.split(',').filter(Boolean) || [] as string[],
        industries: [] as string[],
        selectedJobFunctions: searchParams.get('jobFunctions')?.split(',').filter(Boolean) || [] as string[],
        jobSubfunctions: [] as string[],
        salaryRange: {min: '', max: ''},
        EmploymentType: [] as string[],
    });

    //update filter state when the url change
    useEffect(() => {
        setFilterValues({
            postDateRange: searchParams.get('postDateRange') || '',
            selectedLocations: searchParams.get('locations')?.split(',').filter(Boolean) || [],
            industries: searchParams.get('industries')?.split(',').filter(Boolean) || [],
            selectedJobFunctions: searchParams.get('jobFunctions')?.split(',').filter(Boolean) || [],
            jobSubfunctions: searchParams.get('jobSubfunctions')?.split(',').filter(Boolean) || [],
            salaryRange: {min: '', max: ''},
            EmploymentType: searchParams.get('EmploymentType')?.split(',').filter(Boolean) || [],
        })
    }, [searchParams])

    // Update location field display when locations change
    const updateLocationDisplay = () => {
        if (locationCountryRef.current && filterValues.selectedLocations.length > 0) {
            const displayText = filterValues.selectedLocations.length === 1
                ? filterValues.selectedLocations[0]
                : `${filterValues.selectedLocations.length} locations selected`;
            locationCountryRef.current.value = displayText;
        }
    };

    // Handle location changes from Location component
    const handleLocationChange = useCallback((locations: string[]) => {
        console.log('📥 Location updated:', locations);
        setFilterValues(prev => ({
            ...prev,
            selectedLocations: locations
        }));
    }, []); // No dependencies - stable reference

    const handleJobFunctionChange = useCallback((jobFunctions: string[]) => {
        console.log('📥 Job Functions updated:', jobFunctions);
        setFilterValues(prev => ({
            ...prev,
            selectedJobFunctions: jobFunctions
        }));
    }, []); // No dependencies - stable reference

    // Refs for each TextField
    const postDateRangeRef = useRef<HTMLInputElement | null>(null);
    const locationCountryRef = useRef<HTMLInputElement | null>(null);
    // const locationDistanceRef = useRef<HTMLInputElement | null>(null);
    const industriesRef = useRef<HTMLInputElement | null>(null);
    const jobFunctionsRef = useRef<HTMLInputElement | null>(null);
    const jobSubFunctionsRef = useRef<HTMLInputElement | null>(null);
    // Reset handler for specific filter sections
    const handleReset = (filterName: string) => {
        const params = new URLSearchParams(searchParams.toString());
        switch (filterName) {
            case 'Post Date Range':
                if (postDateRangeRef.current) postDateRangeRef.current.value = '';
                break;
            case 'Location':
                setFilterValues(prev => ({...prev, selectedLocations: []}));
                params.delete('locations');
                if (locationCountryRef.current) locationCountryRef.current.value = '';
                break;
            case 'Industries':
                if (industriesRef.current) industriesRef.current.value = '';
                break;
            case 'Job Role':
                if (jobFunctionsRef.current) jobFunctionsRef.current.value = '';
                if (jobSubFunctionsRef.current) jobSubFunctionsRef.current.value = '';
                break;
            default:
                console.log(`No reset logic for ${filterName}`);
        }
        router.push(`/jobs?${params.toString()}`);
    };

    //apply filter and update the url
    const handleApplyFilters = () => {
        const queryParams = new URLSearchParams(searchParams.toString());

        if (filterValues.selectedLocations.length > 0) {
            queryParams.set('locations', filterValues.selectedLocations.join(','));
        } else {
            queryParams.delete('locations');
        }

        if (filterValues.selectedJobFunctions.length > 0) {
            queryParams.set('jobFunctions', filterValues.selectedJobFunctions.join(','));
        } else {
            queryParams.delete('jobFunctions');
        }

        //TODO: add other filters to URL

        //navigate with query params
        // queryParams.set('page', '1');
        router.push(`/jobs?${queryParams.toString()}`);
        console.log(`CURRENT PATH (FROM FILTER PAGE): `, currentPath);

        console.log('applied filter: ', filterValues);
        console.log('url query: ', queryParams);

        onClose();
    }

    // State for date picker dialog
    const [datePickerOpen, setDatePickerOpen] = useState(false);

    const handleDatePickerOpen = () => {
        setDatePickerOpen(true);
    };

    const handleDatePickerClose = () => {
        setDatePickerOpen(false);
    };

    const handleChildDialogOpen = () => {
        setChildDialogOpen(true);
    };

    const handleChildDialogClose = () => {
        setChildDialogOpen(false);
    };


    return (
        <ThemeProvider theme={theme}>
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
                <Box sx={{p: 3, display: 'flex', alignItems: 'center', gap: 2,}}>
                    <Typography variant="h6" fontWeight={600} color='#101828'>
                        Filters by
                    </Typography>
                    <IconButton sx={{ml: 'auto'}} onClick={onClose}>
                        <Close/>
                    </IconButton>
                </Box>

                {/* Content */}
                <Box sx={{p: 3, display: 'flex', flexDirection: 'column', gap: 3, flex: 1}}>
                    {/* Post Date Range */}
                    <Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 0.5}}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Post Date Range</Typography>
                            <ResetButton onReset={handleReset} filterName="Post Date Range"/>
                        </Box>
                        <TextField
                            fullWidth
                            variant="outlined"
                            inputRef={postDateRangeRef}
                            placeholder="From - To"
                            aria-readonly
                            InputProps={{
                                startAdornment: <Image src='/calendar.svg' alt='calendar' height={20} width={20}
                                                       style={{marginRight: '10px'}}/>,
                                endAdornment:
                                    <IconButton>
                                        <ArrowDropDown sx={{color: 'grey.600'}}/>
                                    </IconButton>,
                            }}
                            onClick={handleDatePickerOpen}
                            sx={{
                                "& .MuiInputLabel-asterisk": {
                                    color: "#236785"
                                },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                },
                            }}
                        />
                        <Dialog
                            open={datePickerOpen}
                            onClose={handleDatePickerClose}
                            maxWidth="xs"
                            fullWidth
                            PaperProps={{
                                sx: {
                                    borderRadius: '12px', // Apply rounded corners here
                                },
                            }}>
                            <DatePickerMenu onClose={handleDatePickerClose}/>
                        </Dialog>
                    </Box>

                    {/* Location */}
                    <Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Location</Typography>
                            <ResetButton filterName="Location" onReset={handleReset}/>
                        </Box>
                        <Box sx={{display: 'flex', gap: 2}}>
                            {/*<TextField*/}
                            {/*    fullWidth*/}
                            {/*    variant="outlined"*/}
                            {/*    inputRef={locationCountryRef}*/}
                            {/*    placeholder="Select locations"*/}
                            {/*    value={*/}
                            {/*        filterValues.selectedLocations.length === 0*/}
                            {/*            ? ''*/}
                            {/*            : filterValues.selectedLocations.length === 1*/}
                            {/*                ? filterValues.selectedLocations[0]*/}
                            {/*                : `${filterValues.selectedLocations.length} locations selected`*/}
                            {/*    }*/}
                            {/*    onClick={handleChildDialogOpen}*/}
                            {/*    InputProps={{*/}
                            {/*        startAdornment: <Image src='/location.svg' alt='location' height={20} width={20} style={{ marginRight: '10px' }} />,*/}
                            {/*        endAdornment: <ArrowDropDown sx={{ color: 'grey.600' }} />,*/}
                            {/*        readOnly: true,*/}
                            {/*    }}*/}
                            {/*    sx={{*/}
                            {/*        "& .MuiOutlinedInput-root": { borderRadius: "8px" },*/}
                            {/*        cursor: 'pointer',*/}
                            {/*    }}*/}
                            {/*/>*/}

                            <Location
                                disabled={false}
                                onDialogOpen={handleChildDialogOpen}
                                onDialogClose={handleChildDialogClose}
                                value={filterValues.selectedLocations}
                                onChange={handleLocationChange}
                            />
                        </Box>
                    </Box>

                    {/* Industries */}
                    <Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Industries</Typography>
                            <ResetButton filterName="Industries" onReset={handleReset}/>
                        </Box>
                        <IndustriesFilter/>
                    </Box>

                    {/* Job Role */}
                    <Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Job Role</Typography>
                            <ResetButton filterName="Job Role" onReset={handleReset}/>
                        </Box>
                        <Box sx={{display: 'flex', gap: 2}}>
                            <JobRoleFilter
                                value={filterValues.selectedJobFunctions}
                                onChange={handleJobFunctionChange}
                                disabled={false}
                            />

                            <JobSubRoleFilter/>
                        </Box>
                    </Box>

                    {/* Salary Range */}
                    <Box>
                        <SalaryFilter/>
                    </Box>

                    {/* Employment Type */}
                    <Box>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                            <Typography variant='body2' fontWeight={500} color='#31373d'>Employment Type</Typography>
                            <ResetButton filterName="Employment Type" onReset={handleReset}/>
                        </Box>
                        <CheckboxGroup
                            types={['Permanent', 'Contract', 'Temporary']}
                            defaultChecked={['Permanent']}
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
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Button variant="outlined"
                                    sx={{
                                        color: "#344054",
                                        borderColor: '#D0D5DD',
                                        borderRadius: '8px'
                                    }}
                                    onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="contained"
                                    sx={{
                                        borderColor: ' rgba(255, 255, 255, 0.12)'
                                    }}
                                    onClick={handleApplyFilters}>
                                Apply
                            </Button>
                        </Box>
                    </DialogActions>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default SlideOutMenu;