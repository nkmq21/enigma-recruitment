import { Box, Container, Typography, Avatar, Button, IconButton } from '@mui/material';
import Image from 'next/image';

const BlogSection = () => {

    const blogPosts = [
        { title: 'Behind the scenes at Enigma', category: 'Recruitment', supportTitle: 'A look at our company culture and what makes our team thrive.', author: 'Robert Fox', date: '19 Jan 2024' },
        { title: 'My journey from intern to team lead', category: 'Personal stories', supportTitle: 'A personal reflection on growth, mentorship, and leadership.', author: 'Jenny Wilson', date: '19 Jan 2024' },
        { title: 'New features for admin dashboard', category: 'System updates', supportTitle: 'Learn about the latest improvements for managing your recruitment content.', author: 'Eleanor Pena', date: '19 Jan 2024' },
    ];


    return (
        <Box sx={{ py: 12, bgcolor: '#fff', zIndex: 6, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography variant="body1" fontWeight={600} color="#2494b6">Latest Insights</Typography>
                <Typography variant="h2" letterSpacing="-0.02em" fontWeight={600} color="#101828" sx={{ mt: 1 }}>
                    Untitled blog
                </Typography>
                <Typography fontSize="20px" lineHeight="30px" color="#475467" sx={{ mt: 2 }}>
                    Interviews, tips, guides, industry best practices, and news.h
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 6 }}>
                    {blogPosts.map((post, index) => (
                        <Box key={index} sx={{
                            flex: '1 1 320px',
                            maxWidth: 344,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            textAlign: 'left',
                        }}>
                            <Box component="img" src="/backGr.png" alt="" sx={{ width: '100%', height: 240, borderRadius: 4 }} />
                            <Typography variant="body2" fontWeight={600} color='#217799'>{post.category}</Typography>
                            <Box sx={{ display: 'flex', gap: 2, color: '#101828' }}>
                                <Typography fontSize="24px" lineHeight="32px" fontWeight={600}
                                    sx={{
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        maxWidth: '100%',
                                    }}>{post.title}</Typography>
                                <IconButton size="small" aria-label="" >
                                    <Image src="/arrowsSlant.svg" alt="" width={14} height={14} />
                                </IconButton>
                            </Box>
                            <Typography variant="body1" color="#475467" sx={{
                                display: '-webkit-box',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'normal',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>
                                {post.supportTitle}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                <Avatar sx={{ width: 40, height: 40 }} src="Avatar.png" />
                                <Box>
                                    <Typography variant="body2" color='#101828' fontWeight={600}>{post.author}</Typography>
                                    <Typography variant="body2" color="#475467">{post.date}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ mt: 7, textAlign: 'center' }}>
                    <Button variant="contained" color="primary">View all posts</Button>
                </Box>
            </Container>
        </ Box >
    );
};

export default BlogSection;