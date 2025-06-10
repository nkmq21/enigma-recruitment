import {Resend} from 'resend';
import {VerifyEmail, ForgotEmail} from "enigma/components/emailTemplates/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, name: string, token: string) => {
    // TODO: Check FRONTEND_URL in production, change sender email after setting up DNS records
    const confirmLink = `${process.env.FRONTEND_URL}/login/new-verification?token=${token}`;
    await resend.emails.send({
        from: "noreply@help.enigma-recruitment.com",
        to: email,
        subject: "Enigma Recruitment - Verify your email",
        react: VerifyEmail(name, confirmLink)
    })
}