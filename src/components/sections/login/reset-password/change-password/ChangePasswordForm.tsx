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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { ChangePasswordSchema } from "enigma/schemas";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { changePass } from "enigma/services/authService";

interface PasswordCondition {
  label: string;
  test: (password: string) => boolean;
}

const passwordConditions: PasswordCondition[] = [
  {
    label: "At least 8 characters long",
    test: (password: string) => password.length >= 8,
  },
  {
    label: "Contains at least one letter",
    test: (password: string) => /[a-zA-Z]/.test(password),
  },
  {
    label: "Contains at least one number",
    test: (password: string) => /[0-9]/.test(password),
  },
  {
    label: "Contains at least one special character",
    test: (password: string) => /[^a-zA-Z0-9]/.test(password),
  },
];

export const ChangePasswordForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const token = searchParams.get("token");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Initialize the form with react-hook-form and zod
  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Watch password fields for real-time validation
  const watchedPassword = useWatch({
    control: form.control,
    name: "password",
    defaultValue: "",
  });

  const watchedConfirmPassword = useWatch({
    control: form.control,
    name: "confirmPassword",
    defaultValue: "",
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof ChangePasswordSchema>) => {
    setLoading(true);
    setError(null);
    setSuccess("");
    try {
      const res = await changePass(data, token);
      if (res.error) {
        setError(res.error);
        setLoading(false);
        setSuccess("");
      }
      if (res.success) {
        setSuccess(res.success);
        setLoading(false);
        setError("");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
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
                  Reset Password
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We have verified it is really you. Change your password here.
                </Typography>
              </Stack>
              <Stack spacing={3}>
                {/* input password */}
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
                          Password
                        </Typography>
                      </Box>
                      <Box
                        component="input"
                        type="password"
                        name="password"
                        placeholder="Enter your new password"
                        value={form.watch("password")}
                        onChange={(e) =>
                          form.setValue("password", e.target.value, {
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
                          border: `1px solid ${form.formState.errors.password ? "#EF4444" : "#d0d5dd"}`, // Red border on error
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
                            borderColor: form.formState.errors.password
                              ? "#EF4444"
                              : "#d0d5dd",
                          },
                          "&:focus": {
                            borderColor: form.formState.errors.password
                              ? "#EF4444"
                              : "#3b82f6", // Blue border on focus, red if error
                            boxShadow: form.formState.errors.password
                              ? "none"
                              : "0px 0px 0px 4px rgba(59, 130, 246, 0.2)",
                          },
                        }}
                      />
                      {form.formState.errors.password && (
                        <Typography
                          sx={{
                            color: "#EF4444",
                            fontSize: "12px",
                            mt: 0.75,
                            ml: 1.75,
                          }}
                        >
                          {form.formState.errors.password.message}
                        </Typography>
                      )}
                    </Box>

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
                          Confirm Password
                        </Typography>
                      </Box>
                      <Box
                        component="input"
                        type="password"
                        name="password"
                        placeholder="Confirm your new password"
                        value={form.watch("confirmPassword")}
                        onChange={(e) =>
                          form.setValue("confirmPassword", e.target.value, {
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
                          border: `1px solid ${form.formState.errors.confirmPassword ? "#EF4444" : "#d0d5dd"}`, // Red border on error
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
                            borderColor: form.formState.errors.confirmPassword
                              ? "#EF4444"
                              : "#d0d5dd",
                          },
                          "&:focus": {
                            borderColor: form.formState.errors.confirmPassword
                              ? "#EF4444"
                              : "#3b82f6", // Blue border on focus, red if error
                            boxShadow: form.formState.errors.confirmPassword
                              ? "none"
                              : "0px 0px 0px 4px rgba(59, 130, 246, 0.2)",
                          },
                        }}
                      />
                      {form.formState.errors.confirmPassword && (
                        <Typography
                          sx={{
                            color: "#EF4444",
                            fontSize: "12px",
                            mt: 0.75,
                            ml: 1.75,
                          }}
                        >
                          {form.formState.errors.confirmPassword.message}
                        </Typography>
                      )}
                    </Box>

                    {/* Password Conditions */}
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#475467",
                          mb: 1,
                          fontWeight: 500,
                        }}
                      >
                        Password requirements:
                      </Typography>
                      <List dense sx={{ py: 0 }}>
                        {passwordConditions.map((condition, index) => {
                          const isValid = condition.test(watchedPassword);
                          return (
                            <ListItem key={index} sx={{ py: 0.25, px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 24 }}>
                                {isValid ? (
                                  <CheckCircleIcon
                                    sx={{
                                      fontSize: 16,
                                      color: "#10B981",
                                    }}
                                  />
                                ) : (
                                  <CancelIcon
                                    sx={{
                                      fontSize: 16,
                                      color: "#EF4444",
                                    }}
                                  />
                                )}
                              </ListItemIcon>
                              <ListItemText
                                primary={condition.label}
                                primaryTypographyProps={{
                                  fontSize: "12px",
                                  color: isValid ? "#10B981" : "#EF4444",
                                  fontWeight: 400,
                                }}
                              />
                            </ListItem>
                          );
                        })}
                        <ListItem sx={{ py: 0.25, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            {watchedPassword !== "" &&
                            watchedPassword === watchedConfirmPassword ? (
                              <CheckCircleIcon
                                sx={{
                                  fontSize: 16,
                                  color: "#10B981",
                                }}
                              />
                            ) : (
                              <CancelIcon
                                sx={{
                                  fontSize: 16,
                                  color: "#EF4444",
                                }}
                              />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary="Passwords match"
                            primaryTypographyProps={{
                              fontSize: "12px",
                              color:
                                watchedPassword !== "" &&
                                watchedPassword === watchedConfirmPassword
                                  ? "#10B981"
                                  : "#EF4444",
                              fontWeight: 400,
                            }}
                          />
                        </ListItem>
                      </List>
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
