/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ShareFileRequest = {
    type: 'user' | 'channel' | 'workspace' | 'public';
    targetId: string;
    permissions?: 'view' | 'download' | 'edit';
    expiresAt?: string;
    notifyTarget?: boolean;
};

