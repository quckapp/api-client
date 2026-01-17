/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TwoFactorSetupResponse = {
    /**
     * TOTP secret for authenticator apps
     */
    secret?: string;
    /**
     * OTP auth URI for QR code
     */
    qrCodeUri?: string;
    /**
     * Base64 encoded QR code image
     */
    qrCodeImage?: string;
};

