"use server";
import {prisma} from "../../prisma/prisma";
import type {Cv} from "enigma/types/models";
import {CvDTO, GenericResponse} from "enigma/types/DTOs";

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

export async function getCvByUrl(cvUrl: string): Promise<GenericResponse<Cv>> {
    try {
        const cv = await prisma.cv.findFirst({
            where: {cv_url: cvUrl}
        });
        if (!cv) {
            return {error: `CV with URL ${cvUrl} not found.`};
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

export async function createCv({user_id, cv_url, cv_title, source_document_id, maxFinalsPerUser = 5}: CvDTO): Promise<GenericResponse<Cv>> {
    try {
        const finalCount = await prisma.cv.count({
            where: {user_id}
        });
        if (finalCount >= (maxFinalsPerUser ?? 5)) {
            return {error: `Error: Reached maximum number of final CVs allowed (${maxFinalsPerUser}). Please delete an existing final CV before uploading a new one.`};
        }
        const cv = await prisma.cv.create({
            data: {
                cv_url,
                cv_title: cv_title ?? null,
                source_document_id: source_document_id ?? null,
                uploaded_time: new Date(),
                user_id: user_id
            }
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