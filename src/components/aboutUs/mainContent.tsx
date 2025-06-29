import { Box, Container, Typography } from '@mui/material';
import Header from './header';
import TeamSection from './section';
import BlogSection from './blogSection';
import FeaturesSection from '../landing/featureSection';
import SelectionProcess from './selectionProcess';
import Features from './features';
import TestimonialSection from '../landing/testimonialSection';
import {BadgeGroup, CustomBadge} from "enigma/components/landing/landingContent";

const Section = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth={false}
                sx={{
                    justifyContent: 'center',
                    display: 'inline-flex',
                    maxWidth: '100%',
                    pb: 2,
                }} >
                <BadgeGroup>
                    <CustomBadge label="Just launched" />
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="body2" color="textPrimary" sx={{ fontWeight: 500 }}>
                            Track all your job applications
                        </Typography>
                        <img src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/11ac935d905e3e50d23ff902e18c2034defa7a84?placeholderIfAbsent=true" alt="" style={{ width: 16, height: 16 }} />
                    </Box>
                </BadgeGroup>
            </Container>

            {/* Header Section */}
            <Header />
            {/* Image Section */}
            <Container maxWidth="lg" sx={{ textAlign: 'center', my: 4 }}>
                <Box component="img" src="Saly-31.png" alt="" sx={{ width: 510, height: 389 }} />
            </Container>
            <FeaturesSection />
            {/* Team Section */}
            <TeamSection />
            {/* Testimonial Section */}
            <TestimonialSection />

            {/* Features Section */}
            <Features />
            {/* FAQ Section */}
            <SelectionProcess />

            {/* Blog Section */}
            <BlogSection />

        </Box>
    );
};

export default Section;