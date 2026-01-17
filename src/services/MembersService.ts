/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddMembersRequest } from '../models/AddMembersRequest';
import type { ChannelMember } from '../models/ChannelMember';
import type { Pagination } from '../models/Pagination';
import type { WorkspaceMember } from '../models/WorkspaceMember';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MembersService {
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
     * List channel members
     * Get all members of a channel
     * @returns any List of channel members
     * @throws ApiError
     */
    public static listChannelMembers({
        workspaceId,
        channelId,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        channelId: string,
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        members?: Array<ChannelMember>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/members',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Add members
     * Add members to a channel
     * @returns any Members added
     * @throws ApiError
     */
    public static addChannelMembers({
        workspaceId,
        channelId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        requestBody: AddMembersRequest,
    }): CancelablePromise<{
        added?: number;
        alreadyMembers?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/members',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get channel member
     * Get details of a channel member
     * @returns ChannelMember Channel member details
     * @throws ApiError
     */
    public static getChannelMember({
        workspaceId,
        channelId,
        userId,
    }: {
        workspaceId: string,
        channelId: string,
        userId: string,
    }): CancelablePromise<ChannelMember> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/members/{userId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'userId': userId,
            },
            errors: {
                404: `Member not found`,
            },
        });
    }
    /**
     * Update channel member
     * Update member role in channel (channel admin only)
     * @returns ChannelMember Member updated
     * @throws ApiError
     */
    public static updateChannelMember({
        workspaceId,
        channelId,
        userId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        userId: string,
        requestBody: {
            role?: 'member' | 'admin';
        },
    }): CancelablePromise<ChannelMember> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/channels/{channelId}/members/{userId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove channel member
     * Remove a member from the channel
     * @returns void
     * @throws ApiError
     */
    public static removeChannelMember({
        workspaceId,
        channelId,
        userId,
    }: {
        workspaceId: string,
        channelId: string,
        userId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/channels/{channelId}/members/{userId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'userId': userId,
            },
        });
    }
}
