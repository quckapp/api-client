/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * File attached to a message
 */
export type FileAttachment = {
    id?: string;
    name?: string;
    mimeType?: string;
    size?: number;
    url?: string;
    thumbnailUrl?: string;
    category?: 'image' | 'video' | 'audio' | 'document' | 'spreadsheet' | 'presentation' | 'archive' | 'code' | 'other';
};

