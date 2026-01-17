/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfile } from './UserProfile';
export type WorkspaceMember = {
    userId: string;
    workspaceId: string;
    user?: UserProfile;
    /**
     * Member role in workspace
     */
    role: 'member' | 'admin' | 'owner' | 'guest';
    /**
     * Custom title in workspace
     */
    title?: string;
    /**
     * Whether the member is active
     */
    isActive?: boolean;
    joinedAt: string;
    /**
     * User who invited this member
     */
    invitedBy?: string;
};

