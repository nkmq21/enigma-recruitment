"use client";
import * as React from "react";
import { FunctionComponent } from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography, Box, Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const BlogSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(3, 0),
    boxSizing: "border-box",
    gap: theme.spacing(8),
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
}));

const Container2 = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "0 32px",
    boxSizing: "border-box",
    maxWidth: "1280px",
});

const Container3 = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "0 32px",
    boxSizing: "border-box",
    maxWidth: "1280px",
});

const Content = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: "32px 0px",
});

const Content2 = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: "48px 32px",
});

const HeadingAndSupportingText = styled(Box)({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "20px",
    minWidth: "480px",
    maxWidth: "768px",
});

const HeadingAndSubheading = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "12px",
});

const Subheading = styled(Typography)({
    alignSelf: "stretch",
    lineHeight: "24px",
    fontWeight: 600,
    fontSize: "16px",
    color: "#6941c6",
});

const Heading = styled(Typography)(({ theme }) => ({
    alignSelf: "stretch",
    fontSize: '24px',
    letterSpacing: "-0.02em",
    lineheight: '32px',
    fontWeight: 600,
    color: "#101828",
    [theme.breakpoints.up('lg')]: {
        fontSize: "36px",
        lineHeight: "44px",
    },
}));

const SupportingText = styled(Typography)(({ theme }) => ({
    alignSelf: "stretch",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#475467",
    width: '80%',
    [theme.breakpoints.up('lg')]: {
        fontSize: "20px",
        lineHeight: "30px",
        width: '100%',
    },
}));

const Actions = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",

});

const Buttonsbutton = styled(Button)(({ theme }) => ({
    boxShadow: `0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset, 0px -2px 0px rgba(16, 24, 40, 0.05) inset, 0px 1px 2px rgba(16, 24, 40, 0.05)`,
    borderRadius: "8px",
    backgroundColor: "#2494b6",
    border: "2px solid rgba(255, 255, 255, 0.12)",
    padding: theme.spacing(1.5, 2.25),
    color: "#fff",
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#1e7a9a",
    },
    [theme.breakpoints.up('xs')]: {
    },
}));

const BlogPostCard = styled(Box)({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "20px",
    minWidth: "320px",
});

const ImageIcon = styled("img")({
    alignSelf: "stretch",
    borderRadius: "16px",
    maxWidth: "100%",
    height: "240px",
    objectFit: "cover",
});

const Content1 = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "24px",
});

const HeadingAndSubheading1 = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "8px",
});

const Subheading1 = styled(Typography)({
    alignSelf: "stretch",
    lineHeight: "20px",
    fontWeight: 600,
    fontSize: "14px",
    color: "#6941c6",
});

const HeadingAndText = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "8px",
});

const HeadingAndIcon = styled(Box)({
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "16px",
});

const BuildingYourApi = styled(Typography)({
    flex: 1,
    lineHeight: "30px",
    fontWeight: 600,
    fontSize: "20px",
    color: "#101828",
});

const IconWrap = styled("img")({
    width: "24px",
    height: "28px",
});

const SupportingText1 = styled(Typography)({
    alignSelf: "stretch",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#475467",
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
});

const AvatarLabelGroup = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "12px",
});

const AvatarIcon = styled("img")({
    width: "40px",
    height: "40px",
    borderRadius: "9999px",
    objectFit: "cover",
});

const Text1 = styled(Typography)({
    lineHeight: "20px",
    fontWeight: 600,
    fontSize: "14px",
    color: "#101828",
});

const Jan = styled(Typography)({
    lineHeight: "20px",
    fontSize: "14px",
    color: "#475467",
});

const TextAndSupportingText = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
});

const BlogSection: FunctionComponent = () => {
    const blogPosts = [
        {
            subheading: "Resume Design",
            title: "Standout Resume in 6 Seconds",
            text: "Recruiters spend an average of just 6 seconds scanning a resume. So how do you stand out at first glance?",
            author: "Olivia Rhye",
            date: "20 Jan 2024",
            image: "new.png",
            avatar: "Avatar2.png",
        },
        {
            subheading: "Career Planning",
            title: "Top 5 Hot Careers 2025",
            text: "Just graduated and unsure where to start? Here are 5 booming industries offering strong career prospects and great salaries.",
            author: "Phoenix Baker",
            date: "19 Jan 2024",
            image: "new1.png",
            avatar: "Avatar3.png",
        },
        {
            subheading: "Interview Tips",
            title: "Common Interview Questions",
            text: "“Tell me about yourself” and other tricky questions can catch candidates off guard. Learn how to respond clearly and confidently.",
            author: "Lana Steiner",
            date: "18 Jan 2024",
            image: "new2.png",
            avatar: "Avatar4.png",
        },
    ];

    return (
        <BlogSectionRoot>
            <Container2 maxWidth="lg">
                <Content>
                    <HeadingAndSupportingText>
                        <HeadingAndSubheading>
                            <Subheading>Our blog</Subheading>
                            <Heading>Career tips & interview advice</Heading>
                        </HeadingAndSubheading>
                        <SupportingText>
                            Tool and strategies modern teams need to help their companies grow.
                        </SupportingText>
                    </HeadingAndSupportingText>
                    <Actions>
                        <Buttonsbutton>
                            <Typography variant="body2" fontWeight={600}>
                                View all posts
                            </Typography>
                        </Buttonsbutton>
                    </Actions>
                </Content>
            </Container2>
            <Container3 maxWidth="lg">
                <Content2>
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index}>
                            <ImageIcon alt={`${post.subheading} image`} src={post.image} />
                            <Content1>
                                <HeadingAndSubheading1>
                                    <Subheading1>{post.subheading}</Subheading1>
                                    <HeadingAndText>
                                        <HeadingAndIcon>
                                            <BuildingYourApi>{post.title}</BuildingYourApi>
                                            <ArrowOutwardIcon sx={{ color: "#101828" }} />
                                        </HeadingAndIcon>
                                        <SupportingText1>{post.text}</SupportingText1>
                                    </HeadingAndText>
                                </HeadingAndSubheading1>
                                <AvatarLabelGroup>
                                    <AvatarIcon alt={`${post.author} avatar`} src={post.avatar} />
                                    <TextAndSupportingText>
                                        <Text1>{post.author}</Text1>
                                        <Jan>{post.date}</Jan>
                                    </TextAndSupportingText>
                                </AvatarLabelGroup>
                            </Content1>
                        </BlogPostCard>
                    ))}
                </Content2>
            </Container3>
        </BlogSectionRoot>
    );
};

export default BlogSection;