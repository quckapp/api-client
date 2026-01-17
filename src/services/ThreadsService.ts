/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageCreateRequest } from '../models/MessageCreateRequest';
import type { SubscribeThreadRequest } from '../models/SubscribeThreadRequest';
import type { Thread } from '../models/Thread';
import type { ThreadListResponse } from '../models/ThreadListResponse';
import type { ThreadRepliesResponse } from '../models/ThreadRepliesResponse';
import type { ThreadReply } from '../models/ThreadReply';
import type { ThreadSubscription } from '../models/ThreadSubscription';
import type { UpdateThreadRequest } from '../models/UpdateThreadRequest';
import type { UserProfile } from '../models/UserProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ThreadsService {
    /**
     * List threads
     * Get threads the user is subscribed to or all threads in workspace
     * @returns ThreadListResponse List of threads
     * @throws ApiError
     */
    public static listThreads({
        workspaceId,
        channelId,
        subscribed,
        unread,
        sort = 'recent_activity',
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        /**
         * Filter by channel
         */
        channelId?: string,
        /**
         * Only show subscribed threads
         */
        subscribed?: boolean,
        /**
         * Only show threads with unread replies
         */
        unread?: boolean,
        sort?: 'recent_activity' | 'created_at',
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<ThreadListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/threads',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'channelId': channelId,
                'subscribed': subscribed,
                'unread': unread,
                'sort': sort,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Get thread
     * Get a thread with its parent message
     * @returns Thread Thread details
     * @throws ApiError
     */
    public static getThread({
        workspaceId,
        channelId,
        threadId,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
    }): CancelablePromise<Thread> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
            errors: {
                404: `Thread not found`,
            },
        });
    }
    /**
     * Update thread
     * Update thread properties (e.g., mark as resolved)
     * @returns Thread Thread updated
     * @throws ApiError
     */
    public static updateThread({
        workspaceId,
        channelId,
        threadId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
        requestBody: UpdateThreadRequest,
    }): CancelablePromise<Thread> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List thread replies
     * Get all replies in a thread
     * @returns ThreadRepliesResponse Thread replies
     * @throws ApiError
     */
    public static listThreadReplies({
        workspaceId,
        channelId,
        threadId,
        before,
        after,
        limit = 50,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
        before?: string,
        after?: string,
        limit?: number,
    }): CancelablePromise<ThreadRepliesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}/replies',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
            query: {
                'before': before,
                'after': after,
                'limit': limit,
            },
        });
    }
    /**
     * Reply to thread
     * Post a reply to a thread
     * @returns ThreadReply Reply posted
     * @throws ApiError
     */
    public static replyToThread({
        workspaceId,
        channelId,
        threadId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
        requestBody: MessageCreateRequest,
    }): CancelablePromise<ThreadReply> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}/replies',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Subscribe to thread
     * Subscribe to receive notifications for thread replies
     * @returns ThreadSubscription Subscribed to thread
     * @throws ApiError
     */
    public static subscribeToThread({
        workspaceId,
        channelId,
        threadId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
        requestBody?: SubscribeThreadRequest,
    }): CancelablePromise<ThreadSubscription> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}/subscribe',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unsubscribe from thread
     * Unsubscribe from thread notifications
     * @returns void
     * @throws ApiError
     */
    public static unsubscribeFromThread({
        workspaceId,
        channelId,
        threadId,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}/unsubscribe',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
        });
    }
    /**
     * Mark thread as read
     * Mark all replies in thread as read
     * @returns any Thread marked as read
     * @throws ApiError
     */
    public static markThreadRead({
        workspaceId,
        channelId,
        threadId,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
    }): CancelablePromise<{
        lastReadAt?: string;
        lastReadMessageId?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}/read',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
        });
    }
    /**
     * List thread participants
     * Get all users who have participated in a thread
     * @returns any Thread participants
     * @throws ApiError
     */
    public static listThreadParticipants({
        workspaceId,
        channelId,
        threadId,
    }: {
        workspaceId: string,
        channelId: string,
        threadId: string,
    }): CancelablePromise<{
        participants?: Array<UserProfile>;
        count?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/threads/{threadId}/participants',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'threadId': threadId,
            },
        });
    }
    /**
     * Mark all threads as read
     * Mark all threads in workspace as read
     * @returns any All threads marked as read
     * @throws ApiError
     */
    public static markAllThreadsRead({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<{
        markedCount?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/threads/read-all',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
}
