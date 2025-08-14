import {useState} from "react";
import {
    Box,
    Typography,
    Divider,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    ListItemIcon,
    Chip, SvgIcon,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import ActionButtons from "enigma/components/sections/job-details/JobDetailsActionButtons";
import TagChips from "enigma/components/ui/TagChips";
import {Job} from 'enigma/types/models';
import {toDisplayValue, isWithinDays} from "enigma/utils/dateFormat";
import {usePathname} from "next/navigation";
import PulsingCircle from "enigma/components/common/PulsingCircle";
import {Place, Wallet, Work} from "@mui/icons-material";

const JobDetailsGrid = ({userId, job}: { userId: string | null | undefined; job: Job }) => {
    const pathname = usePathname();
    const isLocationAdmin = pathname.includes("/admin");
    const tags = [job.industry.industry_name, job.job_function.job_function_name, job.subfunction.job_subfunction_name];
    const [showMore, setShowMore] = useState(false);
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 3, p: 2}}>
            <Box>
                <Card sx={{borderRadius: 4, boxShadow: "none"}}>
                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    height="291"*/}
                    {/*    image="bannerJobDetail.svg"*/}
                    {/*    alt="Job Banner"*/}
                    {/*    sx={{borderRadius: "8px", objectFit: "cover"}}*/}
                    {/*/>*/}

                    <CardContent>
                        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    flexDirection: "column",
                                    mt: 2,
                                }}
                            >
                                <Typography variant="h4" fontWeight={600}>
                                    {job.job_title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    mt={1}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: isWithinDays(job.close_date, 7)
                                            ? "#f59e0b" : isWithinDays(job.close_date, 3)
                                                ? "#ef4444" : "#6941c6"
                                    }}
                                >
                                    <PulsingCircle closeDate={job.close_date}/>
                                    Submission deadline: {toDisplayValue(job.close_date)}
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1}}>
                                <IconButton size="medium">
                                    <MoreVertIcon fontSize="medium"/>
                                </IconButton>
                                <IconButton>
                                    <Image src="/bookmark.svg" alt="" height={24} width={24}/>
                                </IconButton>
                                <IconButton>
                                    <Image src="/share.png" alt="" height={24} width={24}/>
                                </IconButton>
                                <ActionButtons userId={userId} job={job} isLocationAdmin={isLocationAdmin}/>
                            </Box>
                        </Box>

                        {/* Job Metadata */}
                        <Box
                            sx={{mt: 2, display: "flex", flexDirection: "column", gap: 1}}
                        >
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Wallet sx={{fill: "#236785"}}/>
                                <Typography variant="body2">
                                    ${job.salary_range_start} - ${job.salary_range_end}
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Place sx={{fill: "#236785"}}/>
                                <Typography variant="body2">{job.location}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Work sx={{fill: "#236785"}}/>
                                <Typography variant="body2">{job.employment_type.charAt(0).toUpperCase() + job.employment_type.slice(1)}</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                <TagChips tags={tags} salary="" showSalary={false}/>
                            </Stack>
                        </Box>
                    </CardContent>

                    {/* Job Summary and Responsibilities */}
                    <CardContent sx={{bgcolor: "#fff", borderTop: "3px solid #f2f4f7"}}>
                        <Typography fontWeight={600} fontSize="20px" lineHeight="30px">
                            Job Summary
                        </Typography>

                        <Typography variant="body1" color="#475467" mt={1}>
                            {job.description}
                        </Typography>

                        {/* Key Responsibilities */}
                        {(showMore || !showMore) && (
                            <>
                                <Typography
                                    fontWeight={600}
                                    fontSize="20px"
                                    lineHeight="30px"
                                    mt={2}
                                >
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
                                    ]
                                        .slice(0, showMore ? undefined : 6) // Show only 2 items initially
                                        .map((item, index) => (
                                            <ListItem
                                                key={index}
                                                sx={{
                                                    py: 0.5,
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: "15px",
                                                        alignSelf: "flex-start",
                                                        mt: "6px",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: "50%",
                                                            backgroundColor: "#475467",
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    sx={{
                                                        m: 0,
                                                        "& .MuiListItemText-primary": {
                                                            fontSize: "16px",
                                                            lineHeight: "24px",
                                                            color: "#475467",
                                                            fontFamily: "Inter, sans-serif",
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                </List>
                            </>
                        )}

                        {/* Required Qualifications (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography
                                    fontWeight={600}
                                    fontSize="20px"
                                    lineHeight="30px"
                                    mt={2}
                                >
                                    Required Qualifications
                                </Typography>
                                <List>
                                    {[
                                        "Bachelor's degree or higher in Business, IT, or related fields",
                                        "4+ years of experience as a Business Analyst (with at least 1–2 years in Blockchain or Web3)",
                                        "Understanding of Ethereum, smart contracts, tokens, wallets, Layer 2s",
                                        "Strong communication and stakeholder management skills",
                                        "Familiar with Agile/Scrum methodology and tools (Jira, Confluence)",
                                        "English proficiency required; Thai language is a plus",
                                    ].map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: "15px",
                                                    alignSelf: "flex-start",
                                                    mt: "6px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        backgroundColor: "#475467",
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{
                                                    m: 0,
                                                    "& .MuiListItemText-primary": {
                                                        fontSize: "16px",
                                                        lineHeight: "24px",
                                                        color: "#475467",
                                                        fontFamily: "Inter, sans-serif",
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}

                        {/* Preferred Skills (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography
                                    fontWeight={600}
                                    fontSize="20px"
                                    lineHeight="30px"
                                    mt={2}
                                >
                                    Preferred Skills
                                </Typography>
                                <List>
                                    {[
                                        "Experience in fintech, DeFi, or crypto exchanges",
                                        "Knowledge of tokenomics and regulatory requirements in Southeast Asia",
                                        "Certification in CBAP or Agile BA is a plus",
                                    ].map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: "15px",
                                                    alignSelf: "flex-start",
                                                    mt: "6px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        backgroundColor: "#475467",
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{
                                                    m: 0,
                                                    "& .MuiListItemText-primary": {
                                                        fontSize: "16px",
                                                        lineHeight: "24px",
                                                        color: "#475467",
                                                        fontFamily: "Inter, sans-serif",
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}

                        {/* Benefits (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography
                                    fontWeight={600}
                                    fontSize="20px"
                                    lineHeight="30px"
                                    mt={2}
                                >
                                    Benefits
                                </Typography>
                                <List>
                                    {[
                                        "Competitive salary and token-based bonuses",
                                        "Remote work flexibility (hybrid model)",
                                        "Annual leave + Thai national holidays",
                                        "Health insurance + wellness programs",
                                        "Learning & development budget",
                                        "Opportunity to work on cutting-edge Web3 products",
                                    ].map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                py: 0.5,
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: "15px",
                                                    alignSelf: "flex-start",
                                                    mt: "6px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        backgroundColor: "#475467",
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                sx={{
                                                    m: 0,
                                                    "& .MuiListItemText-primary": {
                                                        fontSize: "16px",
                                                        lineHeight: "24px",
                                                        color: "#475467",
                                                        fontFamily: "Inter, sans-serif",
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}

                        {/* How to Apply (Hidden Initially) */}
                        {showMore && (
                            <>
                                <Typography
                                    fontWeight={600}
                                    fontSize="20px"
                                    lineHeight="30px"
                                    mt={2}
                                >
                                    How to Apply
                                </Typography>
                                <List sx={{margin: 0}}>
                                    {/* Combined item: "Click 'Apply Now' or submit your resume..." with email */}
                                    <ListItem
                                        sx={{
                                            py: 0.5,
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: "15px",
                                                alignSelf: "flex-start",
                                                mt: "6px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    backgroundColor: "#475467",
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Box>
                                                    <Box sx={{display: "flex"}}>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{color: "#475467"}}
                                                        >
                                                            Click “
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                textDecoration: "underline",
                                                                fontWeight: 600,
                                                                color: "#2494b6",
                                                            }}
                                                        >
                                                            Apply Now
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{color: "#475467"}}
                                                        >
                                                            ” or submit your resume and portfolio to:
                                                        </Typography>
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                        }}
                                                    >
                                                        <img
                                                            alt=""
                                                            src="email.svg"
                                                            style={{
                                                                width: "20px",
                                                                maxHeight: "100%",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize: "16px",
                                                                lineHeight: "24px",
                                                                color: "#475467",
                                                                fontFamily: "Inter, sans-serif",
                                                            }}
                                                        >
                                                            careers@yourcompany.com
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            }
                                            sx={{
                                                m: 0,
                                                "& .MuiListItemText-primary": {
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                    color: "#475467",
                                                },
                                            }}
                                        />
                                    </ListItem>

                                    {/* Deadline */}
                                    <ListItem
                                        sx={{
                                            py: 0.5,
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: "15px",
                                                alignSelf: "flex-start",
                                                mt: "6px",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    backgroundColor: "#475467",
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Submission deadline June 30, 2025"
                                            sx={{
                                                m: 0,
                                                "& .MuiListItemText-primary": {
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                    color: "#475467",
                                                    fontFamily: "Inter, sans-serif",
                                                },
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </>
                        )}
                    </CardContent>

                    <Divider/>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant="body1"
                            fontWeight={600}
                            sx={{color: "#217799"}}
                        >
                            {showMore ? "Show less" : "Show more"}
                        </Typography>
                        <IconButton
                            sx={{color: "#217799"}}
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? (
                                <Image src="/showless.svg" alt="" height={20} width={20}/>
                            ) : (
                                <Image src="/showMore.svg" alt="" height={24} width={24}/>
                            )}
                        </IconButton>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default JobDetailsGrid;
