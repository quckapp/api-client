/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TokenResponse = {
    /**
     * JWT access token
     */
    accessToken: string;
    /**
     * New refresh token
     */
    refreshToken: string;
    /**
     * Access token expiration time in seconds
     */
    expiresIn: number;
    tokenType?: string;
};

