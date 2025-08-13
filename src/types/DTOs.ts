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

export interface CvDTO {
    user_id: string;
    cv_url: string;
    cv_title?: string | null;
    source_document_id?: string | null;
    maxFinalsPerUser?: number | null;
    uploaded_time?: Date | null;
}

export interface CvDocumentDTO {
    user_id: string;
    template_key: string;
    data: unknown;
    draftLimit?: number;
}