/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfile } from './UserProfile';
/**
 * Condensed message for lists and previews
 */
export type MessagePreview = {
    id?: string;
    userId?: string;
    user?: UserProfile;
    /**
     * Truncated content
     */
    content?: string;
    type?: 'text' | 'system' | 'bot';
    hasAttachments?: boolean;
    createdAt?: string;
};

