"use client";
import React, { useActionState, useState } from "react";
import BigHeaderLogo from "enigma/components/common/HeaderLogo";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "enigma/schemas";
import { useForm, useWatch } from "react-hook-form";
import { loginGoogle, register } from "enigma/services/authService";

const PrimaryButton = styled(Button)({
  backgroundColor: "#2494B6",
  borderRadius: "8px",
  border: "2px solid rgba(255, 255, 255, 0.12)",
  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  padding: "10px 16px",
  width: "100%",
  color: "#FFF",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#1c7a94",
  },
});

const GoogleButton = styled(Button)({
  backgroundColor: "#FFF",
  border: "1px solid #D0D5DD",
  borderRadius: "8px",
  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  padding: "10px 16px",
  width: "100%",
  color: "#344054",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
  gap: "12px",
  "&:hover": {
    backgroundColor: "#f8f9fa",
  },
});

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

export const RegisterForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessageGoogle, dispatchGoogle] = useActionState(
    loginGoogle,
    undefined
  );
  const router = useRouter();

  // Initialize the form with react-hook-form and zod
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  // Watch password field for real-time validation
  const watchedPassword = useWatch({
    control: form.control,
    name: "password",
    defaultValue: "",
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    setError(null);
    setSuccess("");
    try {
      const res = await register(data);
      if (res.error) {
        setError(res.error);
        setLoading(false);
        setSuccess("");
      }
      if (res.success) {
        setSuccess(res.success);
        setLoading(false);
        setError("");
        router.push("/login");
      }
    } catch (err) {
      console.error("Error during registration: ", err);
      setError("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minWidth: { xs: "100%", md: "480px" },
        display: "flex",
        flexDirection: "column",
        flex: 1,
        position: "relative",
        fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      <BigHeaderLogo />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          py: 5,
          px: { xs: 3, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: "360px", width: "100%" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#101828",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "44px",
              letterSpacing: "-0.72px",
            }}
          >
            Sign up
          </Typography>

          <Box sx={{ mt: 4, width: "100%" }}>
            <Box
              component="form"
              onSubmit={form.handleSubmit(onSubmit)}
              sx={{
                width: "100%",
                gap: 2.5,
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                    Name
                  </Typography>
                </Box>
                <Box
                  component="input"
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.watch("name")}
                  onChange={(e) =>
                    form.setValue("name", e.target.value, {
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
                    border: `1px solid ${form.formState.errors.name ? "#EF4444" : "#d0d5dd"}`, // Red border on error
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
                      borderColor: form.formState.errors.name
                        ? "#EF4444"
                        : "#d0d5dd",
                    },
                    "&:focus": {
                      borderColor: form.formState.errors.name
                        ? "#EF4444"
                        : "#3b82f6", // Blue border on focus, red if error
                      boxShadow: form.formState.errors.name
                        ? "none"
                        : "0px 0px 0px 4px rgba(59, 130, 246, 0.2)",
                    },
                  }}
                />
                {form.formState.errors.name && (
                  <Typography
                    sx={{
                      color: "#EF4444",
                      fontSize: "12px",
                      mt: 0.75,
                      ml: 1.75,
                    }}
                  >
                    {form.formState.errors.name.message}
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

              <Box sx={{ width: "100%" }}>
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
                    placeholder="Create a password"
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
                  </List>
                </Box>
              </Box>
              <PrimaryButton
                variant="contained"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Get started"}
              </PrimaryButton>
              {error && <Typography color="error">{error}</Typography>}
              {success && <Typography color="success">{success}</Typography>}
            </Box>

            <Box
              sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <form action={dispatchGoogle}>
                <GoogleButton
                  variant="outlined"
                  type="submit"
                  startIcon={
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a41ff4463df85b4add89eb89c936d7f3a16142da?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
                      alt="Google logo"
                      style={{ width: 24, height: 24 }}
                    />
                  }
                >
                  Sign up with Google
                </GoogleButton>
              </form>
              {(error || errorMessageGoogle) && (
                <Typography color="error" sx={{ fontSize: "14px" }}>
                  {error || errorMessageGoogle}
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  color: "#475467",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Already have an account?
              </Typography>
              <Button
                href="/login"
                sx={{
                  color: "#2494B6",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  p: 0,
                  minWidth: "auto",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Log in
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        component="footer"
        sx={{
          position: "relative",
          width: "100%",
          height: "120px",
        }}
      >
        <Typography
          sx={{
            color: "#475467",
            fontSize: "14px",
            position: "absolute",
            left: "20px",
            bottom: "30px",
          }}
        >
          © Untitled UI 2077
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            position: "absolute",
            right: "20px",
            bottom: "30px",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be78fa20679878760d04b59e9cf722db6d7941a1?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
            alt="Email icon"
            style={{ width: 16, height: 16 }}
          />
          <Typography
            sx={{
              color: "#475467",
              fontSize: "14px",
            }}
          >
            help@enigma.com
          </Typography>
        </Box>

        <Box
          component="img"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccd12f30e766451fd873e5c7a699d0b7a2dc435?placeholderIfAbsent=true&apiKey=8ef08a3c60b44d4ba008c3e63d84c943"
          alt="Footer decoration"
          sx={{
            position: "absolute",
            right: "-67px",
            bottom: "93px",
            width: "287px",
            height: "257px",
            zIndex: "999",
            "@media (max-width: 991px)": {
              // Sử dụng max-width thay vì maxWidth
              display: "none",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "32px",
            top: "32px",
            width: "135px",
            height: "28px",
          }}
        />
      </Box>
    </Box>
  );
};
