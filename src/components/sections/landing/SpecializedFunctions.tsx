import React, { useState } from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf891ef41bca0e8aba070376107c9b9db8862d19?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
    title: "General and Factory Management",
    description:
      "We recruit factory leaders who manage end-to-end plant operations, drive business strategy, and lead large production teams.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89b601568bae0fd13231273135b9081303f00664?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
    title: "Production and Operations",
    description:
      "We place engineers and supervisors who optimize production lines, ensure workflow efficiency, and maintain high operational output.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/31e4bef2170abf0a82544112e1395e0ad77b2ba1?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
    title: "Continuous Improvement and Maintenance",
    description:
      "We source CI experts and technicians to drive lean practices, improve processes, and handle equipment maintenance proactively.",
  },
  {
    icon: "/12345.png",
    title: "Supply Chain and Logistics",
    description:
      "Our talent pool includes professionals skilled in procurement, warehousing, distribution, and global logistics coordination.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/05c217cfea2deb76f5f046da59de481124171f7f?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
    title: "Shared Services",
    description:
      "Our team aids companies search for HR, Marketing, Finance and sales adding value to your business processes.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/512fadec40729828eb17f1b11e110eea67ddc3b8?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943",
    title: "Purchasing and Planning",
    description:
      "We recruit planners and buyers who forecast demand, manage suppliers, and streamline procurement workflows for efficiency.",
  },
];

const SpecializedFunctions: React.FC = () => {
  const theme = useTheme();
  // Mobile & tablet (< mdx = 991px) show 1 item per row
  const isBelowMdx = useMediaQuery(theme.breakpoints.down("mdx"));

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Desktop/laptop 3 fixed columns (unchanged logic)
  const columns: { item: (typeof features)[number]; idx: number }[][] = [
    [],
    [],
    [],
  ];
  features.forEach((item, i) => {
    columns[i % 3].push({ item, idx: i });
  });
  if (features.length % 3 === 1) {
    const moved = columns[0].pop();
    if (moved) columns[1].push(moved);
  }

  return (
    <Box sx={{ py: 5, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography variant="h2" gutterBottom sx={{ color: "text.primary" }}>
            Functions We Specialize In
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "20px",
              lineHeight: "30px",
              mx: "auto",
            }}
          >
            Our shared values keep us connected and guide us as one team.
          </Typography>
        </Box>

        {isBelowMdx ? (
          // MOBILE/TABLET: one column, original order (1 item per row)
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 1 }}>
            {features.map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  boxShadow: "none",
                  textAlign: "center",
                  width: "100%",
                  mb: 2,
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent>
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      width: 48,
                      height: 48,
                      mb: 2,
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    sx={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      color: "#404A7C",
                      borderRadius: 1,
                      mt: 1,
                      transition:
                        "opacity 0.5s ease-in-out, max-height 0.5s ease-in-out", // Smoother, longer transition
                      maxWidth: "100%",
                      mx: "auto",
                      textAlign: "center",
                      opacity: hoveredIndex === idx ? 1 : 0,
                      maxHeight: hoveredIndex === idx ? 200 : 0, // Increased maxHeight to ensure content fits
                      overflow: "hidden",
                      transformOrigin: "top",
                    }}
                  >
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          // LAPTOP/DESKTOP: keep 3 fixed columns (unchanged)
          <Box
            sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1 }}
          >
            {columns.map((col, colIdx) => (
              <Box key={colIdx}>
                {col.map(({ item, idx }) => (
                  <Card
                    key={idx}
                    sx={{
                      boxShadow: "none",
                      textAlign: "center",
                      width: "100%",
                      mb: 2,
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <CardContent>
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.title}
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          width: 48,
                          height: 48,
                          mb: 2,
                          cursor: "pointer",
                        }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ cursor: "pointer" }}
                      >
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          color: "#404A7C",
                          borderRadius: 1,
                          mt: 1,
                          transition:
                            "opacity 0.5s ease-in-out, max-height 0.5s ease-in-out", // Smoother, longer transition
                          maxWidth: "100%",
                          mx: "auto",
                          textAlign: "center",
                          opacity: hoveredIndex === idx ? 1 : 0,
                          maxHeight: hoveredIndex === idx ? 200 : 0, // Increased maxHeight to ensure content fits
                          overflow: "hidden",
                          transformOrigin: "top",
                        }}
                      >
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default SpecializedFunctions;
