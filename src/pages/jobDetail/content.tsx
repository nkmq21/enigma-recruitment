"use client";
import { FunctionComponent } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    InputAdornment,
    Card,
    CardContent,
    Stack,
    ThemeProvider,
} from "@mui/material";
import theme from '../font/theme';
import Image from "next/image";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Content: FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ borderRadius: 4, p: 4, display: "flex", flexDirection: "column", gap: 6 }}>
                <Typography variant="h5" fontWeight={600}>
                    $Senior Business Analyst (Blockchain)
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {/* Full Name */}
                    <Box>
                        <Typography variant="body2" fontWeight={500} gutterBottom >
                            Full Name <Typography component="span" color="#236785">*</Typography>
                        </Typography>

                        <TextField
                            placeholder="Enter your name"
                            required
                            fullWidth
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-asterisk": {
                                    color: "#236785"
                                },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                },
                            }}
                        />

                    </Box>

                    {/* Email and Phone Number */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Box sx={{ width: '50%' }}>
                            <Typography variant="body2" fontWeight={500} gutterBottom >
                                Email <Typography component="span" color="#236785">*</Typography>
                            </Typography>
                            <TextField
                                placeholder="Enter your email"
                                required
                                variant="outlined"
                                sx={{
                                    flex: 1, width: '100%',
                                    "& .MuiInputLabel-asterisk":
                                        { color: "#236785" },
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 1, }}>
                            <FormControl
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '8px', // Bo góc giống InputRoot
                                        border: '1px solid #d0d5dd', // Viền giống InputRoot
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', // Shadow giống InputRoot
                                        backgroundColor: '#fff', // Màu nền giống InputRoot
                                        '& .MuiSelect-select': {
                                            padding: '10px 0px 10px 14px', // Padding giống Dropdown
                                            fontSize: '16px', // Font size giống DropdownText
                                            lineHeight: '24px', // Line height giống DropdownText
                                            color: '#344054', // Màu chữ giống InputRoot
                                            fontFamily: 'Inter', // Font giống InputRoot
                                        },
                                        '& .MuiInputBase-input': {
                                            padding: '10px 14px 10px 12px', // Padding giống TextInput
                                            fontSize: '16px', // Font size giống Text
                                            lineHeight: '24px', // Line height giống Text
                                            color: '#667085', // Màu chữ giống TextInput
                                            fontFamily: 'Inter', // Font giống InputRoot
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap', // Hành vi cắt text giống Text
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#d0d5dd', // Giữ viền khi hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#d0d5dd', // Giữ viền khi focus
                                        },
                                        fieldset: {
                                            border: 'none', // Xóa viền mặc định để dùng viền từ InputRoot
                                        },
                                    },
                                }}
                            >
                                <Typography variant="body2" fontWeight={500} gutterBottom>
                                    Phone number{' '}
                                    <Typography component="span" color="#667085">
                                        (optional)
                                    </Typography>
                                </Typography>
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Select
                                        defaultValue="US"
                                        IconComponent={ArrowDropDownIcon} // Icon mũi tên giống Div trong Icon
                                        sx={{
                                            '& .MuiSelect-icon': {
                                                fontSize: '20px', // Kích thước icon giống Icon
                                            },
                                        }}>
                                        <MenuItem value="US">US</MenuItem>
                                        <MenuItem value="UK">UK</MenuItem>
                                        <MenuItem value="VN">VN</MenuItem>
                                    </Select>
                                    <TextField
                                        placeholder="+1 (555) 000-0000"
                                        fullWidth
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '0px 8px 8px 0px', // Bo góc phải giống TextInput
                                                borderLeft: 'none', // Xóa viền trái để liền mạch với Select
                                            },
                                        }}
                                    />
                                </Box>
                            </FormControl>
                        </Box>

                    </Box>
                    <Box>
                        {/* LinkedIn Profile */}
                        <Typography variant="body2" fontWeight={500} gutterBottom >
                            LinkedIn Profile <Typography component="span" color="#667085"> (optional)</Typography>
                        </Typography>
                        <TextField
                            placeholder="www.linkedin.com/feed/"
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <Box sx={{
                                        bgcolor: '#f9fafb', // Màu nền giống AddOn
                                        padding: '10px 14px 10px 0', // Padding giống AddOn
                                        borderRight: '1px solid #d0d5dd',
                                    }}>
                                        <Typography variant="body1"  >
                                            http://
                                        </Typography>
                                    </Box>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px', // Bo góc toàn bộ input
                                    border: '1px solid #d0d5dd', // Viền giống InputRoot
                                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', // Shadow giống InputRoot
                                    '& .MuiInputBase-input': {
                                        padding: '10px 14px', // Padding giống TextInput
                                        fontSize: '16px', // Font size giống Text1
                                        lineHeight: '24px', // Line height giống Text1
                                        color: '#667085', // Màu chữ placeholder giống TextInput
                                        fontFamily: 'Inter', // Font giống InputRoot
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#d0d5dd', // Giữ viền khi hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#d0d5dd', // Giữ viền khi focus
                                    },
                                    fieldset: {
                                        border: 'none', // Xóa viền mặc định của fieldset để dùng viền từ InputRoot
                                    },
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        {/* Description */}
                        <Typography variant="body2" fontWeight={500} gutterBottom >
                            Description <Typography component="span" color="#236785">*</Typography>
                        </Typography>
                        <TextField
                            placeholder="Enter a description..."
                            required
                            fullWidth
                            multiline
                            rows={6}
                            variant="outlined"
                            sx={{
                                "& .MuiInputLabel-asterisk": {
                                    color: "#236785",
                                },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                },
                            }}
                        />
                    </Box>
                    {/* File Upload */}
                    <Box>
                        <Typography variant="body1" fontWeight={500} gutterBottom>
                            Upload resume <Typography component="span" color="#236785">*</Typography>
                        </Typography>
                        <Card
                            sx={{
                                border: "1px solid #e4e7ec",
                                borderRadius: 3,
                                p: 3,
                                textAlign: "center",
                            }}
                        >
                            <CardContent>
                                <Image src="/resumeIcon.svg" alt="resume" width={24} height={24} />
                                <Stack spacing={0.3}>
                                    <Box sx={{ display: "flex", justifyContent: "center", gap: '5px' }}>
                                        <Button variant="text" sx={{ textTransform: "none", p: 0 }}>
                                            Click to upload Resume
                                        </Button>
                                        <Typography variant="body2" color="text.secondary"
                                            sx={{ alignSelf: 'center' }}>
                                            or drag and drop
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption" color="text.secondary">
                                        SVG, PNG, JPG or GIF (max. 800x400px)
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Resume Dropdown */}
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Choose from your resumes</InputLabel>
                        <Select
                            label="Choose from your resumes"
                            defaultValue="Business Analyst Resume"
                            startAdornment={
                                <InputAdornment position="start">
                                    <img src="fileResume.svg" alt="PDF" style={{ width: 20 }} />
                                </InputAdornment>
                            }
                        >
                            <MenuItem value="Business Analyst Resume">
                                Business Analyst Resume (200 KB)
                            </MenuItem>
                            <MenuItem value="Business Analyst Resume">
                                Business Analyst Resume (200 KB)
                            </MenuItem>
                            <MenuItem value="Business Analyst Resume">
                                Business Analyst Resume (200 KB)
                            </MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                {/* Navigation Actions */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                    <Button
                        variant="outlined"
                        sx={{ borderRadius: 2, textTransform: "none", width: 148, borderColor: '#D0D5DD', color: '#344054' }}
                    >
                        Save draft
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 2,
                            textTransform: "none",
                            width: 148,
                            bgcolor: "#2494b6",
                            "&:hover": { bgcolor: "#1c7a99" },
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Card>
        </ThemeProvider >

    );
};

export default Content;