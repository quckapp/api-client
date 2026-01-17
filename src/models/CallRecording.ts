/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CallRecording = {
    id?: string;
    status?: 'recording' | 'processing' | 'ready' | 'failed';
    startedAt?: string;
    endedAt?: string;
    /**
     * Recording duration in seconds
     */
    duration?: number;
    /**
     * File size in bytes
     */
    fileSize?: number;
    /**
     * Download URL (when ready)
     */
    url?: string;
    /**
     * Transcript download URL
     */
    transcriptUrl?: string;
    /**
     * When recording expires
     */
    expiresAt?: string;
};

