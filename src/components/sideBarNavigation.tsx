"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import LogoHeader from "./logoHeader";
import { JustLogoHeader } from "./logoHeader";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton,
    Button,
    useTheme,
    Avatar,
    Typography,
    ThemeProvider,
    Collapse,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ExpandLess } from '@mui/icons-material';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';

interface NavItem {
    text: string;
    icon: React.ReactNode;
    icon1?: React.ReactNode;
    href?: string;
    subItems?: { text: string; href: string; icon?: React.ReactNode }[];
}

export const SidebarNavigation = ({
    session,
    isCollapsed,
    setIsCollapsed,
}: {
    session: Session | null;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const theme = useTheme();
    const [isSessionValid, setIsSessionValid] = useState(false);
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [image, setImage] = useState<string | undefined>('/Avatar.png');
    const currentUrl = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // const handleLogin = async () => {
    //     if (session) setIsSessionValid(true);
    //     setName(session?.user?.name as string);
    //     setEmail(session?.user?.email as string);
    //     setImage(session?.user?.image as string);
    // };

    // Check if the session is valid and set the state accordingly
    useEffect(() => {
        if (session) {
            setIsSessionValid(true);
            setName(session?.user?.name as string);
            setEmail(session?.user?.email as string);
            setImage(session?.user?.image || '/Avatar.png');
        }
    }, [session]);

    // Set the session to be invalid and remove all data when signing out
    const handleSignOut = async () => {
        setIsSessionValid(false);
        setName(null);
        setEmail(null);
        setImage('');
        await signOut({ redirectTo: '/' });
    };

    // State để theo dõi trạng thái slider (đóng/mở)
    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    const handleToggleDropdown = (text: string) => {
        setOpenDropdown((prev) => (prev === text ? null : text));
    };

    const publicItems: NavItem[] = [
        {
            text: 'Home',
            icon: <Image src='/homeIcon.svg' alt='home' width={24} height={24} />,
            href: "/home",
        },
        {
            text: 'Career Tools',
            icon: <Image src='/tool.svg' alt='career tool' width={24} height={24} />,
            icon1: <Image src='/arrowSlide.svg' alt='arrow' width={24} height={24} />,
            href: '/#',
            subItems: [
                {
                    text: 'Build your CV',
                    href: `${session?.user ? '/profile/cvs' : '/login'}`,
                },
                {
                    text: 'Industry News',
                    href: '/#',
                },
                {
                    text: 'Development',
                    href: '/#',
                },
            ],
        },
        {
            text: 'Open Jobs',
            icon: <Image src='/bagicon.svg' alt='home' width={24} height={24} />,
            href: "/jobs",
        },
        ...(session?.user
            ? [
                {
                    text: 'Profile',
                    icon: <Image src='/profile.svg' alt='profile' width={24} height={24} />,
                    icon1: <Image src='/arrowSlide.svg' alt='arrow' width={24} height={24} />,
                    href: '/#',
                    subItems: [
                        {
                            text: 'Saved Jobs',
                            href: '/profile/saved-jobs',
                        },
                        {
                            text: 'Manage Resumes',
                            href: '/profile/cvs',
                        },
                        {
                            text: 'Job Applications',
                            href: '/profile/applications',
                        },
                        {
                            text: 'Personal Info',
                            href: '/profile',
                        },
                    ],
                },
            ]
            : []),
        ...(session?.user?.role === 'admin'
            ? [
                {
                    text: 'Admin Panel',
                    icon: <Image src='/homeIcon.svg' alt='admin panel' width={24} height={24} />,
                    href: '/admin',
                },
            ]
            : []),
    ];

    const adminItems: NavItem[] = [
        {
            text: 'Dashboard',
            icon: <Image src='/homeIcon.svg' alt='home' width={24} height={24} />,
            href: '/admin',
        },
        {
            text: 'User Management',
            icon: <Image src='/homeIcon.svg' alt='user management' width={24} height={24} />,
            href: '/admin/users',
        },
        {
            text: 'Job Management',
            icon: <Image src='/bagicon.svg' alt='job management' width={24} height={24} />,
            href: '/admin/jobs',
        },
        {
            text: 'Website Settings',
            icon: <Image src='/settings.svg' alt='settings' width={24} height={24} />,
            href: '/admin/web-settings',
        },
        {
            text: 'Media',
            icon: <Image src='/homeIcon.svg' alt='media' width={24} height={24} />,
            href: '/admin/media',
        },
        {
            text: 'Home',
            icon: <Image src='/homeIcon.svg' alt='home' width={24} height={24} />,
            href: '/home',
        },
    ];

    const footerItems: NavItem[] = [
        {
            text: 'Contact Us',
            icon: <Image src='/support.svg' alt='support' width={24} height={24} />,
        },
        {
            text: 'Settings',
            icon: <Image src='/setting.svg' alt='setting' width={24} height={24} />,
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    flexShrink: 0,
                    borderRight: `1px solid ${theme.palette.divider}`,
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.paper,
                    width: isCollapsed ? '6%' : '18%',
                    transition: 'width 0.3s ease, top 0.3s ease, max-height 0.3s ease',
                    willChange: 'top, max-height, width',
                    '@media (max-width: 991px)': {
                        display: 'none',
                    },
                }}
            >
                {/* Top section (logo, search bar) */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: isCollapsed ? 'center' : 'space-between',
                        alignItems: 'center',
                        p: isCollapsed ? 2 : 0,
                        pt: 1,
                        pl: 1,
                        transition: 'padding 0.7s ease',
                        borderBottom: `1px solid ${theme.palette.divider}`
                    }}
                >
                    {isCollapsed ? <JustLogoHeader /> : <LogoHeader />}
                    {!isCollapsed && (
                        <IconButton
                            onClick={toggleSidebar}
                            sx={{
                                position: 'absolute',
                                left: '85%',
                                border: '1px solid #D0D5DD',
                                borderRadius: '50%',
                                p: 1,
                                minWidth: 40,
                                height: 40,
                                backgroundColor: 'white',
                                transition: 'opacity 0.3s ease',
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[100],
                                },
                            }}
                            aria-label='Toggle sidebar'
                        >
                            <Image src='/showbar.svg' alt='collapse' width={24} height={24} />
                        </IconButton>
                    )}
                    {isCollapsed && (
                        <IconButton
                            onClick={toggleSidebar}
                            sx={{
                                position: 'absolute',
                                left: '72%',
                                border: '1px solid #D0D5DD',
                                p: 1,
                                minWidth: 40,
                                height: 40,
                                backgroundColor: 'white',
                                transition: 'opacity 0.3s ease',
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[100],
                                },
                            }}
                            aria-label='Toggle sidebar'
                        >
                            <Image src='/showbar1.svg' alt='expand' width={24} height={24} />
                        </IconButton>
                    )}
                </Box>

                {/* Search bar */}
                {/*{!isCollapsed && (*/}
                {/*    <Box sx={{ px: 2, mt: 2 }}>*/}
                {/*        <Paper*/}
                {/*            component='form'*/}
                {/*            sx={{*/}
                {/*                p: '2px 6px',*/}
                {/*                display: 'flex',*/}
                {/*                alignItems: 'center',*/}
                {/*                borderRadius: 2,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search' />*/}
                {/*            <IconButton sx={{ bgcolor: '#2494B6', color: 'white', p: 0.7, m: 0.5 }}>*/}
                {/*                <Search />*/}
                {/*            </IconButton>*/}
                {/*        </Paper>*/}
                {/*    </Box>*/}
                {/*)}*/}
                {/*{isCollapsed && (*/}
                {/*    <Box sx={{ px: 2.2 }}>*/}
                {/*        <IconButton sx={{ bgcolor: '#2494B6', color: 'white', p: 1.5, m: 0.5 }}>*/}
                {/*            <Search />*/}
                {/*        </IconButton>*/}
                {/*    </Box>*/}
                {/*)}*/}

                {/* Navigation options */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 0.2,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#2494b6 #f1f1f1',
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
                    <List
                        sx={{
                            mt: isCollapsed ? 1 : 0,
                            flex: 1,
                            minHeight: 0,
                            overflowY: 'auto',

                        }}
                    >
                        {currentUrl.split('/')[1] !== 'admin' ? (
                            publicItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.icon1 && item.subItems ? (
                                        <>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    onClick={() => handleToggleDropdown(item.text)}
                                                    sx={{
                                                        borderRadius: 2,
                                                        my: 1,
                                                        mx: isCollapsed ? 0 : 1,
                                                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                                                        backgroundColor: openDropdown === item.text ? '#f2f4f7' : 'transparent', // Change background when dropdown is open
                                                        '&:hover': {
                                                            backgroundColor: '#f2f4f7', // Hover background color
                                                            color: '#2494b6', // Hover text color
                                                            '& .MuiListItemIcon-root': { color: '#2494b6' }, // Hover icon color
                                                            '& .MuiListItemText-primary': { color: '#2494b6' }, // Hover text color
                                                        },
                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            color: openDropdown === item.text ? '#2494b6' : '#344054', // Change icon color when dropdown is open
                                                            minWidth: isCollapsed ? 0 : 40,

                                                        }}
                                                    >
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    {!isCollapsed && (
                                                        <>
                                                            <ListItemText
                                                                primary={item.text}
                                                                sx={{
                                                                    color: openDropdown === item.text ? '#2494b6' : '#344054', // Change text color when dropdown is open
                                                                }}
                                                            />
                                                            <ListItemIcon
                                                                sx={{
                                                                    color: openDropdown === item.text ? '#2494b6' : '#344054', // Change icon color when dropdown is open
                                                                    minWidth: 0,
                                                                }}
                                                            >
                                                                {openDropdown === item.text ? (
                                                                    <ExpandLess sx={{ width: 24, height: 24 }} />
                                                                ) : (
                                                                    item.icon1
                                                                )}
                                                            </ListItemIcon>
                                                        </>
                                                    )}
                                                </ListItemButton>
                                            </ListItem>
                                            {!isCollapsed && (
                                                <Collapse in={openDropdown === item.text} timeout='auto' unmountOnExit>
                                                    <List sx={{
                                                        pl: 4,
                                                        pr: 1, display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '2px'
                                                    }}>
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <ListItem key={subIndex} disablePadding>
                                                                <ListItemButton
                                                                    component={Link}
                                                                    href={subItem.href}
                                                                    sx={{
                                                                        borderRadius: 2,
                                                                        padding: '8px 12px',
                                                                        color: '#344054',
                                                                        backgroundColor: 'transparent', // Default background for sub-items
                                                                        '&:hover': {
                                                                            backgroundColor: '#f2f4f7', // Hover background color
                                                                            color: '#2494b6', // Hover text color
                                                                            '& .MuiListItemText-primary': { color: '#2494b6' }, // Ensure text color on hover
                                                                        },
                                                                    }}
                                                                >
                                                                    <ListItemText
                                                                        primary={subItem.text}
                                                                        primaryTypographyProps={{
                                                                            fontSize: '16px',
                                                                            fontWeight: 500,
                                                                            lineHeight: '24px',
                                                                            color: 'inherit',
                                                                        }}
                                                                    />
                                                                </ListItemButton>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Collapse>
                                            )}
                                        </>
                                    ) : (
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                component={Link}
                                                href={item.href as string}
                                                sx={{
                                                    borderRadius: 2,
                                                    my: 1,
                                                    mx: isCollapsed ? 0 : 1,
                                                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                                                    backgroundColor: 'transparent', // Default background for sub-items
                                                    '&:hover': {
                                                        backgroundColor: '#f2f4f7', // Hover background color
                                                        color: '#2494b6', // Hover text color
                                                        '& .MuiListItemText-primary': { color: '#2494b6' }, // Ensure text color on hover
                                                    },
                                                }}
                                            >
                                                <ListItemIcon sx={{
                                                    color: '#344054',
                                                    minWidth: isCollapsed ? 0 : 40

                                                }}>
                                                    {item.icon}
                                                </ListItemIcon>
                                                {!isCollapsed && (
                                                    <>
                                                        <ListItemText primary={item.text} sx={{ color: '#344054' }} />
                                                        {item.icon1 && (
                                                            <ListItemIcon sx={{ color: '#344054', minWidth: 0 }}>
                                                                {item.icon1}
                                                            </ListItemIcon>
                                                        )}
                                                    </>
                                                )}
                                            </ListItemButton>
                                        </ListItem>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            adminItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.icon1 && item.subItems ? (
                                        <>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    onClick={() => handleToggleDropdown(item.text)}
                                                    sx={{
                                                        borderRadius: 2,
                                                        my: 1,
                                                        mx: isCollapsed ? 0 : 1,
                                                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                                                    }}
                                                >
                                                    <ListItemIcon sx={{ color: '#344054', minWidth: isCollapsed ? 0 : 40 }}>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    {!isCollapsed && (
                                                        <>
                                                            <ListItemText primary={item.text} sx={{ color: '#344054' }} />
                                                            <ListItemIcon sx={{ color: '#344054', minWidth: 0 }}>
                                                                {openDropdown === item.text ? (
                                                                    <ExpandLess sx={{ width: 24, height: 24 }} />
                                                                ) : (
                                                                    item.icon1
                                                                )}
                                                            </ListItemIcon>
                                                        </>
                                                    )}
                                                </ListItemButton>
                                            </ListItem>
                                            {!isCollapsed && (
                                                <Collapse in={openDropdown === item.text} timeout='auto' unmountOnExit>
                                                    <List sx={{ pl: 4, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <ListItem key={subIndex} disablePadding>
                                                                <ListItemButton
                                                                    component={Link}
                                                                    href={subItem.href}
                                                                    sx={{
                                                                        borderRadius: 2,
                                                                        padding: '8px 12px',
                                                                        color: '#344054',
                                                                        '&:hover': { backgroundColor: '#F5F5F5' },
                                                                    }}
                                                                >
                                                                    {subItem.icon && (
                                                                        <ListItemIcon sx={{ minWidth: '24px', color: '#344054' }}>
                                                                            {subItem.icon}
                                                                        </ListItemIcon>
                                                                    )}
                                                                    <ListItemText
                                                                        primary={subItem.text}
                                                                        primaryTypographyProps={{
                                                                            fontSize: '16px',
                                                                            fontWeight: 500,
                                                                            lineHeight: '24px',
                                                                        }}
                                                                    />
                                                                </ListItemButton>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Collapse>
                                            )}
                                        </>
                                    ) : (
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                component={Link}
                                                href={item.href as string}
                                                sx={{
                                                    borderRadius: 2,
                                                    my: 1,
                                                    mx: isCollapsed ? 0 : 1,
                                                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: '#344054', minWidth: isCollapsed ? 0 : 40 }}>
                                                    {item.icon}
                                                </ListItemIcon>
                                                {!isCollapsed && (
                                                    <>
                                                        <ListItemText primary={item.text} sx={{ color: '#344054' }} />
                                                        {item.icon1 && (
                                                            <ListItemIcon sx={{ color: '#344054', minWidth: 0 }}>
                                                                {item.icon1}
                                                            </ListItemIcon>
                                                        )}
                                                    </>
                                                )}
                                            </ListItemButton>
                                        </ListItem>
                                    )}
                                </React.Fragment>
                            ))
                        )}
                    </List>
                </Box>

                {/* Bottom section */}
                <Box sx={{ py: isCollapsed ? 1 : 1 }}>
                    <Box sx={{ mt: 0, flexGrow: 0 }}>
                        <List sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
                            {footerItems.map((item, index) => (
                                <ListItemButton
                                    key={index}
                                    sx={{
                                        borderRadius: 2,
                                        my: 1,
                                        mx: isCollapsed ? 0 : 1,
                                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                                    }}
                                >
                                    <ListItemIcon sx={{ color: '#344054', minWidth: isCollapsed ? 0 : 40 }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    {!isCollapsed && <ListItemText primary={item.text} sx={{ color: '#344054' }} />}
                                </ListItemButton>
                            ))}
                        </List>

                        {!isCollapsed ? (
                            !isSessionValid ? (
                                <Box sx={{ mt: 2, m: 2, pt: 2 }}>
                                    <Button
                                        variant='contained'
                                        fullWidth
                                        sx={{ mb: 1, bgcolor: '#2494B6' }}
                                        href='/register'
                                    >
                                        Sign up
                                    </Button>
                                    <Button href='/login' variant='outlined' fullWidth>
                                        Sign in
                                    </Button>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mx: 2,
                                        pt: 2,
                                        borderRadius: 1,
                                    }}
                                >
                                    {/* TODO: change the icon when they are not signed in */}
                                    <Avatar
                                        alt={`Profile picture of ${name}`}
                                        src={image}
                                        sx={{ width: 40, height: 40 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant='body2' color='#101828' sx={{ fontWeight: 600 }}>
                                            {name}
                                        </Typography>
                                        <Typography variant='body2' color='#475467' sx={{ fontWeight: 400 }}>
                                            {email}
                                        </Typography>
                                    </Box>
                                    <IconButton
                                        onClick={handleSignOut}
                                        sx={{ background: 'none', border: 'none', padding: 0 }}
                                    >
                                        <Image src='/exit.svg' alt='exit' width={24} height={24} />
                                    </IconButton>
                                </Box>
                            )
                        ) : (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Avatar
                                    alt={`Profile picture of ${name}`}
                                    src={image}
                                    sx={{ width: 40, height: 40 }}
                                />
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};