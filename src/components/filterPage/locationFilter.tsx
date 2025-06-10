import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    List,
    ListItemText,
    ListItemButton,
    Dialog
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ThemeProvider } from '@emotion/react';
import theme from '../font/theme';
import Image from 'next/image';
import { ArrowDropDown } from '@mui/icons-material';

const Location = () => {

    // State to manage dialog visibility
    const [open, setOpen] = useState(false);
    // State to store selected distance
    const [selectedIndustries, setSelectedIndustries] = useState('');
    // Ref for TextField
    const locationCountryRef = useRef(null);

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
        if (locationCountryRef.current) {
            // industriesRef.current.value = distance; // Update TextField value
        }
        setOpen(false); // Close dialog after selection
    };

    return (
        <ThemeProvider theme={theme}>
            <TextField
                fullWidth
                variant="outlined"
                inputRef={locationCountryRef}
                placeholder="Viet Nam"
                value={selectedIndustries}
                onClick={handleOpenIndustries}
                InputProps={{
                    startAdornment: <Image src='/location.svg' alt='calendar' height={20} width={20} style={{ marginRight: '10px' }} />,
                    endAdornment: <ArrowDropDown sx={{ color: 'grey.600' }} />,
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

            <Dialog
                open={open}
                onClose={handleCloseIndustries}
                maxWidth="md"
                PaperProps={{
                    sx: {
                        borderRadius: '12px',
                        overflow: 'hidden',
                        p: 2,
                        maxHeight: '500px',
                        bgcolor: '#fff',
                        borderRight: '1px solid #e6e7e8',
                    },
                }}
            >
                <Box
                    sx={{
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: '#262d34',
                    }}
                >

                    {/* Region Dropdown */}
                    <Box
                        sx={{
                            borderRadius: '12px 0 0 12px',
                            backgroundColor: '#fff',
                            borderRight: '1px solid #e6e7e8',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '16px',
                            gap: '16px',
                            color: '#475467',
                            width: '33%',

                        }}
                    >
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: 1
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <ChevronLeftIcon sx={{ fontSize: '20px' }} />
                                    </Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 600,
                                            color: '#262d34'
                                        }}>
                                        Region
                                    </Typography>
                                </Box>
                                <Button
                                    variant="text"
                                    startIcon={<AddIcon />}
                                    sx={{
                                        color: '#2494b6',
                                        textTransform: 'none',
                                        padding: '8px 0',
                                    }}
                                >
                                    Add Region
                                </Button>
                            </Box>
                            <TextField
                                fullWidth
                                placeholder="Enter Region"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '8px',
                                        border: '1px solid #d0d5dd',
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        fontSize: '14px',
                                        color: '#667085',
                                    },
                                    '& .MuiInputBase-input': { padding: '10px 14px' },
                                }}
                            />
                        </Box>
                        <List sx={{
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
                        }}>
                            {['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map((region, index) => (
                                <ListItemButton
                                    key={region}
                                    sx={{
                                        borderBottom: '1px solid #e4e7ec',
                                        height: '44px',
                                        padding: '16px 12px',
                                        backgroundColor: index === 2 ? '#f9fafb' : 'transparent',
                                        zIndex: 4 - index,
                                    }}
                                >
                                    <ListItemText
                                        primary={region}
                                        primaryTypographyProps={{
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            width: '100%',
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                        {/* DropdownChild - Placeholder for the vertical bar, if needed */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '130px',
                                left: '328px',
                                borderRadius: '4px',
                                backgroundColor: '#f2f4f7',
                                height: '68px',
                                zIndex: 2,
                            }}
                        />
                    </Box>

                    {/* Country Dropdown */}
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            borderRight: '1px solid #e6e7e8',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            padding: '16px',
                            gap: '16px',
                            color: '#475467',
                            width: '33%',

                        }}
                    >
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                lexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',

                            }}>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontWeight: 600,
                                        color: '#262d34'
                                    }}>
                                    Country
                                </Typography>
                                <Button
                                    variant="text"
                                    startIcon={<AddIcon />}
                                    sx={{
                                        color: '#2494b6',
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        padding: '8px 0',
                                    }}
                                >
                                    Add Country
                                </Button>
                            </Box>
                            <TextField
                                fullWidth
                                placeholder="Enter Country"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '8px',
                                        border: '1px solid #d0d5dd',
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        fontSize: '14px',
                                        color: '#667085',
                                    },
                                    '& .MuiInputBase-input': { padding: '10px 14px' },
                                }}
                            />
                        </Box>
                        <List sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            maxHeight: '400px',
                            overflow: 'auto',
                            scrollbarColor: '#2494b6 #f1f1f1',
                            scrollbarWidth: 'thin',
                            '&::-webkit-scrollbar': {
                                width: '4px',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: '#2494b6',
                                borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#2494b6',
                                borderRadius: '10px',
                            },
                        }}>
                            {[
                                'Ukraine',
                                'Uganda',
                                'Tuvalu',
                                'Turkmenistan',
                                'Turkey',
                                'Tunisia',
                                'Trinidad and Tobago',
                                'Vietnam',
                                'Yemen',
                                'Zambia',
                            ].map((country, index) => (
                                <ListItemButton
                                    key={country}
                                    sx={{
                                        borderBottom: '1px solid #e4e7ec',
                                        height: '44px',
                                        padding: '16px 12px',
                                        backgroundColor: index === 7 ? '#f9fafb' : 'transparent',
                                    }}
                                >
                                    <ListItemText
                                        primary={country}
                                        primaryTypographyProps={{
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '130px',
                                left: '328px',
                                borderRadius: '4px',
                                backgroundColor: '#f2f4f7',
                                height: '68px',
                                zIndex: 2,
                            }}
                        />
                    </Box>

                    {/* Province Dropdown */}
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '16px',
                            gap: '16px',
                            color: '#475467',
                            width: '33%',
                        }}
                    >
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontWeight: 600,
                                        color: '#262d34'
                                    }}>
                                    Province
                                </Typography>
                                <Button
                                    variant="text"
                                    startIcon={<AddIcon />}
                                    sx={{
                                        color: '#2494b6',
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        padding: '8px 0',
                                    }}
                                >
                                    Add Province
                                </Button>
                            </Box>
                            <TextField
                                fullWidth
                                placeholder="Enter Province"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '8px',
                                        border: '1px solid #d0d5dd',
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        fontSize: '14px',
                                        color: '#667085',
                                    },
                                    '& .MuiInputBase-input': { padding: '10px 14px' },
                                }}
                            />
                        </Box>
                        <List sx={{
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
                        }}>
                            {[
                                'Cà Mau',
                                'Cao Bằng',
                                'Cần Thơ',
                                'Đà Nẵng',
                                'Đắk Lắk',
                                'Đắk Nông',
                                'Điện Biên',
                                'Đồng Nai',
                                'Đồng Tháp',
                                'Gia Lai',
                            ].map((province, index) => (
                                <ListItemButton
                                    key={province}
                                    sx={{
                                        borderBottom: '1px solid #e4e7ec',
                                        height: '44px',
                                        padding: '16px 12px',
                                        backgroundColor: index === 3 ? '#f9fafb' : 'transparent',
                                    }}
                                >
                                    <ListItemText
                                        primary={province}
                                        primaryTypographyProps={{
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            fontFamily: '"Inter", sans-serif'
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '130px',
                                left: '328px',
                                borderRadius: '4px',
                                backgroundColor: '#f2f4f7',
                                zIndex: 2,
                            }}
                        />
                    </Box>
                </Box>
            </Dialog>
        </ThemeProvider>
    );
};

export default Location;