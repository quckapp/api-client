/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Compact user profile for embedding in messages, channels, etc.
 */
export type UserProfile = {
    id?: string;
    username?: string;
    displayName?: string;
    /**
     * Avatar image URL
     */
    avatarUrl?: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DEACTIVATED';
    /**
     * Current presence status
     */
    presence?: 'online' | 'away' | 'busy' | 'offline';
};

