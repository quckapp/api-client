/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateUserRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * Unique username (alphanumeric, underscore, hyphen)
     */
    username: string;
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
};

