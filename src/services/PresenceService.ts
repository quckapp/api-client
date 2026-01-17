/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityStatus } from '../models/ActivityStatus';
import type { BulkPresenceResponse } from '../models/BulkPresenceResponse';
import type { ChannelPresence } from '../models/ChannelPresence';
import type { Presence } from '../models/Presence';
import type { PresencePreferences } from '../models/PresencePreferences';
import type { PresenceSubscription } from '../models/PresenceSubscription';
import type { SetTypingRequest } from '../models/SetTypingRequest';
import type { UpdatePresenceRequest } from '../models/UpdatePresenceRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PresenceService {
    /**
     * Get current user presence
     * Get the current user's presence status
     * @returns Presence Current presence
     * @throws ApiError
     */
    public static getCurrentPresence(): CancelablePromise<Presence> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/presence',
        });
    }
    /**
     * Update presence
     * Update current user's presence status
     * @returns Presence Presence updated
     * @throws ApiError
     */
    public static updatePresence({
        requestBody,
    }: {
        requestBody: UpdatePresenceRequest,
    }): CancelablePromise<Presence> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/presence',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get user presence
     * Get presence status for a specific user
     * @returns Presence User presence
     * @throws ApiError
     */
    public static getUserPresence({
        userId,
    }: {
        userId: string,
    }): CancelablePromise<Presence> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/presence/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Get bulk presence
     * Get presence for multiple users at once
     * @returns BulkPresenceResponse Bulk presence data
     * @throws ApiError
     */
    public static getBulkPresence({
        requestBody,
    }: {
        requestBody: {
            userIds: Array<string>;
        },
    }): CancelablePromise<BulkPresenceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/presence/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Set typing indicator
     * Indicate user is typing in a channel/thread
     * @returns any Typing indicator set
     * @throws ApiError
     */
    public static setTyping({
        requestBody,
    }: {
        requestBody: SetTypingRequest,
    }): CancelablePromise<{
        success?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/presence/typing',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Stop typing indicator
     * Clear typing indicator
     * @returns any Typing indicator cleared
     * @throws ApiError
     */
    public static stopTyping({
        requestBody,
    }: {
        requestBody: SetTypingRequest,
    }): CancelablePromise<{
        success?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/presence/typing/stop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Subscribe to presence updates
     * Subscribe to real-time presence updates for users
     * @returns any Subscribed to presence
     * @throws ApiError
     */
    public static subscribePresence({
        requestBody,
    }: {
        requestBody: PresenceSubscription,
    }): CancelablePromise<{
        subscriptionId?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/presence/subscribe',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unsubscribe from presence updates
     * Unsubscribe from real-time presence updates
     * @returns void
     * @throws ApiError
     */
    public static unsubscribePresence({
        requestBody,
    }: {
        requestBody: {
            subscriptionId: string;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/presence/unsubscribe',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get detailed activity
     * Get detailed activity status for current user
     * @returns ActivityStatus Activity status
     * @throws ApiError
     */
    public static getActivityStatus(): CancelablePromise<ActivityStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/presence/activity',
        });
    }
    /**
     * Get presence preferences
     * Get user's presence visibility preferences
     * @returns PresencePreferences Presence preferences
     * @throws ApiError
     */
    public static getPresencePreferences(): CancelablePromise<PresencePreferences> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/presence/preferences',
        });
    }
    /**
     * Update presence preferences
     * Update user's presence visibility preferences
     * @returns PresencePreferences Preferences updated
     * @throws ApiError
     */
    public static updatePresencePreferences({
        requestBody,
    }: {
        requestBody: PresencePreferences,
    }): CancelablePromise<PresencePreferences> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/presence/preferences',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Send heartbeat
     * Send activity heartbeat to maintain online status
     * @returns any Heartbeat received
     * @throws ApiError
     */
    public static sendHeartbeat({
        requestBody,
    }: {
        requestBody?: {
            activeChannelId?: string;
            activeThreadId?: string;
        },
    }): CancelablePromise<{
        status?: 'online' | 'away' | 'dnd';
        serverTime?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/presence/heartbeat',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get channel presence
     * Get online members and typing indicators for a channel
     * @returns ChannelPresence Channel presence
     * @throws ApiError
     */
    public static getChannelPresence({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<ChannelPresence> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/presence',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
        });
    }
}
