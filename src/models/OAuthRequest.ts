/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OAuthRequest = {
    /**
     * Authorization code from OAuth provider
     */
    code: string;
    /**
     * Redirect URI used in authorization request
     */
    redirectUri: string;
    /**
     * Unique device identifier
     */
    deviceId?: string;
    /**
     * Human-readable device name
     */
    deviceName?: string;
};

