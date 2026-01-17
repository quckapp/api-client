/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeviceToken = {
    /**
     * Device push token
     */
    token: string;
    platform: 'ios' | 'android' | 'web';
    /**
     * Unique device identifier
     */
    deviceId?: string;
    /**
     * Device name
     */
    deviceName?: string;
};

