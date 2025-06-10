// src/types/models.ts
export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    role: string;
    status: string;
    image?: string;
    dob?: Date;
    address?: string;
}

export interface UserRegister {
    email: string;
    name: string;
    image?: string;
    dob?: Date;
    address?: string;
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
    cv_id: number;
    user_id: number;
    cv_url: string;
    uploaded_time: Date;
    cv_title?: string;
    status?: string;
}

export interface JobApplication {
    application_id: number;
    user_id: number;
    cv_id: number;
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
    };
}

export interface VerificationToken {
    identifier: string;
    email: string;
    token: string;
    expires: Date;
}