import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Image from "next/image"; // Replace with 'img' if not using Next.js
import Verified from "@mui/icons-material/Verified";

const SidePanel = () => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        border: "1px solid #e4e7ec",
        maxWidth: 360,
        width: "100%",
        bgcolor: "#fff",
        boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1)",
        p: 0,
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        overflow: "hidden",
      }}
    >
      {/* Profile Header */}
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            height: 120,
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image src="/bannerDetail.png" alt="" height={100} width={2000} />
        </Box>
        <Box
          sx={{
            mt: "-40px",
            px: 3,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 0,
              }}
            >
              <Box
                sx={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image alt="" src="/avatarBig.png" height={98} width={98} />
                <Box
                  sx={{
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                    width: 24,
                    height: 24,
                  }}
                >
                  <Verified sx={{ fontSize: 24, color: "#2494b6" }} />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                }}
              >
                <IconButton
                  sx={{
                    padding: 1,
                    borderRadius: "8px",
                    border: "1px solid #d0d5dd",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    display: "flex",
                  }}
                >
                  <Image src="/phone.svg" alt="" width={20} height={20} />
                </IconButton>
                <IconButton
                  sx={{
                    padding: 1,
                    borderRadius: "8px",
                    border: "1px solid #d0d5dd",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    display: "flex",
                  }}
                >
                  <Image src="/camera1.svg" alt="" width={20} height={20} />
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#101828",
                  }}
                >
                  Amélie Laurent
                </Typography>
                <Box
                  sx={{
                    width: 13,
                    height: 13,
                    borderRadius: "50%",
                    backgroundColor: "#17b26a",
                    border: "1.5px solid #fff",
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#475467",
                }}
              >
                @amélielaurent
              </Typography>
            </Box>
          </Box>
          {/* Toggles */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Switch
              defaultChecked
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#40b0d0",
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#ffffffff",
                  opacity: 0.5,
                },
              }}
            />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: "#344054",
              }}
            >
              Allow Employers to Search Your Profile
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Switch
              defaultChecked
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#40b0d0",
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#ffffffff",
                  opacity: 0.5,
                },
              }}
            />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: "#344054",
              }}
            >
              Job Seeking
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          px: 3,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: "#344054",
            }}
          >
            About
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#475467",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            I'm a Product Designer based in Melbourne, Australia. I enjoy
            working on product design, design systems, and Webflow projects, but
            I don't take myself too seriously. I’ve worked with some of the
            world’s most exciting companies, including Coinbase, Stripe, and
            Linear. I'm passionate about helping startups grow, improve their UX
            and customer experience, and to raise venture capital through good
            design. My work has been featured on Typewolf, Mindsparkle Magazine,
            Webflow, Fonts In Use, CSS Winner, httpster, Siteinspire, and Best
            Website Gallery.
          </Typography>
        </Box>
      </Box>

      {/* Work Experience Section */}
      <Box
        sx={{
          px: 3,
          pb: 3,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            color: "#344054",
          }}
        >
          Work Experience
        </Typography>
        {[
          {
            title: "Lead Product Designer",
            company: "ContrastAI",
            period: "May 2020 – Present",
          },
          {
            title: "Product Designer",
            company: "Sisyphus",
            period: "Jan 2018 – May 2020",
          },
          {
            title: "UX Designer",
            company: "Ephemeral",
            period: "Mar 2017 – Jan 2018",
          },
        ].map((job, index) => (
          <Box
            key={index}
            sx={{ display: "flex", flexDirection: "row", gap: "12px" }}
          >
            <Image src="" alt="job-icon" width={48} height={48} />
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "#182230",
                  }}
                >
                  {job.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                  }}
                >
                  {job.company}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#475467",
                }}
              >
                {job.period}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SidePanel;
