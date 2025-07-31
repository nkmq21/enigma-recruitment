import { FunctionComponent, useState, useRef, useEffect } from 'react';
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
import { ThemeProvider } from '@emotion/react';
import theme from '../font/theme';
import { ArrowDropDown, Close } from '@mui/icons-material';
import Image from 'next/image';
import { INDUSTRIES } from 'enigma/data/industryData';
import { useSearchParams } from "next/navigation";

interface IndustriesFilterProps {
    disabled?: boolean;
    value?: string[];
    onChange?: (industries: string[]) => void;
    onDialogOpen?: () => void;
    onDialogClose?: () => void;
}

const IndustriesFilter: FunctionComponent<IndustriesFilterProps> = ({
    disabled = false,
    value = [],
    onChange,
    onDialogOpen,
    onDialogClose,
}) => {
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>(() => {
        const urlIndustries = searchParams.get('industries')?.split(',').filter(Boolean) || [];
        return urlIndustries.length > 0 ? urlIndustries : value;
    });
    const [searchTerm, setSearchTerm] = useState('');
    const industriesRef = useRef(null);

    useEffect(() => {
        if (open) {
            const urlIndustries = searchParams.get('industries')?.split(',').filter(Boolean) || [];
            setSelectedIndustries(urlIndustries.length > 0 ? urlIndustries : value);
        }
    }, [open]);

    useEffect(() => {
        if (onChange && JSON.stringify(selectedIndustries) !== JSON.stringify(value)) {
            onChange(selectedIndustries);
        }
    }, [selectedIndustries, onChange, value]);

    const handleOpenIndustries = () => {
        if (disabled) return;
        setOpen(true);
        onDialogOpen?.();
    };

    const handleCloseIndustries = () => {
        setOpen(false);
        onDialogClose?.();
    };

    const handleIndustryToggle = (industry: string) => {
        const newSelectedIndustries = selectedIndustries.includes(industry)
            ? selectedIndustries.filter(i => i !== industry)
            : [...selectedIndustries, industry];
        setSelectedIndustries(newSelectedIndustries);
    };

    const handleRemoveIndustry = (industry: string) => {
        setSelectedIndustries(selectedIndustries.filter(i => i !== industry));
    };

    const handleClearAll = () => {
        setSelectedIndustries([]);
        onChange?.([]);
    };

    const handleApplySelection = () => {
        onChange?.(selectedIndustries);
        setOpen(false);
        onDialogClose?.();
    };

    const filteredIndustries = searchTerm
        ? INDUSTRIES.filter(ind =>
            ind.industryName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : INDUSTRIES;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={industriesRef}
                    placeholder={selectedIndustries.length > 0 ? `${selectedIndustries.length} industry(ies) selected` : "Industries"}
                    value="" // Always show placeholder
                    onClick={handleOpenIndustries}
                    disabled={disabled}
                    InputProps={{
                        startAdornment: <Image src='/industries.svg' alt='industries' height={20} width={20}
                            style={{ marginRight: '10px' }} />,
                        endAdornment: <ArrowDropDown sx={{ color: disabled ? 'grey.400' : 'grey.600' }} />,
                        readOnly: true,
                    }}
                    sx={{
                        "& .MuiInputLabel-asterisk": { color: "#236785" },
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                        opacity: disabled ? 0.6 : 1,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                    }}
                />

                {selectedIndustries.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                        {selectedIndustries.slice(0, 3).map((industry) => (
                            <Chip
                                key={industry}
                                label={industry}
                                size="small"
                                onDelete={() => handleRemoveIndustry(industry)}
                                deleteIcon={<Close sx={{ fontSize: 16 }} />}
                                sx={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1976d2',
                                    '& .MuiChip-deleteIcon': {
                                        color: '#1976d2',
                                        '&:hover': { color: '#d32f2f' },
                                    },
                                }}
                            />
                        ))}
                        {selectedIndustries.length > 3 && (
                            <Chip
                                label={`+${selectedIndustries.length - 3} more`}
                                size="small"
                                variant="outlined"
                                sx={{ color: '#666' }}
                            />
                        )}
                    </Stack>
                )}
            </Box>

            <Dialog
                open={open}
                onClose={handleCloseIndustries}
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: '12px',
                        overflow: 'hidden',
                        p: 2,
                        maxHeight: { xs: '400px', sm: '600px' },
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
                        width: { xs: '300px', sm: '400px' },
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
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Typography sx={{
                                fontWeight: 600,
                                color: '#262d34',
                                fontSize: { xs: '13px', sm: '16px' },
                            }}>
                                Select Industries ({selectedIndustries.length} selected)
                            </Typography>
                            {selectedIndustries.length > 0 && (
                                <Button
                                    variant="text"
                                    onClick={handleClearAll}
                                    sx={{
                                        color: '#d32f2f',
                                        textTransform: 'none',
                                        fontSize: { xs: '10px', sm: '14px' },
                                        padding: '4px 8px',
                                    }}
                                >
                                    Clear All
                                </Button>
                            )}
                        </Box>

                        <TextField
                            fullWidth
                            placeholder="Search Industries"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    border: '1px solid #d0d5dd',
                                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                    fontSize: { xs: '12px', sm: '14px' },
                                    color: '#667085',
                                },
                                '& .MuiInputBase-input': { padding: '10px 14px' },
                            }}
                        />

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
                                '&::-webkit-scrollbar': { width: '8px' },
                                '&::-webkit-scrollbar-track': { background: '#f1f1f1', borderRadius: '10px' },
                                '&::-webkit-scrollbar-thumb': { background: '#2494b6', borderRadius: '10px' },
                            }}
                        >
                            {filteredIndustries.length === 0 ? (
                                <Typography textAlign="center" color="textSecondary" sx={{ py: 2 }}>
                                    {searchTerm ? 'No industries found' : 'Loading industries...'}
                                </Typography>
                            ) : (
                                filteredIndustries.map((industry) => {
                                    const isSelected = selectedIndustries.includes(industry.industryName);
                                    return (
                                        <ListItemButton
                                            key={industry.industryId}
                                            onClick={() => handleIndustryToggle(industry.industryName)}
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
                                                    padding: { xs: '2px', sm: '4px' },
                                                    marginRight: '8px',
                                                    color: '#2494b6',
                                                    '&.Mui-checked': {
                                                        color: '#2494b6',
                                                    },
                                                }}
                                            />
                                            <ListItemText
                                                primary={industry.industryName}
                                                primaryTypographyProps={{
                                                    fontSize: { xs: '12px', sm: '14px' },
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

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Button
                                variant="outlined"
                                onClick={handleCloseIndustries}
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
                                Apply ({selectedIndustries.length})
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    );
};

export default IndustriesFilter;