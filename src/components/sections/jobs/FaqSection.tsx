"use client";
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// TODO: Replace the placeholder answers with actual content
const faqItems = [
    {
        question: "How do I create a resume?",
        answer: "YOU BLIND OR WHAT? JUST CLICK THE BUTTON THAT SAYS 'CREATE RESUME' AND FOLLOW THE PROMPTS. IT'S NOT ROCKET SCIENCE."
    },
    {
        question: "Can I apply to multiple jobs at once?",
        answer: "NO STOP HOARDING JOBS YOU GREEDY BASTARD"
    },
    {
        question: "How will employers contact me?",
        answer: "CHECK YOUR MAIL"
    },
    {
        question: "Can I edit my personal information?",
        answer: "UH, YEAH, THAT'S KIND OF THE POINT. JUST GO TO YOUR PROFILE AND CHANGE IT."
    },
    {
        question: "How do I track my application status?",
        answer: "CHECK YOUR DASHBOARD, YOU DINGUS. IT'S ALL THERE."
    },
    {
        question: "Is this platform free to use?",
        answer: "NO YOU HAVE TO SUBSCRIBE TO MY ONLYFANS TO GET ACCESS TO THE GOOD STUFF. JUST KIDDING, IT'S FREE. BUT YOU CAN DONATE IF YOU WANT."
    }
];

const FaqSection: React.FC = () => {
    return (
        <Box sx={{ py: 3 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h2" gutterBottom sx={{
                        fontSize: { xs: 'h3.fontSize', lg: 'h2.fontSize' },
                        color: '#101828'
                    }}>
                        Frequently asked questions
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: 'h6.fontSize', lg: 'h5.fontSize' },
                            color: 'text.secondary',
                        }}
                    >
                        Everything you need to know about the product and billing.
                    </Typography>
                </Box>

                <Box sx={{ maxWidth: 768, mx: 'auto' }}>
                    {faqItems.map((item, index) => (
                        <Accordion
                            key={index}
                            elevation={0}
                            sx={{
                                '&:before': { display: 'none' },
                                borderTop: index !== 0 ? 1 : 0,
                                borderColor: 'grey.200',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{
                                    px: 0,
                                    '& .MuiAccordionSummary-content': {
                                        margin: '24px 0',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            {item.answer && (
                                <AccordionDetails sx={{ px: 0 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            )}
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FaqSection;
