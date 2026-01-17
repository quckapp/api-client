/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { MessageCreateRequest } from '../models/MessageCreateRequest';
import type { MessageUpdateRequest } from '../models/MessageUpdateRequest';
import type { Reaction } from '../models/Reaction';
import type { ReactionRequest } from '../models/ReactionRequest';
import type { ScheduledMessage } from '../models/ScheduledMessage';
import type { ScheduleMessageRequest } from '../models/ScheduleMessageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessagesService {
    /**
     * List messages
     * Get messages from a channel with pagination
     * @returns any List of messages
     * @throws ApiError
     */
    public static listMessages({
        workspaceId,
        channelId,
        before,
        after,
        around,
        limit = 50,
    }: {
        workspaceId: string,
        channelId: string,
        /**
         * Get messages before this timestamp
         */
        before?: string,
        /**
         * Get messages after this timestamp
         */
        after?: string,
        /**
         * Get messages around this message ID
         */
        around?: string,
        limit?: number,
    }): CancelablePromise<{
        messages?: Array<Message>;
        hasMore?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            query: {
                'before': before,
                'after': after,
                'around': around,
                'limit': limit,
            },
        });
    }
    /**
     * Send message
     * Send a new message to a channel
     * @returns Message Message sent
     * @throws ApiError
     */
    public static sendMessage({
        workspaceId,
        channelId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        requestBody: MessageCreateRequest,
    }): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid message content`,
                403: `Cannot post to this channel`,
            },
        });
    }
    /**
     * Get message
     * Get a specific message by ID
     * @returns Message Message details
     * @throws ApiError
     */
    public static getMessage({
        workspaceId,
        channelId,
        messageId,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
    }): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
            errors: {
                404: `Message not found`,
            },
        });
    }
    /**
     * Edit message
     * Edit a message (author only, within edit window)
     * @returns Message Message updated
     * @throws ApiError
     */
    public static editMessage({
        workspaceId,
        channelId,
        messageId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
        requestBody: MessageUpdateRequest,
    }): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Not authorized to edit`,
            },
        });
    }
    /**
     * Delete message
     * Delete a message (author or admin)
     * @returns void
     * @throws ApiError
     */
    public static deleteMessage({
        workspaceId,
        channelId,
        messageId,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
            errors: {
                403: `Not authorized to delete`,
            },
        });
    }
    /**
     * Get message reactions
     * Get all reactions on a message
     * @returns any Message reactions
     * @throws ApiError
     */
    public static getMessageReactions({
        workspaceId,
        channelId,
        messageId,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
    }): CancelablePromise<{
        reactions?: Array<Reaction>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}/reactions',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
        });
    }
    /**
     * Add reaction
     * Add a reaction to a message
     * @returns Reaction Reaction added
     * @throws ApiError
     */
    public static addReaction({
        workspaceId,
        channelId,
        messageId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
        requestBody: ReactionRequest,
    }): CancelablePromise<Reaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}/reactions',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Already reacted with this emoji`,
            },
        });
    }
    /**
     * Remove reaction
     * Remove a reaction from a message
     * @returns void
     * @throws ApiError
     */
    public static removeReaction({
        workspaceId,
        channelId,
        messageId,
        emoji,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
        emoji: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}/reactions/{emoji}',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
                'emoji': emoji,
            },
            errors: {
                404: `Reaction not found`,
            },
        });
    }
    /**
     * Pin message
     * Pin a message to the channel
     * @returns Message Message pinned
     * @throws ApiError
     */
    public static pinMessage({
        workspaceId,
        channelId,
        messageId,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
    }): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}/pin',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
            errors: {
                400: `Message already pinned or pin limit reached`,
            },
        });
    }
    /**
     * Unpin message
     * Unpin a message from the channel
     * @returns void
     * @throws ApiError
     */
    public static unpinMessage({
        workspaceId,
        channelId,
        messageId,
    }: {
        workspaceId: string,
        channelId: string,
        messageId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/channels/{channelId}/messages/{messageId}/unpin',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
                'messageId': messageId,
            },
        });
    }
    /**
     * List pinned messages
     * Get all pinned messages in a channel
     * @returns any Pinned messages
     * @throws ApiError
     */
    public static listPinnedMessages({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<{
        messages?: Array<Message>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/pins',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
        });
    }
    /**
     * Mark channel as read
     * Mark all messages in channel as read
     * @returns any Channel marked as read
     * @throws ApiError
     */
    public static markChannelRead({
        workspaceId,
        channelId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        requestBody?: {
            /**
             * Mark as read up to this message
             */
            messageId?: string;
        },
    }): CancelablePromise<{
        lastReadAt?: string;
        lastReadMessageId?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/read',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List scheduled messages
     * Get user's scheduled messages
     * @returns any Scheduled messages
     * @throws ApiError
     */
    public static listScheduledMessages({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId?: string,
    }): CancelablePromise<{
        messages?: Array<ScheduledMessage>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/scheduled-messages',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'channelId': channelId,
            },
        });
    }
    /**
     * Schedule message
     * Schedule a message for later delivery
     * @returns ScheduledMessage Message scheduled
     * @throws ApiError
     */
    public static scheduleMessage({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: ScheduleMessageRequest,
    }): CancelablePromise<ScheduledMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/scheduled-messages',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get scheduled message
     * Get a scheduled message by ID
     * @returns ScheduledMessage Scheduled message details
     * @throws ApiError
     */
    public static getScheduledMessage({
        workspaceId,
        messageId,
    }: {
        workspaceId: string,
        messageId: string,
    }): CancelablePromise<ScheduledMessage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/scheduled-messages/{messageId}',
            path: {
                'workspaceId': workspaceId,
                'messageId': messageId,
            },
        });
    }
    /**
     * Update scheduled message
     * Update a scheduled message
     * @returns ScheduledMessage Scheduled message updated
     * @throws ApiError
     */
    public static updateScheduledMessage({
        workspaceId,
        messageId,
        requestBody,
    }: {
        workspaceId: string,
        messageId: string,
        requestBody: ScheduleMessageRequest,
    }): CancelablePromise<ScheduledMessage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/scheduled-messages/{messageId}',
            path: {
                'workspaceId': workspaceId,
                'messageId': messageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete scheduled message
     * Delete a scheduled message
     * @returns void
     * @throws ApiError
     */
    public static deleteScheduledMessage({
        workspaceId,
        messageId,
    }: {
        workspaceId: string,
        messageId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/scheduled-messages/{messageId}',
            path: {
                'workspaceId': workspaceId,
                'messageId': messageId,
            },
        });
    }
}
