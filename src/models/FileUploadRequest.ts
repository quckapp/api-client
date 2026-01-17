/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileUploadRequest = {
    name: string;
    mimeType: string;
    /**
     * File size in bytes
     */
    size: number;
    channelId?: string;
    messageId?: string;
    isPublic?: boolean;
};

