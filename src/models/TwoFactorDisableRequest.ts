/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TwoFactorDisableRequest = {
    /**
     * 6-digit TOTP code
     */
    code: string;
    /**
     * Account password for confirmation
     */
    password: string;
};

