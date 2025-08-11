export const initial = {
    profile: {
        name: "Alex Candidate",
        title: "Frontend Engineer",
        email: "alex@example.com",
        phone: "+1234567890",
        location: "Hanoi, VN",
        website: "https://alexcandidate.com",
        summary: "4+ yrs React/TypeScript focusing on DX & performance.",
    },
    experience: [
        {
            company: "Acme Corp",
            role: "Senior FE",
            location: "Remote",
            start: "2023",
            end: "2025",
            summary: "Led job board redesign, +18% apply CTR.",
            bullets: [
                "Implemented a new design system with Figma.",
                "Optimized performance, reducing load time by 30%.",
                "Mentored junior developers on React best practices.",
            ],
        },
        {
            company: "Startup X",
            role: "FE Engineer",
            location: "HCMC",
            start: "2021",
            end: "2023",
            summary: "Built a component library with Storybook.",
            bullets: [
                "Developed reusable components for internal tools.",
                "Improved code quality with TypeScript and ESLint.",
                "Collaborated with designers to implement UI changes.",
            ],
        },
    ],
    projects: [
        {
            name: "Portfolio Website",
            link: "https://alexcandidate.com",
            description: "A personal portfolio showcasing my work and skills.",
            bullets: [
                "Built with Next.js and Tailwind CSS.",
                "Includes a blog section for sharing insights.",
                "Optimized for SEO and performance.",
            ],
        },
    ],
    education: [
        {
            school: "University of Technology",
            degree: "Bachelor of Computer Science",
            field: "Software Engineering",
            start: "2017",
            end: "2021",
            notes: "Graduated with honors, GPA: 3.8/4.0",
        },
    ],
    skills: {
        list: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        groups: {
            Languages: ["TypeScript", "JavaScript"],
            Frameworks: ["React", "Next.js"],
            Data: ["Prisma", "PostgreSQL"],
        },
    },
    meta: {
        position: "Frontend Engineer",
        generated_by: "enigma-recruitment.com",
    },
};