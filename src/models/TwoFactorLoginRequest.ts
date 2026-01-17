/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TwoFactorLoginRequest = {
    /**
     * Temporary token from initial login
     */
    twoFactorToken: string;
    /**
     * 6-digit 2FA code
     */
    code: string;
};

