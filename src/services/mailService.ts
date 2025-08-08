import { Resend } from 'resend';
import { VerifyEmail, ForgotEmail } from "enigma/components/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, name: string, token: string) => {
    // Check FRONTEND_URL in production, change sender email after setting up DNS records
    const confirmLink = `${process.env.FRONTEND_URL}/login/new-verification?token=${token}`;
    await resend.emails.send({
        from: "noreply@help.enigma-recruitment.com",
        to: email,
        subject: "Enigma Recruitment - Verify your email",
        react: VerifyEmail(name, confirmLink)
    })
}

export const sendResetPasswordEmail = async (email: string, name: string, token: string) => {
    // Check FRONTEND_URL in production, change sender email after setting up DNS records
    const confirmLink = `${process.env.FRONTEND_URL}/login/reset-password/change-password?token=${token}`;
    await resend.emails.send({
        from: "noreply@help.enigma-recruitment.com",
        to: email,
        subject: "Enigma Recruitment - Reset your password",
        react: ForgotEmail(name, confirmLink)
    })
}