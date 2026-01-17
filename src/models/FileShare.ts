/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileShare = {
    id: string;
    /**
     * Share type
     */
    type: 'user' | 'channel' | 'workspace' | 'public';
    /**
     * ID of user/channel/workspace
     */
    targetId: string;
    permissions?: 'view' | 'download' | 'edit';
    sharedBy?: string;
    sharedAt?: string;
    expiresAt?: string;
};

