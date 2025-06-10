import * as React from "react";
import { useState } from "react";
import LogoHeader from "../logoHeader";
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    InputBase,
    Paper,
    Divider,
    Button,
    useTheme,
    Avatar,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { Search } from "@mui/icons-material";

export const SidebarNavigation = () => {
    const theme = useTheme();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsed mode

    const handleSignUp = () => {
        setIsSignedUp(true);
    };

    const handleSignOut = () => {
        setIsSignedUp(false);
    };

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev); // Toggle collapsed state
    };

    const menuItems = [
        { text: "Home", icon: <Image src="/homeIcon.svg" alt="home" width={24} height={24} /> },
        { text: "Saved Job", icon: <Image src="/bagicon.svg" alt="saved job" width={24} height={24} /> },
        { text: "Resume", icon: <Image src="/mail.svg" alt="resume" width={24} height={24} /> },
        {
            text: "Career Tool",
            icon: <Image src="/tool.svg" alt="career tool" width={24} height={24} />,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
        {
            text: "Development",
            icon: <Image src="/development.svg" alt="development" width={24} height={24} />,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
        {
            text: "Profile",
            icon: <Image src="/profile.svg" alt="profile" width={24} height={24} />,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24} />,
        },
    ];

    const footerItems = [
        { text: "About us", icon: <Image src="/infor.svg" alt="about us" width={24} height={24} /> },
        { text: "Support", icon: <Image src="/support.svg" alt="support" width={24} height={24} /> },
        { text: "Setting", icon: <Image src="/setting.svg" alt="setting" width={24} height={24} /> },
    ];

    return (
        <Box
            sx={{
                flexShrink: 0,
                borderRight: `1px solid ${theme.palette.divider}`,
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                backgroundColor: theme.palette.background.paper,
                width: isCollapsed ? '6%' : 'auto', // Narrow width when collapsed
                transition: "width 0.3s ease", // Smooth width transition
                overflow: "hidden", // Prevent horizontal scroll
                '@media (max-width: 991px)': {
                    display: 'none'
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: isCollapsed ? "center" : "space-between",
                    alignItems: "center",
                    p: isCollapsed ? 2 : 0,
                }}
            >
                <LogoHeader />
                {!isCollapsed && (
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            position: "absolute",
                            left: "17.5%",
                            border: "1px solid #D0D5DD",
                            borderRadius: "50%",
                            p: 1,
                            minWidth: 40,
                            height: 40,
                            backgroundColor: "white",
                            "&:hover": {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                        aria-label="Toggle sidebar"
                    >
                        <Image src="/showbar.svg" alt="collapse" width={24} height={24} />
                    </IconButton>
                )}
                {isCollapsed && (
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            p: 1,
                            minWidth: 40,
                            height: 40,
                            backgroundColor: "white",
                            "&:hover": {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                        aria-label="Toggle sidebar"
                    >
                        <Image src="/expandbar.svg" alt="expand" width={24} height={24} />
                    </IconButton>
                )}
            </Box>

            {!isCollapsed && (
                <Box sx={{ px: 2, mt: 2 }}>
                    <Paper
                        component="form"
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 2,
                        }}
                    >
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                        <IconButton sx={{ bgcolor: "#2494B6", color: "white", p: 0.7, m: 0.5 }}>
                            <Search />
                        </IconButton>
                    </Paper>
                </Box>
            )}
            {isCollapsed && (
                <Box sx={{ px: 2 }}>
                    <IconButton sx={{ bgcolor: "#2494B6", color: "white", p: 1.5, m: 0.5 }}>
                        <Search />
                    </IconButton>
                </Box>
            )}

            <List sx={{ mt: isCollapsed ? 1 : 2 }}>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            borderRadius: 2,
                            my: 1,
                            mx: isCollapsed ? 0 : 1,
                            justifyContent: isCollapsed ? "center" : "flex-start",
                        }}
                    >
                        <ListItemIcon sx={{ color: "#344054", minWidth: isCollapsed ? 0 : 40 }}>
                            {item.icon}
                        </ListItemIcon>
                        {!isCollapsed && (
                            <>
                                <ListItemText primary={item.text} sx={{ color: "#344054" }} />
                                <ListItemIcon sx={{ color: "#344054", minWidth: 0 }}>{item.icon1}</ListItemIcon>
                            </>
                        )}
                    </ListItemButton>
                ))}
            </List>

            <Box sx={{ mt: isCollapsed ? 4 : 7, flexGrow: 2 }}>
                {!isCollapsed && (
                    <List>
                        {footerItems.map((item, index) => (
                            <ListItemButton
                                key={index}
                                sx={{
                                    borderRadius: 1,
                                    my: 1,
                                    mx: 1,
                                }}
                            >
                                <ListItemIcon sx={{ color: "#344054" }}>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} sx={{ color: "#344054" }} />
                            </ListItemButton>
                        ))}
                    </List>
                )}

                {!isCollapsed && <Divider sx={{ m: 3 }} />}

                {!isCollapsed ? (
                    !isSignedUp ? (
                        <Box sx={{ mt: 2, m: 2 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ mb: 1, bgcolor: "#2494B6" }}
                                onClick={handleSignUp}
                                href="/register"
                            >
                                Sign up
                            </Button>
                            <Button variant="outlined" fullWidth href="/login">
                                Sign in
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                m: 2,
                                borderRadius: 1,
                            }}
                        >
                            <Avatar alt="Olivia Rhye" src="/Avatar.png" sx={{ width: 40, height: 40 }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle1" color="#101828" sx={{ fontWeight: 600 }}>
                                    Olivia Rhye
                                </Typography>
                                <Typography variant="body2" color="#475467">
                                    olivia@untitledui.com
                                </Typography>
                            </Box>
                            <IconButton size="small" sx={{ color: "#4B5E7D" }} onClick={handleSignOut}>
                                <Image src="/exit.svg" alt="exit" width={24} height={24} />
                            </IconButton>
                        </Box>
                    )
                ) : (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        <Avatar alt="Olivia Rhye" src="/Avatar.png" sx={{ width: 40, height: 40 }} />
                    </Box>
                )}
            </Box>
        </Box>
    );
};