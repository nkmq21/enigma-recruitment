import * as _docRepo from "enigma/repositories/cvDocumentRepository";
import type {GenericResponse, CvDocumentDTO} from "enigma/types/DTOs";
import type {CvDocument} from "enigma/types/models";

export async function createDraft(input: CvDocumentDTO): Promise<GenericResponse<CvDocument>> {
    try {
        const result = await _docRepo.createCvDocument(input);
        if (result.error) {
            return {error: result.error};
        }
        if (!result.data) {
            return {error: 'Draft creation failed'};
        }
        return {data: result.data};
    } catch (e: any) {
        return {error: e?.message ?? "Unknown error"};
    }
}

export async function getDrafts(user_id: string, limit = 5): Promise<GenericResponse<CvDocument[]>> {
    try {
        const result = await _docRepo.getAllDrafts(user_id, limit);
        if (result.error) {
            return {error: result.error};
        }
        if (!result.data || result.data.length === 0) {
            return {error: 'No drafts found for this user.'};
        }
        return {data: result.data};
    } catch (e: any) {
        return {error: e?.message ?? "Unknown error"};
    }
}