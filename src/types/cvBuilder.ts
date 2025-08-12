export interface Profile {
    name: string; title: string; email: string; phone: string;
    location: string; website: string; summary: string;
}

export interface ExperienceItem {
    company: string; role: string; location: string;
    start: string; end: string; summary: string;
    bullets: string[];
}

export interface ProjectItem {
    name: string; link: string; description: string;
    bullets: string[];
}

export interface EducationItem {
    school: string; degree: string; field: string;
    start: string; end: string; notes: string;
}

export interface Skills {
    list: string[];
    // "Languages", "Frameworks", "Data", but support any key
    groups: Record<string, string[]>;
}

export interface Meta {
    position: string;
}