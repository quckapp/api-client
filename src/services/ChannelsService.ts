/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddMembersRequest } from '../models/AddMembersRequest';
import type { Channel } from '../models/Channel';
import type { ChannelCreateRequest } from '../models/ChannelCreateRequest';
import type { ChannelMember } from '../models/ChannelMember';
import type { ChannelNotificationSettings } from '../models/ChannelNotificationSettings';
import type { ChannelUpdateRequest } from '../models/ChannelUpdateRequest';
import type { DirectMessage } from '../models/DirectMessage';
import type { GroupDirectMessage } from '../models/GroupDirectMessage';
import type { Pagination } from '../models/Pagination';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChannelsService {
    /**
     * List channels
     * Get all channels in a workspace that the user can access
     * @returns any List of channels
     * @throws ApiError
     */
    public static listChannels({
        workspaceId,
        type,
        joined,
        search,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        type?: 'public' | 'private' | 'dm' | 'group_dm',
        /**
         * Filter to joined channels only
         */
        joined?: boolean,
        /**
         * Search by channel name
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
        channels?: Array<Channel>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'type': type,
                'joined': joined,
                'search': search,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Create channel
     * Create a new channel in the workspace
     * @returns Channel Channel created
     * @throws ApiError
     */
    public static createChannel({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: ChannelCreateRequest,
    }): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                409: `Channel name already exists`,
            },
        });
    }
    /**
     * Get channel
     * Get channel details by ID
     * @returns Channel Channel details
     * @throws ApiError
     */
    public static getChannel({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            errors: {
                403: `Not a member of private channel`,
                404: `Channel not found`,
            },
        });
    }
    /**
     * Update channel
     * Update channel details (admin only for settings)
     * @returns Channel Channel updated
     * @throws ApiError
     */
    public static updateChannel({
        workspaceId,
        channelId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        requestBody: ChannelUpdateRequest,
    }): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/channels/{channelId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Not authorized`,
            },
        });
    }
    /**
     * Delete channel
     * Delete a channel (admin only, cannot delete default channel)
     * @returns void
     * @throws ApiError
     */
    public static deleteChannel({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/channels/{channelId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            errors: {
                400: `Cannot delete default channel`,
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
    /**
     * Join channel
     * Join a public channel
     * @returns Channel Joined channel
     * @throws ApiError
     */
    public static joinChannel({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/join',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            errors: {
                403: `Cannot join private channel`,
            },
        });
    }
    /**
     * Leave channel
     * Leave a channel (cannot leave default channel)
     * @returns void
     * @throws ApiError
     */
    public static leaveChannel({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/leave',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            errors: {
                400: `Cannot leave default channel`,
            },
        });
    }
    /**
     * Archive channel
     * Archive a channel (admin only)
     * @returns Channel Channel archived
     * @throws ApiError
     */
    public static archiveChannel({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/archive',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
        });
    }
    /**
     * Unarchive channel
     * Unarchive a channel (admin only)
     * @returns Channel Channel unarchived
     * @throws ApiError
     */
    public static unarchiveChannel({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/unarchive',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
        });
    }
    /**
     * Get channel notification settings
     * Get notification settings for channel
     * @returns ChannelNotificationSettings Channel notification settings
     * @throws ApiError
     */
    public static getChannelNotifications({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<ChannelNotificationSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/notifications',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
        });
    }
    /**
     * Update channel notification settings
     * Update notification settings for channel
     * @returns ChannelNotificationSettings Settings updated
     * @throws ApiError
     */
    public static updateChannelNotifications({
        workspaceId,
        channelId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        requestBody: ChannelNotificationSettings,
    }): CancelablePromise<ChannelNotificationSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workspaces/{workspaceId}/channels/{channelId}/notifications',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List direct message channels
     * Get all DM and group DM channels
     * @returns any List of DM channels
     * @throws ApiError
     */
    public static listDirectMessages({
        workspaceId,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        channels?: Array<(DirectMessage | GroupDirectMessage)>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/dms',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Open DM channel
     * Open or create a direct message channel with a user
     * @returns DirectMessage DM channel opened
     * @throws ApiError
     */
    public static openDirectMessage({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: {
            userId: string;
        },
    }): CancelablePromise<DirectMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/dms/open',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create group DM
     * Create a new group direct message channel
     * @returns GroupDirectMessage Group DM created
     * @throws ApiError
     */
    public static createGroupDm({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: {
            userIds: Array<string>;
            name?: string;
        },
    }): CancelablePromise<GroupDirectMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/dms/group',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
