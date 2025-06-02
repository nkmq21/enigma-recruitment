import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({name, confirmLink}: EmailTemplateProps) => (
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