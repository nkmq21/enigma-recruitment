"use server";
import * as _cvRepository from "enigma/repositories/cvRepository";
import type {CvDTO, GenericResponse} from "enigma/types/DTOs";
import type {Cv} from "enigma/types/models";

export async function createCv(data: CvDTO): Promise<GenericResponse<Cv>> {
    const result = await _cvRepository.createCv(data);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: 'CV creation failed'};
    }
    return {data: result.data};
}

export async function getCv(input: string, type: "id" | "url"): Promise<GenericResponse<Cv>> {
    const result = type === "id"
        ? await _cvRepository.getCvById(input)
        : await _cvRepository.getCvByUrl(input);
    if (result.error) {
        return {error: result.error};
    }
    if (!result.data) {
        return {error: `CV with ${type} ${input} not found.`};
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