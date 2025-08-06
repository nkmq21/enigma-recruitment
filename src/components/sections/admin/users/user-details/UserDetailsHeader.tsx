import React from 'react';
import {
    Box,
    Avatar,
    Typography,
    Button,
    IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { User } from "enigma/types/models";
import DeleteButton from './UserDetailsActionButtons';

const UserDetailsHeader = ({ user }: { user: User | null | undefined }) => {

    const handleDelete = (itemId: string | number) => {
        console.log(`Deleting item with ID: ${itemId}`);
        // Add your delete logic here (e.g., API call)
    };
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'left',
                color: '#101828',
            }}
        >
            {/* Banner Image */}
            <Box
                component="img"
                src="/bannerDetail.png"
                alt=""
                sx={{
                    alignSelf: 'stretch',
                    maxWidth: '100%',
                    height: '240px',
                    objectFit: 'cover',
                }}
            />
            {/* Container */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 32px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    marginTop: '-40px',
                }}
            >
                {/* Avatar and ApplyDialog */}
                <Box
                    sx={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '24px',
                    }}
                >
                    {/* Avatar with Verification Tick */}
                    <Box
                        sx={{
                            width: '160px',
                            height: '160px',
                            position: 'relative',
                            borderRadius: '50%',
                        }}
                    >
                        <Avatar src={user?.image ? user.image : '/Avatar.png'}
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'top',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                right: '15px',
                                bottom: '15px',
                                overflow: 'hidden',
                            }}
                        >
                            <Image src={'/tickBlue.svg'} alt='' width={32} height={32} />
                        </Box>
                    </Box>
                    {/* ApplyDialog */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            padding: '64px 0 0',
                        }}
                    >
                        {/* Heading */}
                        <Box
                            sx={{
                                alignSelf: 'stretch',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '16px',
                            }}
                        >
                            {/* Name and Handle */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: '4px',
                                    minWidth: '240px',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        lineHeight: '38px',
                                        fontWeight: 600,
                                        color: '#101828',
                                    }}
                                >
                                    {user?.name ? user.name : "None"}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: '#475467',
                                    }}
                                >
                                    {user?.name ? user.name.split(" ")[0] : "None"}
                                </Typography>
                            </Box>
                            {/* Actions */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: '12px',
                                    color: '#344054',
                                }}
                            >
                                <IconButton
                                    sx={{
                                        boxShadow: '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        borderRadius: '8px',
                                        border: '1px solid #d0d5dd',
                                        padding: '10px',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <MoreHorizIcon />
                                </IconButton>
                                <Button
                                    sx={{
                                        boxShadow: '0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)',
                                        borderRadius: '8px',
                                        border: '1px solid #d0d5dd',
                                        backgroundColor: '#fff',
                                        color: '#344054',
                                        padding: '10px 14px',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                    }}
                                >
                                    Edit
                                </Button>
                                <DeleteButton itemId={1} onDelete={handleDelete}
                                    buttonText="Delete"
                                    dialogMessage="Do you want to delete this account permanently?"
                                />

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UserDetailsHeader;