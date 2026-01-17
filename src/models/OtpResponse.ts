/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthUser } from './AuthUser';
export type OtpResponse = {
    success?: boolean;
    message?: string;
    expiresInSeconds?: number;
    /**
     * JWT access token (only on successful login)
     */
    accessToken?: string;
    /**
     * Refresh token (only on successful login)
     */
    refreshToken?: string;
    /**
     * Token expiration (only on successful login)
     */
    expiresIn?: number;
    user?: AuthUser;
    /**
     * Whether this is a newly created account
     */
    isNewUser?: boolean;
};

