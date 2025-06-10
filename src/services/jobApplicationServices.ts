// src/services/jobApplicationServices.ts
import { JobApplication } from 'enigma/types/models';

export async function getJobApplications(): Promise<JobApplication[]> {
    const response = await fetch('/api/jobapplications', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}