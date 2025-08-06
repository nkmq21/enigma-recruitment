import * as React from 'react';
import {useState} from 'react';
import {Box, Typography, Divider, Container} from '@mui/material';
import SectionTitle from "enigma/components/ui/SectionTitle";
import CTA from "enigma/components/common/CTA";
import BlogCard from "enigma/ui/blogCard";
import Pagination from "enigma/components/ui/Pagination";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import SearchBar from "enigma/components/ui/SearchBar";
import {SearchHistoryChip} from "enigma/components/sections/admin/media/SearchHistoryChip";
import HorizontalTabs from "enigma/components/sections/admin/media/HorizontalTabs";

// Sample data (replace with your actual data source)
const tableData = Array.from({length: 50}, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
})); // Mock data for pagination

export const MainContent = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: {xs: 0.5, sm: 3},
                ml: {xs: 0, sm: 0.5},
                '@media (max-width: 991px)': {
                    maxWidth: '100%',
                },
            }}
        >
            <Box sx={{display: {lg: 'none', sm: 'block'}}}>
                <BigHeaderLogo/>
                <Divider sx={{mt: 1, mb: 1, width: '100%'}}/>
            </Box>

            <Typography sx={{fontSize: '30px', lineHeight: '38px', mb: 3}} fontWeight={600} color="#101828">
                Media & Blog Management
            </Typography>

            <Box sx={{display: 'flex', gap: 2, mb: 4, flexDirection: {xs: 'column', sm: 'row'}}}>
                <SearchBar placeholder="Search by type (media/news/blog), publish date, and author."/>
            </Box>

            <SearchHistoryChip />

            <SectionTitle title="New Article or Media" showOptions/>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 2,
                    mb: 3,
                    justifyContent: 'space-between',
                    '@media (max-width: 991px)': {
                        flexDirection: 'column',
                    },
                }}
            >
                <CTA
                    imgAlt="Create article icon"
                    imgSrc="/createArticle.svg"
                    subtitle="Upload visuals or videos to showcase your brand"
                    title="Create Article"
                />
                <CTA
                    imgAlt="Upload media icon"
                    imgSrc="/folder2.svg"
                    subtitle="Upload visuals or videos to showcase your brand"
                    title="Upload Media"
                />
            </Box>

            <SectionTitle title="List of Contents" showOptions1 showOptions/>
            <HorizontalTabs />

            <Container maxWidth="lg">
                <BlogCard/>
                <Pagination page={page} totalPages={totalPages} onPageChange={setPage}/>
            </Container>
        </Box>
    );
};

export default MainContent;