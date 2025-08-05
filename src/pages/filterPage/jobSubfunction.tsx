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
    Checkbox,
    Chip,
    Stack,
} from '@mui/material';
import {ThemeProvider} from '@emotion/react';
import theme from 'enigma/styles/theme';
import {ArrowDropDown, Close} from '@mui/icons-material';
import {getJobSubfunctionNamesByJobFunction} from "enigma/data/jobFunctionData";
import {useSearchParams} from "next/navigation";

interface JobSubRoleFilterProps {
    disabled?: boolean;
    selectedJobFunction: string[];
    value?: string[];
    onChange?: (jobSubfunction: string[]) => void;
}

const JobSubRoleFilter: FunctionComponent<JobSubRoleFilterProps> = ({
                                                                        disabled = false,
                                                                        value = [],
                                                                        selectedJobFunction = [],
                                                                        onChange,
                                                                    }) => {
    const searchParams = useSearchParams()!;
    // State to manage dialog visibility
    const [open, setOpen] = useState(false);
    // State to store selected jobs subfunctions
    const [selectedJobSubfunctions, setSelectedJobSubfunctions] = useState<string[]>(() => {
        const urlJobSubfunctions = searchParams.get('jobSubfunctions')?.split(',').filter(Boolean) || [];
        return urlJobSubfunctions.length > 0 ? urlJobSubfunctions : value;
    });
    const [searchTerm, setSearchTerm] = useState('');
    // all jobs subfunctions data
    const [jobSubfunctionList, setJobSubfunctionList] = useState<string[]>([]);
    // Ref for TextField
    const jobSubFunctionsRef = useRef(null);
    // Handle opening dialog
    const handleOpenJobSubfunction = () => {
        if (disabled) return;
        setOpen(true);
    };

    // Handle closing dialog
    const handleCloseJobSubfunction = () => {
        setOpen(false);
    };

    // Handle subfunction selection
    const handleJobSubfunctionToggle = (jobSubfunction: string) => {
        const newSelectedJobSubfunctions = selectedJobSubfunctions.includes(jobSubfunction)
            ? selectedJobSubfunctions.filter(j => j !== jobSubfunction)
            : [...selectedJobSubfunctions, jobSubfunction];
        setSelectedJobSubfunctions(newSelectedJobSubfunctions);
    };

    //sync with url params only when the dialog opens
    useEffect(() => {
        if (open) {
            const urlJobSubfunctions = searchParams.get('jobSubfunctions')?.split(',').filter(Boolean) || [];
            setSelectedJobSubfunctions(urlJobSubfunctions.length > 0 ? urlJobSubfunctions : value);
        }
    }, [open, searchParams, value]);

    //notify parent when selected jobs subfunctions change
    useEffect(() => {
        if (onChange && JSON.stringify(selectedJobSubfunctions) !== JSON.stringify(value)) {
            onChange(selectedJobSubfunctions);
        }
    }, [selectedJobSubfunctions, onChange, value]);

    //fetch jobs subfunctions
    const fetchJobSubfunctions = () => {
        try {
            const jobSub = selectedJobFunction
                .flatMap((jobFunc) => getJobSubfunctionNamesByJobFunction(jobFunc))
                .filter((v, i, a) => a.indexOf(v) === i);
            setJobSubfunctionList(jobSub);
        } catch (error) {
            console.error('failed to fetch jobs functions: ', error);
            setJobSubfunctionList([]);
        }
    }

    //fetch jobs subfunctions when dialog opens or selected jobs subfunction change
    useEffect(() => {
        if (open) {
            fetchJobSubfunctions();
        }
    }, [open]);

    const handleRemoveJobSubfunction = (jobSubfunctionToRemove: string) => {
        setSelectedJobSubfunctions(selectedJobSubfunctions.filter(j => j !== jobSubfunctionToRemove));
    };

    const handleClearAll = () => {
        setSelectedJobSubfunctions([]);
        onChange?.([]);
    };

    const handleApplySelection = () => {
        onChange?.(selectedJobSubfunctions);
        setOpen(false);
    };

    const filteredJobSubfunctions = searchTerm
        ? jobSubfunctionList.filter(sub =>
            sub.toLowerCase().includes(searchTerm.toLowerCase())
        ) : jobSubfunctionList;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width: '100%'}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={jobSubFunctionsRef}
                    placeholder={selectedJobSubfunctions.length > 0 ? `${selectedJobSubfunctions.length} subfunction(s) selected` : "AdminJobsPage Sub Functions"}
                    value="" // Keep empty to show placeholder
                    onClick={handleOpenJobSubfunction}
                    disabled={disabled}
                    InputProps={{
                        endAdornment: <ArrowDropDown sx={{color: disabled ? 'grey.400' : 'grey.600'}}/>,
                        readOnly: true,
                    }}
                    sx={{
                        "& .MuiInputLabel-asterisk": {color: "#236785"},
                        "& .MuiOutlinedInput-root": {borderRadius: "8px"},
                        opacity: disabled ? 0.6 : 1,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                    }}
                />

                {/* Selected AdminJobsPage Subfunctions Chips */}
                {selectedJobSubfunctions.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{mt: 1, flexWrap: 'wrap', gap: 1}}>
                        {selectedJobSubfunctions.slice(0, 3).map((jobSubfunction) => (
                            <Chip
                                key={jobSubfunction}
                                label={jobSubfunction}
                                size="small"
                                onDelete={() => handleRemoveJobSubfunction(jobSubfunction)}
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
                        {selectedJobSubfunctions.length > 3 && (
                            <Chip
                                label={`+${selectedJobSubfunctions.length - 3} more`}
                                size="small"
                                variant="outlined"
                                sx={{color: '#666'}}
                            />
                        )}
                    </Stack>
                )}
            </Box>

            {/* Dialog for jobs subfunctions selection */}
            <Dialog
                open={open}
                onClose={handleCloseJobSubfunction}
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
                                Select AdminJobsPage Sub Functions ({selectedJobSubfunctions.length} selected)
                            </Typography>
                            {selectedJobSubfunctions.length > 0 && (
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
                            placeholder="Search AdminJobsPage Sub Functions"
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

                        {/* AdminJobsPage Subfunction List */}
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
                            {filteredJobSubfunctions.length === 0 ? (
                                <Typography textAlign="center" color="textSecondary" sx={{py: 2}}>
                                    {searchTerm ? 'No jobs subfunctions found' : 'Please choose a AdminJobsPage Function first'}
                                </Typography>
                            ) : (
                                filteredJobSubfunctions.map((jobSubfunction) => {
                                    const isSelected = selectedJobSubfunctions.includes(jobSubfunction);
                                    return (
                                        <ListItemButton
                                            key={jobSubfunction}
                                            onClick={() => handleJobSubfunctionToggle(jobSubfunction)}
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
                                                primary={jobSubfunction}
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
                                onClick={handleCloseJobSubfunction}
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
                                Apply ({selectedJobSubfunctions.length})
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    );
};

export default JobSubRoleFilter;