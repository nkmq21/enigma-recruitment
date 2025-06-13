export interface JobFunctionData {
    jobFunctions: string;
    jobSubfunctions: string[];
}

export const JOB_FUNCTION: JobFunctionData[] = [
    {
        jobFunctions: 'Accounting',
        jobSubfunctions: [
            'Accounts Officers/Clerks', 'Accounts Payable', 'Accounts Receivable/Credit Control',
            'Analysis & Reporting', 'Assistant Accountants', 'Audit - External', 'Audit - Internal',
            'Bookkeeping & Small Practice Accounting', 'Business Services & Corporate Advisory',
            'Company Secretaries', 'Compliance & Risk', 'Cost Accounting', 'Financial Accounting & Reporting',
            'Financial Managers & Controllers', 'Forensic Accounting & Investigation',
            'Insolvency & Corporate Recovery', 'Inventory & Fixed Assets', 'Management',
            'Management Accounting & Budgeting', 'Payroll', 'Strategy & Planning',
            'Systems Accounting & IT Audit', 'Taxation', 'Treasury', 'Others'
        ]
    },
    {
        jobFunctions: 'Administration & Office Support',
        jobSubfunctions: [
            'Administrative Assistants', 'Client & Sales Administration', 'Contracts Administration',
            'Data Entry & Word Processing', 'Office Management', 'PA, EA & Secretarial',
            'Receptionists', 'Records Management & Document Control', 'Others'
        ]
    },
    {
        jobFunctions: 'Advertising, Arts & Media',
        jobSubfunctions: [
            'Agency Account Management', 'Art Direction', 'Editing & Publishing',
            'Event Management', 'Journalism & Writing', 'Management',
            'Media Strategy, Planning & Buying', 'Performing Arts', 'Photography',
            'Programming & Production', 'Promotions', 'Others'
        ]
    },
    {
        jobFunctions: 'Banking & Financial Services',
        jobSubfunctions: [
            'Account & Relationship Management', 'Analysis & Reporting', 'Banking - Business',
            'Banking - Corporate & Institutional', 'Banking - Retail/Branch', 'Client Services',
            'Compliance & Risk', 'Corporate Finance & Investment Banking', 'Credit',
            'Financial Planning', 'Funds Management', 'Management',
            'Mortgages', 'Settlements', 'Stockbroking & Trading', 'Treasury', 'Others'
        ]
    },
    {
        jobFunctions: 'Call Center & Customer Services',
        jobSubfunctions: [
            'Collections', 'Customer Service - Call Centre', 'Customer Service - Customer Facing',
            'Management & Support', 'Sales - Inbound', 'Sales - Outbound',
            'Supervisors/Team Leaders', 'Others'
        ]
    },
    {
        jobFunctions: 'CEO & General Management',
        jobSubfunctions: [
            'Board Appointments', 'CEO', 'COO & MD', 'General/Business Unit Manager', 'Others'
        ]
    },
    {
        jobFunctions: 'Community Services & Development',
        jobSubfunctions: [
            'Aged & Disability Support', 'Child Welfare, Youth & Family Services',
            'Community Development', 'Employment Services', 'Fundraising',
            'Housing & Homelessness Services', 'Indigenous & Multicultural Services',
            'Management', 'Volunteer Coordination & Support', 'Others'
        ]
    },
    {
        jobFunctions: 'Construction',
        jobSubfunctions: [
            'Contracts Management', 'Estimating', 'Foreperson/Supervisors',
            'Health, Safety & Environment', 'Management', 'Planning & Scheduling',
            'Plant & Machinery Operators', 'Project Management',
            'Quality Assurance & Control', 'Surveying', 'Others'
        ]
    },
    {
        jobFunctions: 'Consulting & Strategy',
        jobSubfunctions: [
            'Analysts', 'Corporate Development', 'Environment & Sustainability Consulting',
            'Management & Change Consulting', 'Policy', 'Strategy & Planning', 'Others'
        ]
    },
    {
        jobFunctions: 'Design & Architecture',
        jobSubfunctions: [
            'Architectural Drafting', 'Architecture', 'Fashion & Textile Design',
            'Graphic Design', 'Illustration & Animation', 'Industrial Design',
            'Interior Design', 'Landscape Architecture', 'Urban Design & Planning',
            'Web & Interaction Design', 'Others'
        ]
    },
    {
        jobFunctions: 'Education & Training',
        jobSubfunctions: [
            'Childcare & Outside School Hours Care', 'Library Services & Information Management',
            'Management - Schools', 'Management - Universities', 'Management - Vocational',
            'Research & Fellowships', 'Student Services', 'Teaching - Early Childhood',
            'Teaching - Primary', 'Teaching - Secondary', 'Teaching - Tertiary',
            'Teaching - Vocational', 'Teaching Aides & Special Needs', 'Tutoring',
            'Workplace Training & Assessment', 'Others'
        ]
    },
    {
        jobFunctions: 'Engineering',
        jobSubfunctions: [
            'Process Engineering', 'Maintenance Engineering', 'Project Engineering',
            'Program Engineering', 'Continuous Improvement', 'LEAN Engineering',
            'Design Engineering', 'Manufacturing Engineering'
        ]
    },
    {
        jobFunctions: 'Farming, Animals & Conservation',
        jobSubfunctions: [
            'Agronomy & Farm Services', 'Conservation, Parks & Wildlife', 'Farm Labour',
            'Farm Management', 'Fishing & Aquaculture', 'Horticulture',
            'Veterinary Services & Animal Welfare', 'Winery & Viticulture', 'Others'
        ]
    },
    {
        jobFunctions: 'Government & Defense',
        jobSubfunctions: [
            'Air Force', 'Army', 'Emergency Services', 'Government - Federal',
            'Government - Local', 'Government - State', 'Navy', 'Police & Corrections',
            'Policy, Planning & Regulation', 'Others'
        ]
    },
    {
        jobFunctions: 'Healthcare & Medical',
        jobSubfunctions: [
            'Ambulance/Paramedics', 'Chiropractic & Osteopathic', 'Clinical/Medical Research',
            'Dental', 'Dietitians', 'Environmental Services', 'General Practitioners',
            'Management', 'Medical Administration', 'Medical Imaging', 'Medical Specialists',
            'Natural Therapies & Alternative Medicine', 'Nursing - A&E, Critical Care & ICU',
            'Nursing - Aged Care', 'Nursing - Community, Maternal & Child Health',
            'Nursing - Educators & Facilitators', 'Nursing - General Medical & Surgical',
            'Nursing - High Acuity', 'Nursing - Management',
            'Nursing - Midwifery, Neo-Natal, SCN & NICU', 'Nursing - Paediatric & PICU',
            'Nursing - Psych, Forensic & Correctional Health', 'Nursing - Theatre & Recovery',
            'Optical', 'Pathology', 'Pharmaceuticals & Medical Devices', 'Pharmacy',
            'Physiotherapy, OT & Rehabilitation', 'Psychology, Counselling & Social Work',
            'Residents & Registrars', 'Sales', 'Speech Therapy', 'Others'
        ]
    }
];

export const getJobFunctions = () => {
    return JOB_FUNCTION.map(jobFunction => jobFunction.jobFunctions).sort((a, b) => a.localeCompare(b))
}

export const getJobSubfunctionsByJobFunction = (jobFunction: string): string[] => {
    const jobFunctions = JOB_FUNCTION.find(jobFunc => jobFunc.jobFunctions === jobFunction);
    return jobFunctions ? jobFunctions.jobSubfunctions : [];
}

export const jobFunctionSearch = (keyword: string): string[] => {
    return JOB_FUNCTION.map(jobFunction => jobFunction.jobFunctions)
        .filter(jobFunction => jobFunction.toLowerCase().includes(keyword));
}
