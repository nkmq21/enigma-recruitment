import { FunctionComponent } from "react";
import {
    Box,
    Typography,
    Button,
    Chip,
    Divider,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import {
    Share,
    Work,
    LocationOn,
    Schedule,
    Business,
} from "@mui/icons-material";

const SectionContent: FunctionComponent = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
            {/* Job Details Section */}
            <Box>
                <Card sx={{ borderRadius: 4 }}>
                    <CardMedia
                        component="img"
                        height="291"
                        image="bannerJobDetail.svg"
                        alt="Job Banner"
                        sx={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                    <CardContent>
                        {/* Company Info */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                py: 2,
                                borderBottom: "1px solid #f2f4f7",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
                                <img src="/logoCompany.svg" alt="Company Logo" style={{ width: 43 }} />
                                <Box>
                                    <Typography variant="h6" fontWeight={500}>
                                        KBTG SELL
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        KASIKORN Group, Inc.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <IconButton size="medium">
                                    <MoreVertIcon fontSize="medium" />
                                </IconButton>
                                <IconButton>
                                    <Image src="/bookmark.svg" alt="" height={24} width={24} />
                                </IconButton>
                                <IconButton>
                                    <Image src="/share.png" alt="" height={24} width={24} />
                                </IconButton>
                            </Box>
                        </Box>
                        {/* Job Title and Apply Button */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', gap: 2, mt: 2, }}>
                            <Typography variant="h5" fontWeight={600}>
                                Senior Business Analyst (Blockchain)
                            </Typography>
                            <Button
                                variant="contained"
                                startIcon={<Share />}
                                sx={{
                                    borderRadius: 2,
                                    background: "linear-gradient(94.87deg, #81cce3, #0675a1 76.92%)",
                                    textTransform: "none",
                                }}
                            >
                                Apply Now
                            </Button>
                        </Box>
                        <Typography variant="body2" color="#6941c6" mt={1}>
                            Submission deadline May 31, 2025 • 21 applicants
                        </Typography>

                        {/* Job Metadata */}
                        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Work fontSize="small" />
                                <Typography variant="body2">$60.00 - $70.00 Per Hour</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <LocationOn fontSize="small" />
                                <Typography variant="body2">Din Daeng, Bangkok</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Schedule fontSize="small" />
                                <Typography variant="body2">Full time</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Business fontSize="small" />
                                <Typography variant="body2">2 years</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                <Chip
                                    label="ERP/CRM Systems"
                                    icon={<Box sx={{ bgcolor: "#9e77ed", width: 6, height: 6, borderRadius: "50%", }} />}
                                />
                                <Chip
                                    label="Fintech"
                                    icon={<Box sx={{ bgcolor: "#6172f3", width: 6, height: 6, borderRadius: "50%" }} />}
                                />
                                <Chip
                                    label="Documentation Skills"
                                    icon={<Box sx={{ bgcolor: "#ee46bc", width: 6, height: 6, borderRadius: "50%" }} />}
                                />
                            </Stack>
                        </Box>
                    </CardContent>
                    {/* Job Summary and Responsibilities */}
                    <CardContent sx={{ bgcolor: "#fff", borderTop: "3px solid #f2f4f7" }}>
                        <Typography variant="h6" fontWeight={600}>
                            Job Summary
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            We are seeking a highly skilled Senior Business Analyst (Blockchain) to join our dynamic team in Bangkok.
                            You will serve as the bridge between our blockchain product team and business stakeholders. This role is
                            ideal for a tech-savvy, business-oriented analyst who understands both decentralized technologies and
                            enterprise needs.
                        </Typography>
                        <Typography variant="h6" fontWeight={600} mt={2}>
                            Key Responsibilities
                        </Typography>
                        <List>
                            {[
                                "Analyze and document blockchain-based business requirements (smart contracts, tokenomics, DeFi features)",
                                "Collaborate with product managers, developers, and designers to define user stories and technical specifications",
                                "Conduct stakeholder interviews and workshops across multiple departments",
                                "Facilitate backlog grooming and sprint planning with Agile teams",
                                "Lead UAT (User Acceptance Testing) and support QA team in test case creation",
                                "Monitor and evaluate performance metrics to ensure product-market fit",
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ py: 0.5 }}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: 1, mt: 1 }}>
                            <Typography variant="body1" color="#217799">
                                Show more
                            </Typography>
                            <IconButton sx={{ color: "#217799" }}>
                                <Image src="/showMore.svg" alt="" height={24} width={24} />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            {/* More Jobs Section */}
            <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                        More jobs
                    </Typography>
                </CardContent>
                <Box sx={{ px: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                    {[
                        {
                            title: "Delivery Manager",
                            deadline: "May 31, 2025",
                            applicants: 11,
                            salary: "$60.00 - $70.00 Per Hour",
                            tags: ["Agile Delivery", "Innovation Management", "Team Leadership"],
                        },
                        {
                            title: "Advanced IT Security Engineer",
                            deadline: "June 5, 2025",
                            applicants: 15,
                            salary: "$55.00 - $65.00 Per Hour",
                            tags: ["Cybersecurity", "Risk Assessment", "Security Protocols"],
                        },
                        {
                            title: "Infrastructure Project Manager",
                            deadline: "June 10, 2025",
                            applicants: 11,
                            salary: "$50.00 - $60.00 Per Hour",
                            tags: ["Project Management", "Infrastructure Planning", "Stakeholder Communication"],
                        },
                    ].map((job, index) => (
                        <Card key={index} sx={{ display: "flex", gap: 2, p: 2, border: "1px solid #e4e7ec", borderRadius: 3 }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, height: 124, borderRadius: 2, objectFit: "cover" }}
                                image="Image.png"
                                alt="Job Image"
                            />
                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                    <Typography variant="h6" fontWeight={600}>
                                        {job.title}
                                    </Typography>
                                    <IconButton>
                                        <img src="/bookmark.svg" alt="Company Logo" style={{ width: 43 }} />
                                    </IconButton>
                                    <IconButton>
                                        <Share />
                                    </IconButton>
                                </Box>
                                <Typography variant="body2" color="#6941c6">
                                    Submission deadline: {job.deadline} • {job.applicants} applicants
                                </Typography>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Work fontSize="small" />
                                    <Typography variant="body2">{job.salary}</Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                    {job.tags.map((tag, i) => (
                                        <Chip
                                            key={i}
                                            label={tag}
                                            icon={<Box sx={{ bgcolor: i === 0 ? "#9e77ed" : i === 1 ? "#6172f3" : "#ee46bc", width: 6, height: 6, borderRadius: "50%" }} />}
                                        />
                                    ))}
                                </Stack>
                            </Box>
                        </Card>
                    ))}
                </Box>
                <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body1" color="#217799">
                            Show more
                        </Typography>
                        <IconButton sx={{ color: "#217799" }}>
                            <Image src="/showMore.svg" alt="" height={24} width={24} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Box >
    );
};

export default SectionContent;