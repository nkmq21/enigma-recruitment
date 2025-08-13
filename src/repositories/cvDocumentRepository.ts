import {prisma} from "../../prisma/prisma";
import {Prisma} from "@prisma/client";
import {CvDocumentDTO, GenericResponse} from "enigma/types/DTOs";
import {CvDocument} from "enigma/types/models";

export async function createCvDocument({user_id, template_key, data, draftLimit = 5}: CvDocumentDTO): Promise<GenericResponse<CvDocument>> {
    try {
        // Find the last draft version for this user
        const last = await prisma.cv_documents.findFirst({
            where: {cv_id: null, user_id},
            select: {version: true},
            orderBy: {version: "desc"},
        });

        // Calculate the next version number
        // If no last version exists, start from 0
        // This allows us to always have a version number even if no drafts exist
        const nextVersion = (last?.version ?? 0) + 1;

        // Prune oldest drafts so that AFTER insert we keep <= draftLimit
        const count = await prisma.cv_documents.count({where: {cv_id: null, user_id}});
        if (count >= draftLimit) {
            const toDelete = await prisma.cv_documents.findMany({
                where: {cv_id: null, user_id},
                select: {id: true},
                orderBy: [{created_at: "asc"}, {id: "asc"}],
                take: count - (draftLimit - 1), // keep room for the incoming one
            });
            if (toDelete.length) {
                await prisma.cv_documents.deleteMany({where:
                        {id: {in: toDelete.map(x => x.id)}}});
            }
        }

        const result = await prisma.cv_documents.create({
            data: {
                cv_id: null,
                user_id,
                template_key,
                data: data as Prisma.JsonObject,
                version: nextVersion,
            },
        });
        return {data: result};
    } catch (error) {
        return {
            error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.',
        };
    }
}

export async function getAllDrafts(user_id: string, limit = 5): Promise<GenericResponse<CvDocument[]>> {
    try {
        // Fetch the latest drafts for the user, ordered by creation date and ID
        const drafts = await prisma.cv_documents.findMany({
            where: {cv_id: null, user_id},
            orderBy: [{created_at: "desc"}, {id: "desc"}],
            take: limit,
        });

        if (!drafts || drafts.length === 0) {
            return {error: 'No drafts found for this user.'};
        }
        return {data: drafts};
    } catch (error) {
        return {
            error: error instanceof Error
                ? `Database error: ${error.message}`
                : 'An unexpected error occurred.',
        };
    }
}