/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InviteMembersRequest } from '../models/InviteMembersRequest';
import type { Pagination } from '../models/Pagination';
import type { Workspace } from '../models/Workspace';
import type { WorkspaceCreateRequest } from '../models/WorkspaceCreateRequest';
import type { WorkspaceInvite } from '../models/WorkspaceInvite';
import type { WorkspaceMember } from '../models/WorkspaceMember';
import type { WorkspaceStats } from '../models/WorkspaceStats';
import type { WorkspaceUpdateRequest } from '../models/WorkspaceUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkspacesService {
    /**
     * List user's workspaces
     * Get all workspaces the current user is a member of
     * @returns any List of workspaces
     * @throws ApiError
     */
    public static listWorkspaces(): CancelablePromise<{
        workspaces?: Array<Workspace>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces',
        });
    }
    /**
     * Create workspace
     * Create a new workspace
     * @returns Workspace Workspace created
     * @throws ApiError
     */
    public static createWorkspace({
        requestBody,
    }: {
        requestBody: WorkspaceCreateRequest,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                409: `Slug already taken`,
            },
        });
    }
    /**
     * Get workspace
     * Get workspace details by ID
     * @returns Workspace Workspace details
     * @throws ApiError
     */
    public static getWorkspace({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}',
            path: {
                'workspaceId': workspaceId,
            },
            errors: {
                403: `Not a member of workspace`,
                404: `Workspace not found`,
            },
        });
    }
    /**
     * Update workspace
     * Update workspace details (admin only)
     * @returns Workspace Workspace updated
     * @throws ApiError
     */
    public static updateWorkspace({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: WorkspaceUpdateRequest,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Not authorized`,
            },
        });
    }
    /**
     * Delete workspace
     * Delete workspace (owner only)
     * @returns void
     * @throws ApiError
     */
    public static deleteWorkspace({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: {
            /**
             * Workspace name for confirmation
             */
            confirmation: string;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Not the workspace owner`,
            },
        });
    }
    /**
     * Get workspace by slug
     * Get workspace details by URL slug
     * @returns Workspace Workspace details
     * @throws ApiError
     */
    public static getWorkspaceBySlug({
        slug,
    }: {
        slug: string,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/slug/{slug}',
            path: {
                'slug': slug,
            },
            errors: {
                404: `Workspace not found`,
            },
        });
    }
    /**
     * List workspace members
     * Get all members of a workspace
     * @returns any List of members
     * @throws ApiError
     */
    public static listWorkspaceMembers({
        workspaceId,
        role,
        search,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        role?: 'member' | 'admin' | 'owner' | 'guest',
        /**
         * Search by name or email
         */
        search?: string,
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        members?: Array<WorkspaceMember>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/members',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'role': role,
                'search': search,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Get workspace member
     * Get details of a specific workspace member
     * @returns WorkspaceMember Member details
     * @throws ApiError
     */
    public static getWorkspaceMember({
        workspaceId,
        userId,
    }: {
        workspaceId: string,
        userId: string,
    }): CancelablePromise<WorkspaceMember> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/members/{userId}',
            path: {
                'workspaceId': workspaceId,
                'userId': userId,
            },
            errors: {
                404: `Member not found`,
            },
        });
    }
    /**
     * Update member role
     * Update a member's role in the workspace (admin only)
     * @returns WorkspaceMember Member updated
     * @throws ApiError
     */
    public static updateWorkspaceMember({
        workspaceId,
        userId,
        requestBody,
    }: {
        workspaceId: string,
        userId: string,
        requestBody: {
            role?: 'member' | 'admin' | 'guest';
            title?: string;
        },
    }): CancelablePromise<WorkspaceMember> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/members/{userId}',
            path: {
                'workspaceId': workspaceId,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Not authorized`,
            },
        });
    }
    /**
     * Remove member
     * Remove a member from the workspace (admin only)
     * @returns void
     * @throws ApiError
     */
    public static removeWorkspaceMember({
        workspaceId,
        userId,
    }: {
        workspaceId: string,
        userId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/members/{userId}',
            path: {
                'workspaceId': workspaceId,
                'userId': userId,
            },
            errors: {
                403: `Not authorized`,
            },
        });
    }
    /**
     * Leave workspace
     * Leave the workspace (cannot be owner)
     * @returns void
     * @throws ApiError
     */
    public static leaveWorkspace({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/leave',
            path: {
                'workspaceId': workspaceId,
            },
            errors: {
                400: `Cannot leave (owner must transfer ownership first)`,
            },
        });
    }
    /**
     * List pending invites
     * Get all pending invites for a workspace (admin only)
     * @returns any List of invites
     * @throws ApiError
     */
    public static listWorkspaceInvites({
        workspaceId,
        status,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        status?: 'pending' | 'accepted' | 'expired' | 'revoked',
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        invites?: Array<WorkspaceInvite>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/invites',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'status': status,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Invite members
     * Send workspace invitations by email (admin only)
     * @returns any Invites sent
     * @throws ApiError
     */
    public static inviteMembers({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: InviteMembersRequest,
    }): CancelablePromise<{
        sent?: number;
        failed?: Array<{
            email?: string;
            reason?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/invites',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Revoke invite
     * Revoke a pending invite
     * @returns void
     * @throws ApiError
     */
    public static revokeInvite({
        workspaceId,
        inviteId,
    }: {
        workspaceId: string,
        inviteId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/invites/{inviteId}',
            path: {
                'workspaceId': workspaceId,
                'inviteId': inviteId,
            },
            errors: {
                404: `Invite not found`,
            },
        });
    }
    /**
     * Accept invite
     * Accept a workspace invitation
     * @returns Workspace Invite accepted
     * @throws ApiError
     */
    public static acceptInvite({
        inviteCode,
    }: {
        inviteCode: string,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/invites/{inviteCode}/accept',
            path: {
                'inviteCode': inviteCode,
            },
            errors: {
                400: `Invalid or expired invite`,
                409: `Already a member`,
            },
        });
    }
    /**
     * Get workspace stats
     * Get workspace statistics
     * @returns WorkspaceStats Workspace statistics
     * @throws ApiError
     */
    public static getWorkspaceStats({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<WorkspaceStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/stats',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
    /**
     * Upload workspace icon
     * Upload a new workspace icon (admin only)
     * @returns any Icon uploaded
     * @throws ApiError
     */
    public static uploadWorkspaceIcon({
        workspaceId,
        formData,
    }: {
        workspaceId: string,
        formData: {
            icon: Blob;
        },
    }): CancelablePromise<{
        iconUrl?: string;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workspaces/{workspaceId}/icon',
            path: {
                'workspaceId': workspaceId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Remove workspace icon
     * Remove workspace icon (admin only)
     * @returns void
     * @throws ApiError
     */
    public static removeWorkspaceIcon({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/icon',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
}
