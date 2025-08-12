"use server";
import * as _cvRepository from "enigma/repositories/cvRepository";
import type {GenericResponse} from "enigma/types/DTOs";
import type {Cv, CvCreation} from "enigma/types/models";

export async function createCv(data: CvCreation): Promise<GenericResponse<Cv>> {
    const result = await _cvRepository.createCv(data);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'CV creation failed'};
    }
    return {data: result.data};
}

export async function getAllCvs(userId: string): Promise<GenericResponse<Cv[]>> {
    const result = await _cvRepository.getAllCvsByUserId(userId);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data || result.data.length === 0) {
        return {error: 'No CVs found for this user.'};
    }
    return {data: result.data};
}