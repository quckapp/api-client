/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PhoneLoginRequest = {
    /**
     * Phone number in E.164 format
     */
    phoneNumber: string;
    /**
     * 6-digit OTP code
     */
    code: string;
    /**
     * Unique device identifier
     */
    deviceId?: string;
    /**
     * Human-readable device name
     */
    deviceName?: string;
};

