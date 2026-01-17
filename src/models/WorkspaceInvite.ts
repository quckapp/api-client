/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkspaceInvite = {
    id: string;
    workspaceId: string;
    email: string;
    role?: 'member' | 'admin' | 'guest';
    /**
     * Channels to auto-add user to
     */
    channels?: Array<string>;
    /**
     * Custom invite message
     */
    message?: string;
    status: 'pending' | 'accepted' | 'expired' | 'revoked';
    expiresAt?: string;
    invitedBy?: string;
    createdAt?: string;
};

