"use server";
import {prisma} from "../../prisma/prisma";
import type {Cv, CvCreation} from "enigma/types/models";
import {GenericResponse} from "enigma/types/DTOs";

export async function createCv(data: CvCreation): Promise<GenericResponse<Cv>> {
    try {
        const cvCount = await prisma.cv.count({
            where: {user_id: data.user_id}
        });
        if (cvCount >= 3) {
            return {error: 'Error: Reached maximum number of CVs allowed (3). Please delete an existing CV before uploading a new one.'};
        }
        const cv = await prisma.cv.create({
            data
        });

        return {data: cv};
    } catch (error) {
        return {
            error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.',
        };
    }
}

export async function getAllCvsByUserId(userId: string): Promise<GenericResponse<Cv[]>> {
    try {
        const cvs = await prisma.cv.findMany({
            where: {user_id: userId}
        });
        if (!cvs || cvs.length === 0) {
            return {error: 'No CVs found for this user.'};
        }
        return {data: cvs};
    } catch (error) {
        return {
            error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.',
        };
    }
}

export async function getCvById(cvId: string): Promise<GenericResponse<Cv>> {
    try {
        const cv = await prisma.cv.findUnique({
            where: {cv_id: cvId}
        });
        if (!cv) {
            return {error: `CV with ID ${cvId} not found.`};
        }
        return {data: cv};
    } catch (error) {
        return {
            error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.',
        };
    }
}