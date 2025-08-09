import type { User } from "enigma/types/models";

export interface GenericResponse<T = never> {
    data?: T;
    error?: string;
    success?: string;
    message?: string;
}

export interface PaginatedUsers {
    users: Array<User>;
    total: number;
}

export interface PageginatedResponse<T> {
    items: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }
}