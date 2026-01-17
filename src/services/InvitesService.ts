/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InviteMembersRequest } from '../models/InviteMembersRequest';
import type { Pagination } from '../models/Pagination';
import type { Workspace } from '../models/Workspace';
import type { WorkspaceInvite } from '../models/WorkspaceInvite';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvitesService {
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
}
