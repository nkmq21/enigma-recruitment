import {Box, Container, Typography} from '@mui/material';
import OurTeam from 'enigma/components/sections/landing/OurTeam';
import BlogSection from 'enigma/components/sections/landing/Blogs';
import OurSelectionProcess from 'enigma/components/sections/landing/OurSelectionProcess';
import OurServices from 'enigma/components/sections/landing/OurServices';
import Testimonials from 'enigma/components/sections/landing/Testimonials';
import {BadgeGroup} from "enigma/components/ui/BadgeGroup";
import {CustomBadge} from "enigma/components/ui/CustomBadge";
import SpecializedFunctions from "enigma/components/sections/landing/SpecializedFunctions";

export default function MainContent() {
    return (
        <Box sx={{width: '100%'}}>
            <Container maxWidth={false}
                       sx={{
                           justifyContent: 'center',
                           display: 'inline-flex',
                           maxWidth: '100%',
                           pb: 2,
                       }}>
                <BadgeGroup>
                    <CustomBadge label="Just launched"/>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="body2" color="textPrimary" sx={{fontWeight: 500}}>
                            Welcome to Enigma Recruitment!
                        </Typography>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/11ac935d905e3e50d23ff902e18c2034defa7a84?placeholderIfAbsent=true"
                            alt="" style={{width: 16, height: 16}}/>
                    </Box>
                </BadgeGroup>
            </Container>

            {/* Big Heading Text Section */}
            <Box sx={{py: 1, textAlign: 'center', color: '#217799', zIndex: 1}}>
                <Container maxWidth="md">
                    <Typography variant='h3' color="#101828" sx={{
                        mt: 1.5,
                        fontSize: {xs: "28px", md: "48px"},
                        lineHeight: {xs: "32px", md: "60px"},
                    }}>
                        Expert Recruitment for a Lasting Impact
                    </Typography>
                    <Typography
                        variant='body1'
                        color="#475467" sx={{
                        mt: 3, maxWidth: 768, mx: 'auto',
                        fontSize: {xs: "16px", md: "20px"},
                        lineHeight: {xs: "24px", md: "30px"},
                    }}>
                        Let&#39;s face it - all recruitment agencies are looking at the same candidates. It&#39;s our
                        service that separates us from the rest of the crowd.
                    </Typography>
                </Container>
            </Box>
            {/* Image Section */}
            <Container maxWidth="lg" sx={{textAlign: 'center', mt: -4}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: 1024,
                    mx: 'auto'
                }}>
                    <Box component="img" src="landing_page_guy_2.png" alt="Landing page guy" sx={{
                        width: {xs: '100%', mdx: '75%'},
                        height: {xs: '100%', mdx: '75%'},
                    }}/>
                </Box>
            </Container>
            {/* Section - Our Services */}
            <OurServices/>
            {/* Section - Functions We Specialize In */}
            <SpecializedFunctions/>
            {/* Section - Our Selection Process */}
            <OurSelectionProcess/>
            {/* Section - Meet Our Team */}
            <OurTeam/>
            {/* Section -Testimonials */}
            <Testimonials/>
            {/* Blog Section */}
            <BlogSection/>
        </Box>
    );
};