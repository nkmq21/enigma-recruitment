export interface GenericResponse<T = never> {
    data?: T;
    error?: string;
    success?: string;
    message?: string;
}

export interface PaginatedResponse<T> {
    items: Array<T>;
    meta: {
        total: number;
        page?: number;
        limit?: number;
        totalPages?: number;
    }
}