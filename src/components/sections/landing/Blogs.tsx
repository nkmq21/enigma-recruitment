import { Box, Container, Typography, Button } from '@mui/material';
import BlogCard from 'enigma/ui/blogCard';

const Blogs = () => {
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

                <BlogCard />

                <Box sx={{ mt: 7, textAlign: 'center' }}>
                    <Button variant="contained" color="primary">View all posts</Button>
                </Box>
            </Container>
        </ Box >
    );
};

export default Blogs;