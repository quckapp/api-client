/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Reaction } from '../models/Reaction';
import type { ReactionRequest } from '../models/ReactionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReactionsService {
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
}
