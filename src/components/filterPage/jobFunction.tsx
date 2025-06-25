"use client";
import {FunctionComponent, useState, useRef, useEffect} from 'react';
import {
    Box,
    TextField,
    Dialog,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    Button,
    Chip,
    Stack,
    Checkbox,
} from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import theme from '../font/theme';
import Image from 'next/image';
import {ArrowDropDown, Close} from '@mui/icons-material';
import {getJobFunctionNames, jobFunctionSearch} from "enigma/data/jobFunctionData";
import {useSearchParams} from 'next/navigation';

interface JobRoleFilterProps {
    disabled?: boolean;
    onDialogOpen?: () => void;
    onDialogClose?: () => void;
    value?: string[];
    onChange?: (jobFunctions: string[]) => void;
}

const JobRoleFilter: FunctionComponent<JobRoleFilterProps> = ({
                                                                  disabled = false,
                                                                  onDialogOpen,
                                                                  onDialogClose,
                                                                  value = [],
                                                                  onChange,
                                                              }) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const jobFunctionsRef = useRef(null);
    const searchParams = useSearchParams();

    // State to store selected job functions
    const [selectedJobFunctions, setSelectedJobFunctions] = useState<string[]>(() => {
        const urlJobFunctions = searchParams.get('jobFunctions')?.split(',').filter(Boolean) || [];
        return urlJobFunctions.length > 0 ? urlJobFunctions : value;
    });

    // All job functions data
    const [jobFunctionList, setJobFunctionList] = useState<string[]>([]);

    // Sync with URL params ONLY when dialog opens
    useEffect(() => {
        if (open) {
            const urlJobFunctions = searchParams.get('jobFunctions')?.split(',').filter(Boolean) || [];
            setSelectedJobFunctions(urlJobFunctions.length > 0 ? urlJobFunctions : value);
        }
    }, [open]);

    // Notify parent when selectedJobFunctions change
    useEffect(() => {
        // Only call onChange when the values are different from what was passed in props
        if (onChange && JSON.stringify(selectedJobFunctions) !== JSON.stringify(value)) {
            onChange(selectedJobFunctions);
        }
    }, [selectedJobFunctions, onChange, value]);

    // Fetch job functions
    const fetchJobFunctions = () => {
        try {
            const functions = getJobFunctionNames();
            setJobFunctionList(functions);
        } catch (error) {
            console.error('Failed to fetch job functions:', error);
            setJobFunctionList([]);
        }
    };

    useEffect(() => {
        if (open) {
            fetchJobFunctions();
        }
    }, [open]);

    const handleOpenJobFunctions = () => {
        if (disabled) return;
        setOpen(true);
        onDialogOpen?.();
    };

    const handleCloseJobFunctions = () => {
        setOpen(false);
        onDialogClose?.();
    };

    const handleJobFunctionToggle = (jobFunction: string) => {
        const newSelectedJobFunctions = selectedJobFunctions.includes(jobFunction)
            ? selectedJobFunctions.filter(j => j !== jobFunction) // Remove if already selected
            : [...selectedJobFunctions, jobFunction]; // Add if not selected
        setSelectedJobFunctions(newSelectedJobFunctions);
    };

    const handleRemoveJobFunction = (jobFunctionToRemove: string) => {
        const newSelectedJobFunctions = selectedJobFunctions.filter(j => j !== jobFunctionToRemove);
        setSelectedJobFunctions(newSelectedJobFunctions);
    };

    const handleClearAll = () => {
        setSelectedJobFunctions([]);
        onChange?.([]);
    };

    const handleApplySelection = () => {
        onChange?.(selectedJobFunctions);
        setOpen(false);
        onDialogClose?.();
    };

    // Filter job functions based on search term
    const filteredJobFunctions = searchTerm
        ? jobFunctionSearch(searchTerm.toLowerCase())
        : jobFunctionList;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width: '100%'}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={jobFunctionsRef}
                    placeholder={selectedJobFunctions.length > 0 ? `${selectedJobFunctions.length} function(s) selected` : "Job Functions"}
                    value="" // Keep empty to show placeholder
                    onClick={handleOpenJobFunctions}
                    disabled={disabled}
                    InputProps={{
                        startAdornment: <Image src='/job.svg' alt='job function' height={20} width={20}
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

                {/* Selected Job Functions Chips */}
                {selectedJobFunctions.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{mt: 1, flexWrap: 'wrap', gap: 1}}>
                        {selectedJobFunctions.slice(0, 3).map((jobFunction) => (
                            <Chip
                                key={jobFunction}
                                label={jobFunction}
                                size="small"
                                onDelete={() => handleRemoveJobFunction(jobFunction)}
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
                        {selectedJobFunctions.length > 3 && (
                            <Chip
                                label={`+${selectedJobFunctions.length - 3} more`}
                                size="small"
                                variant="outlined"
                                sx={{color: '#666'}}
                            />
                        )}
                    </Stack>
                )}
            </Box>

            {/* Dialog for job functions selection */}
            <Dialog
                open={open}
                onClose={handleCloseJobFunctions}
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
                                Select Job Functions ({selectedJobFunctions.length} selected)
                            </Typography>
                            {selectedJobFunctions.length > 0 && (
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
                            placeholder="Search Job Functions"
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

                        {/* Job Function List */}
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
                            {filteredJobFunctions.length === 0 ? (
                                <Typography textAlign="center" color="textSecondary" sx={{py: 2}}>
                                    {searchTerm ? 'No job functions found' : 'Loading job functions...'}
                                </Typography>
                            ) : (
                                filteredJobFunctions.map((jobFunction) => {
                                    const isSelected = selectedJobFunctions.includes(jobFunction);
                                    return (
                                        <ListItemButton
                                            key={jobFunction}
                                            onClick={() => handleJobFunctionToggle(jobFunction)}
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
                                                primary={jobFunction}
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
                                onClick={handleCloseJobFunctions}
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
                                Apply ({selectedJobFunctions.length})
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    );
};

export default JobRoleFilter;
