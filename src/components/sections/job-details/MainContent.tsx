import * as React from "react";
import JobDetailsGrid from "enigma/components/sections/job-details/JobDetailsGrid";
import { Box, Typography, Button } from "@mui/material";
import SectionTitle from "enigma/components/ui/SectionTitle";
import SuggestedJobCard from "enigma/components/ui/SuggestedJobCard";
import { Session } from "next-auth";
import { Job } from "enigma/types/models";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface MainContentProps {
  session: Session | null;
  job: Job;
  onBackToJobs?: () => void;
}

export const MainContent = ({ session, job, onBackToJobs }: MainContentProps) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 0.5, sm: 3 },
        width: "100%",
        overflow: "auto",
        ml: 0.5,
        "@media (max-width: 991px)": {
          maxWidth: "100%",
        },
      }}
    >
      {/* Back Button */}
      <Button
        onClick={onBackToJobs}
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 2,
          color: "#667085",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "rgba(102, 112, 133, 0.1)",
          },
        }}
      >
        Back to Jobs
      </Button>

      <Typography variant="h4" component="h1" gutterBottom color="#101828">
        {job.job_title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 6,
          width: "100%",
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            width: "70%",
            display: "flex",
            "@media (max-width: 991px)": {
              width: "100%",
              pr: 2,
            },
          }}
        >
          <JobDetailsGrid session={session} job={job} />
        </Box>

        {/* Right Column */}
        <Box sx={{ mr: 2 }}>
          <SectionTitle title="Suggested" showOptions />
          <Box
            sx={{
              mt: 2,
            }}
          >
            {[1, 2, 3, 4, 5].map((job) => (
              <SuggestedJobCard />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
