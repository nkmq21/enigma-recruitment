// src/types/models.ts
export interface User {
    id: string;
    email: string;
    name: string;
    password: string | null;
    role: string;
    status: string;
    image?: string | null;
    dob?: Date | null;
    address?: string | null;
    emailVerified?: Date | null;
}

export interface UserRegister {
    email: string;
    name: string;
    password: string | null;
    image?: string | null;
    dob?: Date | null;
    address?: string | null;
    emailVerified?: Date | null;
}

export interface Account {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
}

export interface VerificationToken {
    identifier: string;
    email: string;
    token: string;
    expires: Date;
}

export interface ResetPasswordToken {
    identifier: string;
    email: string;
    token: string;
    expires: Date;
}

export interface Industry {
    industry_id: string;
    industry_name: string;
}

export interface JobFunction {
    job_function_id: string;
    job_function_name: string;
}

export interface JobSubfunction {
    job_subfunction_id: string;
    job_subfunction_name: string;
}

export interface Job {
    job_id: string;
    job_title: string;
    description: string;
    salary_range_start: number;
    salary_range_end: number;
    created_date: Date;
    close_date: Date;
    industry: {
        industry_id: string;
        industry_name: string;
    },
    job_function: {
        job_function_id: string;
        job_function_name: string;
    }
    subfunction: {
        job_subfunction_id: string;
        job_subfunction_name: string;
    },
    location: string;
    status: string;
    employment_type: string;
}

export interface Cv {
    cv_id: string | null;
    user_id?: string | null;
    cv_url?: string;
    uploaded_time?: Date;
    cv_title?: string | null;
    status?: string | null;
}

export interface CvDocument {
    id: string;
    cv_id?: string | null;
    template_key: string;
    data: unknown;
    version: number;
    created_at: Date;
    updated_at: Date;
    user_id: string;
}

export interface JobApplication {
    application_id: string;
    user_id: string;
    cv_id: string;
    applied_time: Date;
    status: string;
    job: {
        job_id: string;
        job_title: string;
        employment_type: string;
        industry: {
            industry_id: string;
            industry_name: string
        };
        job_function: {
            job_function_id: string;
            job_function_name: string
        };
        subfunction: {
            job_subfunction_id: string;
            job_subfunction_name: string
        };
        location: string;
        status: string;
    };
}

export interface VerificationToken {
    identifier: string;
    email: string;
    token: string;
    expires: Date;
}