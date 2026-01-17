/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserResponse = {
    /**
     * Unique user identifier
     */
    id?: string;
    /**
     * User email address
     */
    email?: string;
    /**
     * Unique username
     */
    username?: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * Avatar image URL
     */
    avatarUrl?: string;
    /**
     * Phone number
     */
    phone?: string;
    /**
     * User timezone (IANA format)
     */
    timezone?: string;
    /**
     * Preferred locale
     */
    locale?: string;
    /**
     * User status
     */
    status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DEACTIVATED';
    /**
     * Email verification status
     */
    emailVerified?: boolean;
    /**
     * Phone verification status
     */
    phoneVerified?: boolean;
    /**
     * Last login timestamp
     */
    lastLoginAt?: string;
    /**
     * Account creation timestamp
     */
    createdAt?: string;
    /**
     * Last update timestamp
     */
    updatedAt?: string;
};

