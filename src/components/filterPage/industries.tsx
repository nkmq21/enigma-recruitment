import { FunctionComponent, useState, useRef } from 'react';
import {
    Box,
    TextField,
    Dialog,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider } from '@emotion/react';
import theme from '../font/theme';
import Image from 'next/image';
import { ArrowDropDown } from '@mui/icons-material';

const IndustriesFilter: FunctionComponent = () => {
    // State to manage dialog visibility
    const [open, setOpen] = useState(false);
    // State to store selected distance
    const [selectedIndustries, setSelectedIndustries] = useState('');
    // Ref for TextField
    const industriesRef = useRef(null);

    // Handle opening dialog
    const handleOpenIndustries = () => {
        setOpen(true);
    };

    // Handle closing dialog
    const handleCloseIndustries = () => {
        setOpen(false);
    };

    // Handle distance selection
    const handleIndustriesSelect = (distance: string) => {
        setSelectedIndustries(distance);
        if (industriesRef.current) {
            // industriesRef.current.value = distance; // Update TextField value
        }
        setOpen(false); // Close dialog after selection
    };

    // Distance options
    const distances = ['Aerospace', 'Automotive', 'Apparel & Footwear',
        'Chemicals', 'Cosmetics', 'Electronics', 'Food & Beverages',
        'Furniture', 'Industrial Machinery & Equipment', 'Jewelry', 'Labels & Packaging'];
    return (
        <ThemeProvider theme={theme}>
            <>
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={industriesRef}
                    placeholder="Industries"
                    value={selectedIndustries}
                    onClick={handleOpenIndustries}
                    InputProps={{
                        startAdornment: <Image src='/industries.svg' alt='industries' height={20} width={20} style={{ marginRight: '10px' }} />,
                        endAdornment: <IconButton> <ArrowDropDown sx={{ color: 'grey.600' }} /></IconButton>,
                    }}
                    sx={{
                        "& .MuiInputLabel-asterisk": {
                            color: "#236785"
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                        },
                    }}
                />
                {/* TextField to trigger dropdown */}

                {/* Dialog for distance dropdown */}
                <Dialog
                    open={open}
                    onClose={handleCloseIndustries}
                    maxWidth="sm"
                    fullWidth
                    PaperProps={{
                        sx: {
                            borderRadius: '12px',
                            width: '306px',
                            overflowX: 'hidden',
                            p: 2,
                            bgcolor: '#fff',
                            borderRight: '1px solid #e6e7e8',
                        },
                    }}
                >

                    {/* Title */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            mb: 2,
                        }}
                    >
                        <IconButton>
                            <ArrowBackIosIcon
                                sx={{ fontSize: 16, color: '#475467' }}
                            />
                        </IconButton>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                color: '#262d34',
                                fontSize: '16px',
                                lineHeight: '24px',
                            }}
                        >
                            Industries
                        </Typography>
                    </Box>
                    <TextField
                        fullWidth
                        variant="outlined"
                        inputRef={industriesRef}
                        placeholder="Enter Industrie"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                border: '1px solid #d0d5dd',
                                fontSize: '14px',
                                color: '#667085',
                            },
                        }}
                    />
                    {/* Distance List */}
                    <List
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            maxHeight: '400px',
                            overflow: 'auto',
                            scrollbarColor: '#2494b6 #f1f1f1',
                            scrollbarWidth: 'thin',
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
                        {distances.map((distance, index) => (
                            <ListItemButton
                                key={distance}
                                onClick={() => handleIndustriesSelect(distance)}
                                sx={{
                                    borderBottom: '1px solid #e4e7ec',
                                    height: '44px',
                                    padding: '16px 12px',
                                    backgroundColor: index === 1 ? '#f9fafb' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={distance}
                                    primaryTypographyProps={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        fontFamily: 'Inter, sans-serif',
                                        color: '#667085',
                                    }}
                                />
                            </ListItemButton>
                        ))}
                    </List>

                    {/* Optional: Visual element like DropdownChild */}
                    <Box
                        sx={{
                            width: '4px',
                            height: '68px',
                            borderRadius: '4px',
                            bgcolor: '#f2f4f7',
                            position: 'absolute',
                            top: '130px',
                            left: '328px',
                            zIndex: 2,
                        }}
                    />
                </Dialog>
            </>
        </ThemeProvider>
    );
};

export default IndustriesFilter;