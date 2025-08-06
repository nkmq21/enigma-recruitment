import * as React from "react";
import {
    Box,
    Typography,
    Card,
    Divider,
    IconButton,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SectionTitle from "enigma/components/ui/SectionTitle";
import Image from "next/image";
import UsersTable from "./UsersTable";
import {UserProps} from "enigma/services/userServices";

interface DashboardUserProps {
    users: UserProps[];       // initial data
    totalUsers: number;       // initial total
    currentPage: number;      // initial page
    pageSize: number;
}

export const MainContent: React.FC<DashboardUserProps> = ({
                                users,
                                totalUsers,
                                currentPage,
                                pageSize
                            }) => {

    return (
        <Box component="main" sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 3 },
            ml: 0.5,
            '@media (max-width: 991px)': {
                maxWidth: '100%',
            },
        }}>
            <Box sx={{ display: { lg: 'none', sm: 'block' } }}>
                <BigHeaderLogo />
                <Divider sx={{ mt: 1, mb: 3, width: '100%' }} />
            </Box>

            <Typography sx={{ fontSize: '30px', lineHeight: '38px', mb: 5 }} fontWeight={600} color="#101828">
                User Management
            </Typography>

            {/* User metrics */}
            <Typography sx={{ fontSize: '20px', lineHeight: '30px', mb: 4 }} fontWeight={600} gutterBottom color="#101828">
                Overview of User Metrics
            </Typography>
            <Box sx={{
                mb: 5, display: 'flex', gap: 2,
                width: '100%',
                '@media (max-width: 991px)': {
                    width: '100%',
                    flexDirection: 'row',
                },
            }}>
                {/* Card 1 */}
                <Card
                    sx={{
                        width: '100%',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        border: '1px solid #e4e7ec',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '24px',
                        position: 'relative',
                        gap: '24px',
                    }}
                >
                    <Box
                        sx={{
                            boxShadow:
                                '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                            borderRadius: '10px',
                            backgroundColor: '#d6f1f7',
                            border: '1px solid #e4e7ec',
                            display: 'flex',
                            padding: '12px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '24px',
                                position: 'relative',
                                height: '24px',
                            }}
                        >
                            <Box
                                sx={{
                                    lineHeight: '24px',
                                    color: '#40b0d0',
                                }}
                            >
                                <Image src="/user1.svg" alt="Total user" width={24} height={24} />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20px',
                            right: '20.3px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <IconButton>
                            <MoreVertIcon sx={{ width: '20px', height: '20px' }} />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                alignSelf: 'stretch',
                                fontWeight: 500,
                                color: '#475467',
                            }}
                        >
                            Total Users
                        </Typography>
                        <Box
                            sx={{
                                alignSelf: 'stretch',
                                display: 'flex',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    flex: 1,
                                    color: '#101828',
                                }}
                            >
                                2,420
                            </Typography>
                            <Box
                                sx={{
                                    padding: '0px 0px 8px',
                                    color: '#344054',
                                }}
                            >
                                <Box
                                    sx={{
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        borderRadius: '6px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #d0d5dd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 8px 2px 6px',
                                        gap: '4px',
                                    }}
                                >
                                    <ArrowUpwardIcon sx={{ width: '12px', height: '12px', color: '#079455', fontWeight: 'bold' }} />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 500,
                                            color: '#344054',
                                        }}
                                    >
                                        20%
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Card>

                {/* Card 2: Active Users */}
                <Card
                    sx={{
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        border: '1px solid #e4e7ec',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '24px',
                        position: 'relative',
                        gap: '24px',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20px',
                            right: '20.3px',
                            display: 'flex',
                        }}
                    >
                        <IconButton>
                            <MoreVertIcon sx={{ width: '20px', height: '20px' }} />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            boxShadow:
                                '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                            borderRadius: '10px',
                            backgroundColor: '#d6f1f7',
                            border: '1px solid #e4e7ec',
                            padding: '12px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '24px',
                                position: 'relative',
                                height: '24px',
                            }}
                        >
                            <Box
                                sx={{
                                    lineHeight: '24px',
                                    color: '#40b0d0',
                                }}
                            >
                                <Image src="/userActive.svg" alt="Total user" width={24} height={24} />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 500,
                                color: '#475467',
                            }}
                        >
                            Active Users
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                gap: '16px',
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    flex: 1,
                                    color: '#101828',
                                }}
                            >
                                1,292
                            </Typography>
                            <Box
                                sx={{
                                    padding: '0px 0px 8px',
                                    color: '#344054',
                                }}
                            >
                                <Box
                                    sx={{
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        borderRadius: '6px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #d0d5dd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 8px 2px 6px',
                                        gap: '4px',
                                    }}
                                >
                                    <ArrowUpwardIcon sx={{ width: '12px', height: '12px', color: '#079455', fontWeight: 'bold' }} />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 500,
                                            color: '#344054',
                                        }}
                                    >
                                        20%
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Card>

                {/* Card 3: Verified Users */}
                <Card
                    sx={{
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '12px',
                        backgroundColor: '#fff',
                        border: '1px solid #e4e7ec',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '24px',
                        position: 'relative',
                        gap: '24px',
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20px',
                            right: '20.3px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <IconButton>
                            <MoreVertIcon sx={{ width: '20px', height: '20px' }} />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            boxShadow:
                                '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                            borderRadius: '10px',
                            backgroundColor: '#d6f1f7',
                            border: '1px solid #e4e7ec',
                            overflow: 'hidden',
                            padding: '12px',
                        }}
                    >
                        <Box                    >
                            <Box
                                sx={{
                                    height: '24px',
                                    color: '#40b0d0',
                                }}
                            >
                                <Image src="/userVerified.svg" alt="Total user" width={24} height={24} />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                alignSelf: 'stretch',
                                color: '#475467',
                            }}
                        >
                            Verified Users
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                gap: '16px',
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    flex: 1,
                                    letterSpacing: '-0.02em',
                                    color: '#101828',
                                }}
                            >
                                317
                            </Typography>
                            <Box
                                sx={{
                                    padding: '0px 0px 8px',
                                    color: '#344054',
                                }}
                            >
                                <Box
                                    sx={{
                                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        borderRadius: '6px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #d0d5dd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px 8px 2px 6px',
                                        gap: '4px',
                                    }}
                                >
                                    <ArrowUpwardIcon sx={{ width: '12px', height: '12px', color: '#079455', fontWeight: 'bold' }} />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 500,
                                            color: '#344054',
                                        }}
                                    >
                                        20%
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Card>
            </Box>
            {/* List of all users */}
            <SectionTitle title="All Users" shopBage showOptions showOptions1 />
            <UsersTable users={users} totalUsers={totalUsers} currentPage={currentPage} pageSize={pageSize}/>
        </Box >
    );
};

