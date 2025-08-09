import { useState } from "react";
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
  Chip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import ActionButtons from "enigma/components/sections/job-details/JobDetailsActionButtons";
import { Session } from "next-auth";
import TagChips from "enigma/components/ui/TagChips";

const JobDetailsGrid = ({ session }: { session: Session | null }) => {
  const tags = ["ERP/CRM Systems", "Fintech", "Documentation Skills"];
  const [showMore, setShowMore] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
      {/* Job Details Section */}
      <Box>
        <Card sx={{ borderRadius: 4, boxShadow: "none" }}>
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
                backgroundColor: "none",
                py: 2,
                borderBottom: "1px solid #f2f4f7",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src="/logoCompany.svg"
                  alt="Company Logo"
                  style={{ width: 43 }}
                />
                <Box>
                  <Typography variant="h6" fontWeight={500}>
                    KBTG SELL
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
            {/* AdminJobsPage Title and Apply Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                mt: 2,
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                Senior Business Analyst (Blockchain)
              </Typography>
              {/* apply buttton */}
              <ActionButtons
                role={session?.user?.role?.toLowerCase() as string}
              />
            </Box>
            <Typography variant="body2" color="#6941c6" mt={1}>
              Submission deadline May 31, 2025 • 21 applicants
            </Typography>

            {/* AdminJobsPage Metadata */}
            <Box
              sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Image src="wallet.svg" alt="wallet" width={24} height={24} />
                <Typography variant="body2">
                  $60.00 - $70.00 Per Hour
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Image
                  src="location1.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                <Typography variant="body2">Din Daeng, Bangkok</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Image
                  src="bagBlack.svg"
                  alt="experiment"
                  width={24}
                  height={24}
                />
                <Chip label="Permanent" variant="outlined" size="small" />
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                <TagChips tags={tags} salary="" showSalary={false} />
              </Stack>
            </Box>
          </CardContent>

          <Box
            sx={{
              // width: isCollapsed ? "6%" : "19%",
              justifySelf: "flex-end",
              position: "absolute",
              top: "160%",
              left: "73%",
              borderRadius: "12px",
              backgroundColor: "#d9d9d9",
              height: 80,
            }}
          />

          {/* AdminJobsPage Summary and Responsibilities */}
          <CardContent sx={{ bgcolor: "#fff", borderTop: "3px solid #f2f4f7" }}>
            <Typography fontWeight={600} fontSize="20px" lineHeight="30px">
              AdminJobsPage Summary
            </Typography>

            <Typography variant="body1" color="#475467" mt={1}>
              We are seeking a highly skilled Senior Business Analyst
              (Blockchain) to join our dynamic team in Bangkok. You will serve
              as the bridge between our blockchain product team and business
              stakeholders. This role is ideal for a tech-savvy,
              business-oriented analyst who understands both decentralized
              technologies and enterprise needs.
            </Typography>

            {/* Key Responsibilities */}
            {(showMore || !showMore) && ( // Always visible in this case, but can be adjusted
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
                <List sx={{ margin: 0 }}>
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
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              variant="body1"
                              sx={{ color: "#475467" }}
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
                              sx={{ color: "#475467" }}
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

          <Divider />
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
              sx={{ color: "#217799" }}
            >
              {showMore ? "Show less" : "Show more"}
            </Typography>
            <IconButton
              sx={{ color: "#217799" }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? (
                <Image src="/showless.svg" alt="" height={20} width={20} />
              ) : (
                <Image src="/showMore.svg" alt="" height={24} width={24} />
              )}
            </IconButton>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default JobDetailsGrid;
