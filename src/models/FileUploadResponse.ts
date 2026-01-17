/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileUploadResponse = {
    /**
     * Reserved file ID
     */
    fileId: string;
    /**
     * Pre-signed upload URL
     */
    uploadUrl: string;
    uploadMethod?: 'PUT' | 'POST';
    /**
     * Required headers for upload
     */
    headers?: Record<string, string>;
    /**
     * When upload URL expires
     */
    expiresAt: string;
};

