import type {User} from "enigma/types/models";

export interface GenericResponse<T = never> {
    data?: T;
    error?: string;
    success?: string;
}

export interface PaginatedUsers {
    users: Array<User>;
    total: number;
}