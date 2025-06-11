"use client";
import * as React from "react";
import {useState, useEffect} from "react";
import LogoHeader from "./logoHeader";
import {JustLogoHeader} from "./logoHeader";
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    InputBase,
    Paper,
    Button,
    useTheme,
    Avatar,
    Typography,
} from "@mui/material";
import Image from "next/image";
import {Search} from "@mui/icons-material";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";
import {usePathname} from "next/navigation";

export const SidebarNavigation = ({session, isCollapsed, setIsCollapsed}: {
    session: Session | null,
    isCollapsed: boolean,
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const theme = useTheme();
    const [isSessionValid, setIsSessionValid] = useState(false); // State to track if a session is valid
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [image, setImage] = useState<string | undefined>("/Avatar.png");
    const currentUrl = usePathname();

    // Check if the session is valid and set the state accordingly
    useEffect(() => {
        if (session) {
            setIsSessionValid(true);
            setName(session?.user?.name as string);
            setEmail(session?.user?.email as string);
            if (session?.user?.image) {
                setImage(session?.user?.image as string)
            } else {
                setImage("/Avatar.png");
            }
        }
    }, [session]);

    // Set the session to be invalid and remove all data when signing out
    const handleSignOut = async () => {
        setIsSessionValid(false);
        setName(null);
        setEmail(null);
        setImage("");
        await signOut({redirectTo: "/"});
    };

    // const handleLogin = async () => {
    //     if (session) setIsSessionValid(true);
    //     setName(session?.user?.name as string);
    //     setEmail(session?.user?.email as string);
    //     setImage(session?.user?.image as string);
    // };

    // State để theo dõi trạng thái slider (đóng/mở)
    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev); // Toggle collapsed state
    };

    const publicItems = [
        {text: "Home", icon: <Image src="/homeIcon.svg" alt="home" width={24} height={24}/>, href: "/home"},
        {text: "All Job Applications", icon: <Image src="/bagicon.svg" alt="saved job" width={24} height={24}/>, href: "/profile/job-applications"},
        {
            text: "Career Tool",
            icon: <Image src="/tool.svg" alt="career tool" width={24} height={24}/>,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24}/>,
        },
        {
            text: "Profile",
            icon: <Image src="/profile.svg" alt="profile" width={24} height={24}/>,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24}/>,
            href: "/profile"
        },
        ...(session?.user?.role === "admin"
            ? [{text: "Admin Panel", icon: <Image src="/homeIcon.svg" alt="admin panel" width={24} height={24}/>, href: "/admin"}]
            : [])
    ];

    const adminItems = [
        { text: "Dashboard", icon: <Image src="/homeIcon.svg" alt="home" width={24} height={24}/>, href: "/admin" },
        {
            text: "User Management",
            icon: <Image src="/homeIcon.svg" alt="user managelemt" width={24} height={24}/>,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24}/>,
            href: "/admin/users"
        },
        {
            text: "Job Management",
            icon: <Image src="/bagicon.svg" alt="job management" width={24} height={24}/>,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24}/>,
            href: "/admin/jobs"
        },
        {
            text: "Job Applications Management",
            icon: <Image src="/bagicon.svg" alt="job management" width={24} height={24}/>,
            icon1: <Image src="/arrowSlide.svg" alt="arrow" width={24} height={24}/>,
            href: "/admin/job-applications"
        },
        {
            text: "Website Settings",
            icon: <Image src="/settings.svg" alt="settings" width={24} height={24}/>,
            href: "/admin/web-settings"
        },
        { text: "Media", icon: <Image src="/homeIcon.svg" alt="home" width={24} height={24}/>, href: "/admin/media" },
        { text: "Home", icon: <Image src="/homeIcon.svg" alt="home" width={24} height={24}/>, href: "/home" }
    ]

    const footerItems = [
        {text: "About us", icon: <Image src="/infor.svg" alt="about us" width={24} height={24}/>},
        {text: "Support", icon: <Image src="/support.svg" alt="support" width={24} height={24}/>},
        {text: "Setting", icon: <Image src="/setting.svg" alt="setting" width={24} height={24}/>},
    ];

    return (
        <Box
            sx={{
                position: 'fixed', // Fixes the sidebar to the viewport
                top: 0,
                left: 0,
                height: '100vh',
                zIndex: 1200,
                flexShrink: 0,
                borderRight: `1px solid ${theme.palette.divider}`,
                display: {xs: "none", sm: "flex"},
                flexDirection: "column",
                backgroundColor: theme.palette.background.paper,
                width: isCollapsed ? '6%' : '19%', // Narrow width when collapsed
                transition: "width 0.3s ease, top 0.3s ease, max-height 0.3s ease",
                willChange: "top, max-height, width",
                '@media (max-width: 991px)': {
                    display: 'none'
                },
            }}
        >
            {/* Top section (logo, search bar) */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: isCollapsed ? "center" : "space-between",
                    alignItems: "center",
                    p: isCollapsed ? 2 : 0,
                    transition: "padding 0.7s ease",
                }}
            >
                {isCollapsed ? <JustLogoHeader/> : <LogoHeader/>}
                {!isCollapsed && (
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            position: "absolute",
                            left: "85%",
                            border: "1px solid #D0D5DD",
                            borderRadius: "50%",
                            p: 1,
                            minWidth: 40,
                            height: 40,
                            backgroundColor: "white",
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                        aria-label="Toggle sidebar"
                    >
                        <Image src="/showbar.svg" alt="collapse" width={24} height={24}/>
                    </IconButton>
                )}
                {isCollapsed && (
                    <IconButton
                        onClick={toggleSidebar}
                        sx={{
                            position: "absolute",
                            left: "72%",
                            border: "1px solid #D0D5DD",
                            p: 1,
                            minWidth: 40,
                            height: 40,
                            backgroundColor: "white",
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                        aria-label="Toggle sidebar"
                    >
                        <Image src="/showbar1.svg" alt="expand" width={24} height={24}/>
                    </IconButton>
                )}
            </Box>

            {/* Search bar */}
            {!isCollapsed && (
                <Box sx={{px: 2, mt: 2}}>
                    <Paper
                        component="form"
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 2,
                        }}
                    >
                        <InputBase sx={{ml: 1, flex: 1}} placeholder="Search"/>
                        <IconButton sx={{bgcolor: "#2494B6", color: "white", p: 0.7, m: 0.5}}>
                            <Search/>
                        </IconButton>
                    </Paper>
                </Box>
            )}
            {isCollapsed && (
                <Box sx={{px: 2}}>
                    <IconButton sx={{bgcolor: "#2494B6", color: "white", p: 1.5, m: 0.5}}>
                        <Search/>
                    </IconButton>
                </Box>
            )}
            {/* Navigation options */}
            <Box sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                borderBottom: `1px solid ${theme.palette.divider}`
            }}>
                <List sx={{
                    mt: isCollapsed ? 1 : 2,
                    flex: 1,
                    minHeight: 0,
                    overflowY: 'auto',
                    pr: 1
                }}>
                    {currentUrl.split('/')[0] !== 'admin' ? (
                        publicItems.map((item, index) => (
                            <ListItemButton
                                key={index}
                                sx={{
                                    borderRadius: 2,
                                    my: 1,
                                    mx: isCollapsed ? 0 : 1,
                                    justifyContent: isCollapsed ? "center" : "flex-start",
                                }}
                                href={item.href as string}
                            >
                                <ListItemIcon sx={{color: "#344054", minWidth: isCollapsed ? 0 : 40}}>
                                    {item.icon}
                                </ListItemIcon>
                                {!isCollapsed && (
                                    <>
                                        <ListItemText primary={item.text} sx={{color: "#344054"}}/>
                                        <ListItemIcon sx={{color: "#344054", minWidth: 0}}>{item.icon1}</ListItemIcon>
                                    </>
                                )}
                            </ListItemButton>
                        ))
                    ) : (
                        adminItems.map((item, index) => (
                            <ListItemButton
                                key={index}
                                sx={{
                                    borderRadius: 2,
                                    my: 1,
                                    mx: isCollapsed ? 0 : 1,
                                    justifyContent: isCollapsed ? "center" : "flex-start",
                                }}
                                href={item.href as string}
                            >
                                <ListItemIcon sx={{color: "#344054", minWidth: isCollapsed ? 0 : 40}}>
                                    {item.icon}
                                </ListItemIcon>
                                {!isCollapsed && (
                                    <>
                                        <ListItemText primary={item.text} sx={{color: "#344054"}}/>
                                        <ListItemIcon sx={{color: "#344054", minWidth: 0}}>{item.icon1}</ListItemIcon>
                                    </>
                                )}
                            </ListItemButton>
                        ))
                    )}
                </List>
            </Box>
            {/* Bottom section */}
            <Box sx={{
                py: isCollapsed ? 1 : 2
            }}>
                <Box sx={{mt: isCollapsed ? 7 : 0, flexGrow: 0}}>
                    <List sx={{
                        borderBottom: `1px solid ${theme.palette.divider}`
                    }}>
                        {footerItems.map((item, index) => (
                            <ListItemButton
                                key={index}
                                sx={{
                                    borderRadius: 2,
                                    my: 1,
                                    mx: isCollapsed ? 0 : 1,
                                    justifyContent: isCollapsed ? "center" : "flex-start",
                                }}
                            >
                                <ListItemIcon
                                    sx={{color: "#344054", minWidth: isCollapsed ? 0 : 40,}}>{item.icon}</ListItemIcon>
                                {!isCollapsed && (
                                    <ListItemText primary={item.text} sx={{color: "#344054"}}/>
                                )}
                            </ListItemButton>
                        ))}
                    </List>

                    {/*{!isCollapsed && <Divider sx={{m: 3}}/>}*/}

                    {!isCollapsed ? (
                        !isSessionValid ? (
                            <Box sx={{mt: 2, m: 2, pt: 2}}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{mb: 1, bgcolor: "#2494B6"}}
                                    href="/register"
                                >
                                    Sign up
                                </Button>
                                <Button href="/login" variant="outlined" fullWidth>
                                    Sign in
                                </Button>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mx: 2,
                                    pt: 2,
                                    borderRadius: 1,
                                }}
                            >
                                <Avatar alt={`Profile picture of ${name}`} src={image} sx={{width: 40, height: 40}}/>
                                <Box sx={{flexGrow: 1}}>
                                    <Typography variant="subtitle1" color="#101828" sx={{fontWeight: 600}}>
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="#475467">
                                        {email}
                                    </Typography>
                                </Box>
                                <IconButton type="submit" onClick={handleSignOut}
                                            style={{background: "none", border: "none", padding: 0}}>
                                    <Image src="/exit.svg" alt="exit" width={24} height={24}/>
                                </IconButton>
                            </Box>
                        )
                    ) : (
                        <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
                            <Avatar alt={`Profile picture of ${name}`} src={image} sx={{width: 40, height: 40}}/>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};