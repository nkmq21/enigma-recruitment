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
import { ArrowDropDown } from '@mui/icons-material';

const DistanceFilter: FunctionComponent = () => {
    // State to manage dialog visibility
    const [open, setOpen] = useState(false);
    // State to store selected distance
    const [selectedDistance, setSelectedDistance] = useState('');
    // Ref for TextField
    const distanceRef = useRef(null);

    // Handle opening dialog
    const handleOpen = () => {
        setOpen(true);
    };

    // Handle closing dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle distance selection
    const handleDistanceSelect = (distance: string) => {
        setSelectedDistance(distance);
        if (distanceRef.current) {
            // distanceRef.current.value = distance; // Update TextField value
        }
        setOpen(false); // Close dialog after selection
    };

    // Distance options
    const distances = ['48km', '49km', '50km', '51km', '52km'];

    return (
        <ThemeProvider theme={theme}>
            <>
                <TextField
                    fullWidth
                    variant="outlined"
                    inputRef={distanceRef}
                    placeholder="+50km"
                    onClick={handleOpen}
                    value={selectedDistance}
                    InputProps={{
                        endAdornment:
                            <IconButton>
                                <ArrowDropDown sx={{ color: 'grey.600' }} />
                            </IconButton>
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
                    onClose={handleClose}
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
                            Distance
                        </Typography>
                    </Box>
                    <TextField
                        fullWidth
                        variant="outlined"
                        inputRef={distanceRef}
                        placeholder="Enter Distance"
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
                        }}
                    >
                        {distances.map((distance, index) => (
                            <ListItemButton
                                key={distance}
                                onClick={() => handleDistanceSelect(distance)}
                                sx={{
                                    borderBottom: '1px solid #e4e7ec',
                                    height: '44px',
                                    padding: '16px 12px',
                                    backgroundColor: index === 2 ? '#f9fafb' : 'transparent',
                                    zIndex: 4 - index,
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

export default DistanceFilter;