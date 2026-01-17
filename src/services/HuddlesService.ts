/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Huddle } from '../models/Huddle';
import type { HuddleActionRequest } from '../models/HuddleActionRequest';
import type { HuddleInvite } from '../models/HuddleInvite';
import type { HuddleNote } from '../models/HuddleNote';
import type { HuddleParticipant } from '../models/HuddleParticipant';
import type { HuddleThread } from '../models/HuddleThread';
import type { JoinHuddleRequest } from '../models/JoinHuddleRequest';
import type { MessagePreview } from '../models/MessagePreview';
import type { StartHuddleRequest } from '../models/StartHuddleRequest';
import type { UpdateHuddleRequest } from '../models/UpdateHuddleRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HuddlesService {
    /**
     * List active huddles
     * Get all active huddles in workspace
     * @returns any Active huddles
     * @throws ApiError
     */
    public static listHuddles({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<{
        huddles?: Array<Huddle>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/huddles',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
    /**
     * Get channel huddle
     * Get active huddle in a channel (if any)
     * @returns any Channel huddle (or null if none active)
     * @throws ApiError
     */
    public static getChannelHuddle({
        workspaceId,
        channelId,
    }: {
        workspaceId: string,
        channelId: string,
    }): CancelablePromise<{
        huddle?: (Huddle | null);
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/channels/{channelId}/huddle',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
        });
    }
    /**
     * Start huddle
     * Start a new huddle in a channel
     * @returns Huddle Huddle started
     * @throws ApiError
     */
    public static startHuddle({
        workspaceId,
        channelId,
        requestBody,
    }: {
        workspaceId: string,
        channelId: string,
        requestBody?: StartHuddleRequest,
    }): CancelablePromise<Huddle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/channels/{channelId}/huddle',
            path: {
                'workspaceId': workspaceId,
                'channelId': channelId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Huddle already active in channel`,
            },
        });
    }
    /**
     * Get huddle
     * Get huddle details by ID
     * @returns Huddle Huddle details
     * @throws ApiError
     */
    public static getHuddle({
        workspaceId,
        huddleId,
    }: {
        workspaceId: string,
        huddleId: string,
    }): CancelablePromise<Huddle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            errors: {
                404: `Huddle not found`,
            },
        });
    }
    /**
     * Update huddle
     * Update huddle topic
     * @returns Huddle Huddle updated
     * @throws ApiError
     */
    public static updateHuddle({
        workspaceId,
        huddleId,
        requestBody,
    }: {
        workspaceId: string,
        huddleId: string,
        requestBody: UpdateHuddleRequest,
    }): CancelablePromise<Huddle> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Join huddle
     * Join an active huddle
     * @returns any Joined huddle
     * @throws ApiError
     */
    public static joinHuddle({
        workspaceId,
        huddleId,
        requestBody,
    }: {
        workspaceId: string,
        huddleId: string,
        requestBody?: JoinHuddleRequest,
    }): CancelablePromise<{
        huddle?: Huddle;
        connectionInfo?: {
            token?: string;
            serverUrl?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/join',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Leave huddle
     * Leave the huddle
     * @returns void
     * @throws ApiError
     */
    public static leaveHuddle({
        workspaceId,
        huddleId,
    }: {
        workspaceId: string,
        huddleId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/leave',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
        });
    }
    /**
     * Huddle action
     * Perform action in huddle (mute, video, screen share, invite)
     * @returns any Action performed
     * @throws ApiError
     */
    public static huddleAction({
        workspaceId,
        huddleId,
        requestBody,
    }: {
        workspaceId: string,
        huddleId: string,
        requestBody: HuddleActionRequest,
    }): CancelablePromise<{
        success?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/action',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * End huddle
     * End the huddle for everyone (starter only)
     * @returns Huddle Huddle ended
     * @throws ApiError
     */
    public static endHuddle({
        workspaceId,
        huddleId,
    }: {
        workspaceId: string,
        huddleId: string,
    }): CancelablePromise<Huddle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/end',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            errors: {
                403: `Not authorized to end huddle`,
            },
        });
    }
    /**
     * List huddle participants
     * Get all participants in a huddle
     * @returns any Huddle participants
     * @throws ApiError
     */
    public static listHuddleParticipants({
        workspaceId,
        huddleId,
    }: {
        workspaceId: string,
        huddleId: string,
    }): CancelablePromise<{
        participants?: Array<HuddleParticipant>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/participants',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
        });
    }
    /**
     * Invite to huddle
     * Invite a user to join the huddle
     * @returns HuddleInvite Invite sent
     * @throws ApiError
     */
    public static inviteToHuddle({
        workspaceId,
        huddleId,
        requestBody,
    }: {
        workspaceId: string,
        huddleId: string,
        requestBody: {
            userId: string;
        },
    }): CancelablePromise<HuddleInvite> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/invite',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get huddle thread
     * Get chat messages from huddle
     * @returns HuddleThread Huddle thread
     * @throws ApiError
     */
    public static getHuddleThread({
        workspaceId,
        huddleId,
    }: {
        workspaceId: string,
        huddleId: string,
    }): CancelablePromise<HuddleThread> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/thread',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
        });
    }
    /**
     * Send huddle message
     * Send a chat message in the huddle
     * @returns MessagePreview Message sent
     * @throws ApiError
     */
    public static sendHuddleMessage({
        workspaceId,
        huddleId,
        requestBody,
    }: {
        workspaceId: string,
        huddleId: string,
        requestBody: {
            content: string;
        },
    }): CancelablePromise<MessagePreview> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/thread',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get huddle notes
     * Get shared notes from huddle
     * @returns HuddleNote Huddle notes
     * @throws ApiError
     */
    public static getHuddleNotes({
        workspaceId,
        huddleId,
    }: {
        workspaceId: string,
        huddleId: string,
    }): CancelablePromise<HuddleNote> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/notes',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
        });
    }
    /**
     * Update huddle notes
     * Update shared notes in huddle
     * @returns HuddleNote Notes updated
     * @throws ApiError
     */
    public static updateHuddleNotes({
        workspaceId,
        huddleId,
        requestBody,
    }: {
        workspaceId: string,
        huddleId: string,
        requestBody: {
            content: string;
        },
    }): CancelablePromise<HuddleNote> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workspaces/{workspaceId}/huddles/{huddleId}/notes',
            path: {
                'workspaceId': workspaceId,
                'huddleId': huddleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
