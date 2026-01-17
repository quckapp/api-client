/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthUser } from './AuthUser';
export type AuthResponse = {
    /**
     * JWT access token
     */
    accessToken?: string;
    /**
     * Refresh token for obtaining new access tokens
     */
    refreshToken?: string;
    /**
     * Access token expiration time in seconds
     */
    expiresIn?: number;
    tokenType?: string;
    user?: AuthUser;
    /**
     * Whether 2FA is required to complete login
     */
    requiresTwoFactor?: boolean;
    /**
     * Temporary token for 2FA completion (only if requiresTwoFactor is true)
     */
    twoFactorToken?: string;
};

