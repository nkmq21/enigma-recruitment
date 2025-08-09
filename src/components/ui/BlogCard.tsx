import { Box, Typography, Avatar, IconButton } from '@mui/material';
import Image from 'next/image';

const BlogCard = () => {

    const blogPosts = [
        { title: 'Behind the scenes at Enigma', category: 'Recruitment', supportTitle: 'A look at our company culture and what makes our team thrive.', author: 'Robert Fox', date: '19 Jan 2024' },
        { title: 'My journey from intern to team lead', category: 'Personal stories', supportTitle: 'A personal reflection on growth, mentorship, and leadership.', author: 'Jenny Wilson', date: '19 Jan 2024' },
        { title: 'New features for admin dashboard', category: 'System updates', supportTitle: 'Learn about the latest improvements for managing your recruitment content.', author: 'Eleanor Pena', date: '19 Jan 2024' },
    ];


    return (
        <Box sx={{
            display: 'flex', flexWrap: 'wrap', gap: 4, mt: 6,
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
        }}>
            {blogPosts.map((post, index) => (
                <Box key={index} sx={{
                    display: 'flex',
                    maxWidth: { xs: '100%', sm: '31%' },
                    flexDirection: 'column',
                    gap: 2,
                    textAlign: 'left',
                }}>
                    <Box component="img" src="/backGr.png" alt=""
                        sx={{
                            width: '100%',
                            height: 240,
                            borderRadius: 4
                        }} />
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
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mt: 3 }}>
                        <Avatar sx={{ width: 40, height: 40 }} src="Avatar.png" />
                        <Box>
                            <Typography variant="body2" color='#101828' fontWeight={600}>{post.author}</Typography>
                            <Typography variant="body2" color="#475467">{post.date}</Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default BlogCard;