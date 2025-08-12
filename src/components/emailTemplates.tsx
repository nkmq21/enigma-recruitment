import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    confirmLink: string;
}

export const EmailTemplates: React.FC<Readonly<EmailTemplateProps>> = ({name, confirmLink}: EmailTemplateProps) => (
    <div>
        <h1>Welcome, {name}!</h1>
        <h2>Click <a href={confirmLink}>here</a> to confirm your account.</h2>
    </div>
);

export const EmailTemplateHTML = ({name, confirmLink}: EmailTemplateProps) => (
    `<div>
        <h1>Welcome, ${name}!</h1>
        <h2>Click <a href="${confirmLink}">here</a> to confirm your account.</h2>
    </div>`
);

export function VerifyEmail(name: string, verificationUrl: string) {
    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                padding: '20px',
                fontFamily: "'Inter', Arial, sans-serif",
                lineHeight: '1.5',
                color: '#475467',
            }}
        >
            <table
                role="presentation"
                style={{
                    maxWidth: '500px',
                    width: '100%',
                    margin: '0 auto',
                    borderCollapse: 'collapse',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                }}
            >
                <tbody>
                <tr>
                    <td style={{padding: '15px'}}>
                        <img
                            src="https://raw.githubusercontent.com/yeetingthots69/enigma-recruitment/d1d456e827ae4fc0a39d211ba32bbbabc0583f8f/public/Logo2.svg"
                            alt="Career Logo"
                            style={{width: '135px', height: '28px', display: 'block'}}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <hr
                            style={{
                                margin: '8px 0',
                                border: '0',
                                borderTop: '1px solid #e4e7ec',
                                width: '100%',
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td style={{padding: '16px', textAlign: 'center'}}>
                        {/* Icon and Title */}
                        <div style={{marginBottom: '16px'}}>
                            <img
                                src="https://raw.githubusercontent.com/yeetingthots69/enigma-recruitment/d1d456e827ae4fc0a39d211ba32bbbabc0583f8f/public/email-icon.svg"
                                alt="Email Icon"
                                style={{
                                    width: '50px', height: '50px', display: 'block', margin: '0 auto'
                                }}
                            />
                            <h3
                                style={{
                                    fontSize: '28px',
                                    lineHeight: '32px',
                                    fontWeight: '600',
                                    color: '#101828',
                                    marginTop: '8px',
                                    marginBottom: '0',
                                }}
                            >
                                Verify Your Email Address
                            </h3>
                        </div>

                        {/* Greeting Message */}
                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#475467',
                                margin: '0 0 24px',
                            }}
                        >
                            Hi {name}, let’s get started! Confirm your email to unlock your account.
                        </p>

                        {/* Chip for Time Limit */}
                        <span
                            style={{
                                display: 'inline-block',
                                padding: '4px 8px',
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: '#ed6c02',
                                border: '1px solid #ed6c02',
                                borderRadius: '16px',
                                marginBottom: '24px',
                            }}
                        >
                            Link expires in 1 hour
                        </span>
                        {/* Verification Button */}
                        <a
                            href={verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                width: '95%',
                                padding: '12px 12px',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                backgroundColor: '#2494b6',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                marginBottom: '24px',
                            }}
                        >
                            Activate My Account
                        </a>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            backgroundColor: '#effbfc',
                            padding: '16px',
                            textAlign: 'center',
                        }}
                    >
                        {/* Alternative URL Copy Option */}
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: '#475467',
                                margin: '0 0 8px',
                            }}
                        >
                            Can&#39;t click the button above? Copy the link below:
                        </p>
                        <table
                            role="presentation"
                            style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                margin: '0 auto',
                                maxWidth: '90%',
                            }}
                        >
                            <tbody>
                            <tr>
                                <td style={{padding: '0', textAlign: 'left'}}>
                                <span style={{
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: '#2494b6',
                                        wordBreak: 'break-word',
                                        display: 'inline-block',
                                        textAlign: "center"
                                    }}
                                >
                                    {verificationUrl}
                                </span>
                                </td>
                                <td style={{padding: '0', textAlign: 'right'}}>
                                    <a
                                        href={verificationUrl}
                                        target="_blank"
                                        style={{
                                            display: 'inline-block',
                                            padding: '4px 8px',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            fontWeight: '600',
                                            color: '#2494b6',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Copy
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{padding: '0 16px 24px', textAlign: 'center'}}>
                        {/* Support Section */}
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: '#475467',
                                margin: '0',
                            }}
                        >
                            Need help?{' '}
                            <a
                                href="mailto:help@help.enigma-recruitment.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#2494b6',
                                    textDecoration: 'none',
                                }}
                            >
                                Contact help@enigma.com
                            </a>
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export function ForgotEmail(name: string, verificationUrl: string) {
    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3dfe2 100%)',
                padding: '20px',
                fontFamily: "'Inter', Arial, sans-serif",
                lineHeight: '1.5',
                color: '#475467',
            }}
        >
            <table
                role="presentation"
                style={{
                    maxWidth: '500px',
                    width: '100%',
                    margin: '0 auto',
                    borderCollapse: 'collapse',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                }}
            >
                <tbody>
                <tr>
                    <td style={{padding: '15px'}}>
                        <img
                            src="https://raw.githubusercontent.com/yeetingthots69/enigma-recruitment/da8a9edf179626b8ba6af2e414f31b0837bcf8c3/public/Logo2.svg"
                            alt="Career Logo"
                            style={{width: '135px', height: '28px', display: 'block'}}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <hr
                            style={{
                                margin: '8px 0',
                                border: '0',
                                borderTop: '1px solid #e4e7ec',
                                width: '100%',
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td style={{padding: '16px', textAlign: 'center'}}>
                        {/* Icon and Title */}
                        <div style={{marginBottom: '16px'}}>
                            <img
                                src="https://raw.githubusercontent.com/yeetingthots69/enigma-recruitment/d1d456e827ae4fc0a39d211ba32bbbabc0583f8f/public/lock-icon.svg"
                                alt="Lock Icon"
                                style={{width: '50px', height: '50px', display: 'block', margin: '0 auto'}}
                            />
                            <h3
                                style={{
                                    fontSize: '24px',
                                    lineHeight: '28px',
                                    fontWeight: '600',
                                    color: '#101828',
                                    marginTop: '8px',
                                    marginBottom: '0',
                                }}
                            >
                                Forgot Your Password?
                            </h3>
                        </div>

                        {/* Greeting Message */}
                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#475467',
                                margin: '0 0 24px',
                            }}
                        >
                            It seems like you forgot your account password. If this is true, click the link
                            below to reset your password.
                        </p>

                        {/* Chip for Time Limit */}
                        <span
                            style={{
                                display: 'inline-block',
                                padding: '4px 8px',
                                fontSize: '12px',
                                lineHeight: '18px',
                                color: '#ed6c02',
                                border: '1px solid #ed6c02',
                                borderRadius: '16px',
                                marginBottom: '24px',
                            }}
                        >
                            Link expires in 1 hour
                        </span>

                        {/* Verification Button */}
                        <a
                            href={verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                width: '95%',
                                padding: '12px 12px',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                backgroundColor: '#2494b6',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                marginBottom: '24px',
                            }}
                        >
                            Reset a New Password
                        </a>
                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#475467',
                                margin: '0 0 24px',
                            }}
                        >
                            If you did not forget your password, you can safely ignore this email.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td
                        style={{
                            backgroundColor: '#effbfc',
                            padding: '16px',
                            textAlign: 'center',
                        }}
                    >
                        {/* Alternative URL Copy Option */}
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: '#475467',
                                margin: '0 0 8px',
                            }}
                        >
                            Can&#39;t click the button above? Copy the link below:
                        </p>
                        <table
                            role="presentation"
                            style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                margin: '0 auto',
                                maxWidth: '90%',
                            }}
                        >
                            <tbody>
                            <tr>
                                <td style={{padding: '0', textAlign: 'left'}}>
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: '#2494b6',
                                            wordBreak: 'break-word',
                                            display: 'inline-block',
                                            textAlign: "center"
                                        }}
                                    >
                                        {verificationUrl}
                                    </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{
                        padding: '0 16px 24px', textAlign: 'center'
                    }}>
                        {/* Support Section */}
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: '#475467',
                                margin: '0',
                            }}
                        >
                            Need help?{' '}
                            <a
                                href="mailto:help@help.enigma-recruitment.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#2494b6',
                                    textDecoration: 'none',
                                }}
                            >
                                Contact help@enigma.com
                            </a>
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}