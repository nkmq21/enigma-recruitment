import React, {useEffect, useState, useRef, useMemo} from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    List,
    ListItemText,
    ListItemButton,
    Dialog,
    Checkbox,
    Chip,
    Stack
} from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import theme from '../font/theme';
import Image from 'next/image';
import {ArrowDropDown, Close} from '@mui/icons-material';
import {FilterService} from 'enigma/services/jobServices';
import {useSearchParams} from 'next/navigation';

interface LocationProps {
    disabled?: boolean;
    value?: string[]; // Change to array for multiple selections
    onChange?: (locations: string[]) => void; // Change to array
}

const Location = React.memo<LocationProps>(({
                                                disabled = false,
                                                value = [],
                                                onChange,
                                            }) => {
    const filterService = useMemo(() => new FilterService(), []);
    const [locationList, setLocationList] = useState<string[]>([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams();
    const locationProvinceRef = useRef(null);
    const [selectedLocations, setSelectedLocations] = useState<string[]>(() => {
        const urlLocations = searchParams.get('locations')?.split(',').filter(Boolean) || [];
        return urlLocations.length > 0 ? urlLocations : value;
    });

    //sync with URL params when they change
    useEffect(() => {
        if (open) {
            const urlLocations = searchParams.get('locations')?.split(',').filter(Boolean) || [];
            setSelectedLocations(urlLocations.length > 0 ? urlLocations : value);
        }
    }, [open, searchParams, value]);

    //notify parent when selectedLocations change
    useEffect(() => {
        if (onChange && JSON.stringify(selectedLocations) !== JSON.stringify(value)) {
            onChange(selectedLocations);
        }
    }, [selectedLocations, onChange, value]);


    const fetchLocations = async () => {
        try {
            const locations = await filterService.getLocations();
            console.log('Fetched locations:', locations);
            setLocationList(locations);
        } catch (error) {
            console.error('Failed to fetch locations:', error);
            setLocationList([]);
        }
    };

    useEffect(() => {
        if (open) {
            fetchLocations();
        }
    }, [open]);

    const handleOpenLocation = () => {
        if (disabled) return;
        setOpen(true);
    };

    const handleCloseLocation = () => {
        setOpen(false);
    };

    const handleLocationToggle = (province: string) => {
        const newSelectedLocations = selectedLocations.includes(province)
            ? selectedLocations.filter(p => p !== province) // Remove if already selected
            : [...selectedLocations, province]; // Add if not selected

        console.log('After toggle:', {newSelectedLocations});

        setSelectedLocations(newSelectedLocations);
    };

    const handleRemoveLocation = (locationToRemove: string) => {
        const newSelectedLocations = selectedLocations.filter(p => p !== locationToRemove);
        setSelectedLocations(newSelectedLocations);
    };

    const handleClearAll = () => {
        setSelectedLocations([]);
        onChange?.([]);
    };

    const handleApplySelection = () => {
        onChange?.(selectedLocations);
        setOpen(false);
    };

    // Filter locations based on search term
    const filteredLocations = locationList.filter(location =>
        location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    Location.displayName = 'locations';

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width: '100%'}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={locationProvinceRef}
                    placeholder={selectedLocations.length > 0 ? `${selectedLocations.length} location(s) selected` : "Select Locations"}
                    value="" // Keep empty to show placeholder
                    onClick={handleOpenLocation}
                    disabled={disabled}
                    InputProps={{
                        startAdornment: <Image src='/location.svg' alt='location' height={20} width={20}
                                               style={{marginRight: '10px'}}/>,
                        endAdornment: <ArrowDropDown sx={{color: disabled ? 'grey.400' : 'grey.600'}}/>,
                        readOnly: true, // Prevent typing in the field
                    }}
                    sx={{
                        "& .MuiInputLabel-asterisk": {color: "#236785"},
                        "& .MuiOutlinedInput-root": {borderRadius: "8px"},
                        opacity: disabled ? 0.6 : 1,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                    }}
                />

                {/* Selected Locations Chips */}
                {selectedLocations.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{mt: 1, flexWrap: 'wrap', gap: 1}}>
                        {selectedLocations.slice(0, 3).map((location) => (
                            <Chip
                                key={location}
                                label={location}
                                size="small"
                                onDelete={() => handleRemoveLocation(location)}
                                deleteIcon={<Close sx={{fontSize: 16}}/>}
                                sx={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1976d2',
                                    '& .MuiChip-deleteIcon': {
                                        color: '#1976d2',
                                        '&:hover': {
                                            color: '#d32f2f',
                                        },
                                    },
                                }}
                            />
                        ))}
                        {selectedLocations.length > 3 && (
                            <Chip
                                label={`+${selectedLocations.length - 3} more`}
                                size="small"
                                variant="outlined"
                                sx={{color: '#666'}}
                            />
                        )}
                    </Stack>
                )}
            </Box>

            <Dialog
                open={open}
                onClose={handleCloseLocation}
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: '12px',
                        overflow: 'hidden',
                        p: 2,
                        maxHeight: {xs: '400px', sm: '600px'},
                        bgcolor: '#fff',
                    },
                }}
            >
                <Box
                    sx={{
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#262d34',
                        width: {xs: '300px', sm: '400px'},
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '16px',
                            gap: '16px',
                            color: '#475467',
                        }}
                    >
                        {/* Header */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography sx={{
                                fontWeight: 600,
                                color: '#262d34',
                                fontSize: {xs: '13px', sm: '16px'},
                            }}>
                                Select Locations ({selectedLocations.length} selected)
                            </Typography>
                            {selectedLocations.length > 0 && (
                                <Button
                                    variant="text"
                                    onClick={handleClearAll}
                                    sx={{
                                        color: '#d32f2f',
                                        textTransform: 'none',
                                        fontSize: {xs: '10px', sm: '14px'},
                                        padding: '4px 8px',
                                    }}
                                >
                                    Clear All
                                </Button>
                            )}
                        </Box>

                        {/* Search Field */}
                        <TextField
                            fullWidth
                            placeholder="Search Locations"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    border: '1px solid #d0d5dd',
                                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                    fontSize: {xs: '12px', sm: '14px'},
                                    color: '#667085',
                                },
                                '& .MuiInputBase-input': {padding: '10px 14px'},
                            }}
                        />

                        {/* Location List */}
                        <List
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                maxHeight: '300px',
                                overflow: 'auto',
                                scrollbarColor: '#2494b6 #f1f1f1',
                                scrollbarWidth: 'thin',
                                '&::-webkit-scrollbar': {width: '8px'},
                                '&::-webkit-scrollbar-track': {background: '#f1f1f1', borderRadius: '10px'},
                                '&::-webkit-scrollbar-thumb': {background: '#2494b6', borderRadius: '10px'},
                            }}
                        >
                            {filteredLocations.length === 0 ? (
                                <Typography textAlign="center" color="textSecondary" sx={{py: 2}}>
                                    {searchTerm ? 'No locations found' : 'Loading locations...'}
                                </Typography>
                            ) : (
                                filteredLocations.map((location) => {
                                    const isSelected = selectedLocations.includes(location);
                                    return (
                                        <ListItemButton
                                            key={location}
                                            onClick={() => handleLocationToggle(location)}
                                            sx={{
                                                borderRadius: '6px',
                                                height: '44px',
                                                padding: '8px 12px',
                                                backgroundColor: isSelected ? '#e3f2fd' : 'transparent',
                                                '&:hover': {
                                                    backgroundColor: isSelected ? '#bbdefb' : '#f9fafb'
                                                },
                                                border: isSelected ? '1px solid #2494b6' : '1px solid transparent',
                                            }}
                                        >
                                            <Checkbox
                                                checked={isSelected}
                                                // onChange={() => handleProvinceToggle(province)}
                                                sx={{
                                                    padding: {xs: '2px', sm: '4px'},
                                                    marginRight: '8px',
                                                    color: '#2494b6',
                                                    '&.Mui-checked': {
                                                        color: '#2494b6',
                                                    },
                                                }}
                                            />
                                            <ListItemText
                                                primary={location}
                                                primaryTypographyProps={{
                                                    fontSize: {xs: '12px', sm: '14px'},
                                                    lineHeight: '20px',
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontWeight: isSelected ? 600 : 400,
                                                    color: isSelected ? '#2494b6' : '#262d34',
                                                }}
                                            />
                                        </ListItemButton>
                                    );
                                })
                            )}
                        </List>

                        {/* Action Buttons */}
                        <Box sx={{display: 'flex', gap: 2, mt: 2}}>
                            <Button
                                variant="outlined"
                                onClick={handleCloseLocation}
                                sx={{
                                    flex: 1,
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    borderColor: '#d0d5dd',
                                    color: '#475467',
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleApplySelection}
                                sx={{
                                    flex: 1,
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    backgroundColor: '#2494b6',
                                    '&:hover': {
                                        backgroundColor: '#1e7a9a',
                                    },
                                }}
                            >
                                Apply ({selectedLocations.length})
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    );
});

export default Location;