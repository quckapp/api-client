/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DevicePresence = {
    deviceId?: string;
    deviceType?: 'desktop' | 'mobile' | 'web' | 'tablet';
    platform?: 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'web';
    isActive?: boolean;
    lastActiveAt?: string;
    appVersion?: string;
};

