"use client";
import * as React from "react";
import { useState } from "react";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { ResetPasswordSchema } from "enigma/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { resetPass } from "enigma/services/authService";

export const ResetPasswordForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Initialize the form with react-hook-form and zod
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof ResetPasswordSchema>) => {
    setLoading(true);
    setError(null);
    setSuccess("");
    try {
      const res = await resetPass(data);
      if (res.error) {
        setError(res.error);
        setLoading(false);
        setSuccess("");
      }
      if (res.success) {
        setSuccess(res.success);
        setLoading(false);
        setError("");
      }
    } catch (err) {
      console.error("Error during resetting password: ", err);
      setError("An error occurred: " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={form.handleSubmit(onSubmit)}
        sx={{
          minWidth: { xs: "100%", md: "480px" },
          display: "flex",
          flexDirection: "column",
          flex: 1,
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          position: "relative",
        }}
      >
        <BigHeaderLogo />
        <Divider
          sx={{
            mt: 1,
            mb: 3,
            width: "100%",
            display: {
              lg: "none",
              sm: "block",
            },
          }}
        />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            py: 18,
            px: { xs: 3, md: 4 },
            "@media (max-width: 1025px)": {
              py: 10,
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "385px",
              width: "100%",
            }}
          >
            <Stack spacing={6}>
              <Stack spacing={2}>
                <Typography
                  variant="h2"
                  color="text.primary"
                  sx={{
                    fontSize: { lg: "h2", xs: "30px" },
                  }}
                >
                  Forgot your password?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Enter your email address and we’ll send you a link to reset
                  your password.
                </Typography>
              </Stack>
              {/*Credentials login section*/}

              <Stack spacing={3}>
                {/* input mail and password and login */}
                <Box>
                  <Stack spacing={2.5}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            color: "#344054",
                          }}
                        >
                          Email
                        </Typography>
                      </Box>
                      <Box
                        component="input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.watch("email")}
                        onChange={(e) =>
                          form.setValue("email", e.target.value, {
                            shouldValidate: true,
                          })
                        }
                        required
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          borderRadius: "8px",
                          backgroundColor: "#fff",
                          border: `1px solid ${form.formState.errors.email ? "#EF4444" : "#d0d5dd"}`, // Red border on error
                          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                          padding: "10px 14px",
                          fontSize: "16px",
                          lineHeight: "24px",
                          fontFamily: "'Inter', sans-serif",
                          color: "#667085",
                          outline: "none",
                          "&::placeholder": {
                            color: "#667085",
                            opacity: 1,
                          },
                          "&:hover": {
                            borderColor: form.formState.errors.email
                              ? "#EF4444"
                              : "#d0d5dd",
                          },
                          "&:focus": {
                            borderColor: form.formState.errors.email
                              ? "#EF4444"
                              : "#3b82f6", // Blue border on focus, red if error
                            boxShadow: form.formState.errors.email
                              ? "none"
                              : "0px 0px 0px 4px rgba(59, 130, 246, 0.2)",
                          },
                        }}
                      />
                      {form.formState.errors.email && (
                        <Typography
                          sx={{
                            color: "#EF4444",
                            fontSize: "12px",
                            mt: 0.75,
                            ml: 1.75,
                          }}
                        >
                          {form.formState.errors.email.message}
                        </Typography>
                      )}
                    </Box>

                    {/* button sign in */}
                    <Stack spacing={2}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#2494B6",
                          py: 1.25,
                          fontSize: "16px",
                          fontWeight: 600,
                          width: "100%",
                          "&:hover": {
                            bgcolor: "#1a7a9d",
                          },
                        }}
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Resetting" : "Reset Password"}
                      </Button>
                    </Stack>
                    {(error || success) && (
                      <Typography
                        color={error ? "error" : "success"}
                        sx={{ fontSize: "14px" }}
                      >
                        {error || success}
                      </Typography>
                    )}
                  </Stack>
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    gap: 0.5,
                  }}
                  href="/login"
                >
                  <Image src="/arrowLeft.svg" alt="" width={20} height={20} />
                  <Typography
                    sx={{
                      color: "#475467",
                      fontSize: "14px",
                    }}
                  >
                    Back to log in
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>

        <Box
          sx={{
            position: "absolute",
            left: 10,
            bottom: 20,
            color: "#475467",
            fontSize: "14px",
          }}
        >
          © Enigma Recruitment 2025
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 10,
            bottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            component="img"
            src="https://cdn.builder.io/api/v1/image/assets/8ef08a3c60b44d4ba008c3e63d84c943/be78fa20679878760d04b59e9cf722db6d7941a1?placeholderIfAbsent=true"
            sx={{
              width: 16,
              height: 16,
            }}
          />
          <Typography
            component="a"
            href="mailto:help@enigma.com"
            sx={{
              color: "#475467",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            help@enigma.com
          </Typography>
        </Box>
      </Box>
    </>
  );
};
