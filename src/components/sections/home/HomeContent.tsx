import * as React from "react";
import SuggestedJobCard from "enigma/components/ui/SuggestedJobCard";
import SectionTitle from "enigma/components/ui/SectionTitle";
import {JobCard} from "../../common/JobCard";
import {Box, Typography} from "@mui/material";
import {PopularJob} from "enigma/components/common/PopularJob";
import CTA from "enigma/components/common/CTA";
import SearchBar from "enigma/components/ui/SearchBar";

export const HomeContent = () => {
    const jobData = [1, 2, 3, 4];
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: {xs: 0.5, sm: 2},
                width: "100%",
                ml: 0.5,
                "@media (max-width: 991px)": {
                    maxWidth: "100%",
                },
            }}
        >
            <Typography
                sx={{fontSize: "30px", lineHeight: "38px", mb: 3}}
                fontWeight={600}
                color="#101828"
            >
                Home
            </Typography>

            <SearchBar
                placeholder="AdminJobsPage title, description, or industry name"
                targetPath="/jobs"
            />

            {/* Popular Jobs */}
            <PopularJob/>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: {xs: "column", lg: "row"},
                    gap: 4,
                    width: "100%",
                }}
            >
                {/* Left Column */}
                <Box
                    sx={{
                        width: "70%",
                        "@media (max-width: 991px)": {
                            width: "100%",
                            pr: 2,
                        },
                    }}
                >
                    {/* Step Section */}
                    <SectionTitle title="Step Into Your Future" showOptions/>

                    {/*CTA*/}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            mt: 2,
                            mb: 3,
                            justifyContent: "space-between",
                            "@media (max-width: 991px)": {
                                flexDirection: "column",
                            },
                        }}
                    >
                        <CTA
                            imgAlt="profile"
                            imgSrc="/create.svg"
                            subtitle="Attract premium employers instantly"
                            title="Create Your Profile"
                        />
                        <CTA
                            imgAlt="upload"
                            imgSrc="/folder.svg"
                            subtitle="Stand out with your expertise"
                            title="Upload CV"
                        />
                    </Box>

                    {/* Trending Jobs */}
                    <SectionTitle
                        title="Trending Jobs This Week"
                        showOptions1
                        showOptions
                    />

                    <Box sx={{mt: 2}}>
                        <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
                            {Array.from(
                                {length: Math.ceil(jobData.length / 2)},
                                (_, rowIndex) => (
                                    <Box
                                        key={rowIndex}
                                        sx={{
                                            display: "flex",
                                            flexDirection: {xs: "column", sm: "row"}, // Stack on mobile, row on larger screens
                                            gap: 3,
                                        }}
                                    >
                                        {jobData
                                            .slice(rowIndex * 2, rowIndex * 2 + 2)
                                            .map((job) => (
                                                <JobCard key={job} width="100%"/>
                                            ))}
                                    </Box>
                                )
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* Right Column */}
                <Box sx={{mr: 2}}>
                    <SectionTitle title="Suggested" showOptions/>

                    <Box
                        sx={{
                            mt: 2,
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((job) => (
                            <SuggestedJobCard/>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
