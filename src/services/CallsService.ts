/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Call } from '../models/Call';
import type { CallActionRequest } from '../models/CallActionRequest';
import type { CallCreateRequest } from '../models/CallCreateRequest';
import type { CallParticipant } from '../models/CallParticipant';
import type { CallRecording } from '../models/CallRecording';
import type { CallUpdateRequest } from '../models/CallUpdateRequest';
import type { JoinCallRequest } from '../models/JoinCallRequest';
import type { Pagination } from '../models/Pagination';
import type { ScheduledCall } from '../models/ScheduledCall';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CallsService {
    /**
     * List calls
     * Get call history for workspace
     * @returns any List of calls
     * @throws ApiError
     */
    public static listCalls({
        workspaceId,
        channelId,
        status,
        type,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        channelId?: string,
        status?: 'active' | 'ended' | 'missed',
        type?: 'audio' | 'video',
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        calls?: Array<Call>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/calls',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'channelId': channelId,
                'status': status,
                'type': type,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Start call
     * Start a new call
     * @returns Call Call started
     * @throws ApiError
     */
    public static startCall({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: CallCreateRequest,
    }): CancelablePromise<Call> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid call configuration`,
            },
        });
    }
    /**
     * List active calls
     * Get all currently active calls in workspace
     * @returns any Active calls
     * @throws ApiError
     */
    public static listActiveCalls({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<{
        calls?: Array<Call>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/calls/active',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
    /**
     * List scheduled calls
     * Get upcoming scheduled calls
     * @returns any Scheduled calls
     * @throws ApiError
     */
    public static listScheduledCalls({
        workspaceId,
        from,
        to,
    }: {
        workspaceId: string,
        from?: string,
        to?: string,
    }): CancelablePromise<{
        calls?: Array<ScheduledCall>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/calls/scheduled',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'from': from,
                'to': to,
            },
        });
    }
    /**
     * Schedule call
     * Schedule a call for later
     * @returns ScheduledCall Call scheduled
     * @throws ApiError
     */
    public static scheduleCall({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: CallCreateRequest,
    }): CancelablePromise<ScheduledCall> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls/scheduled',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get call
     * Get call details by ID
     * @returns Call Call details
     * @throws ApiError
     */
    public static getCall({
        workspaceId,
        callId,
    }: {
        workspaceId: string,
        callId: string,
    }): CancelablePromise<Call> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/calls/{callId}',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            errors: {
                404: `Call not found`,
            },
        });
    }
    /**
     * Update call
     * Update call settings (host only)
     * @returns Call Call updated
     * @throws ApiError
     */
    public static updateCall({
        workspaceId,
        callId,
        requestBody,
    }: {
        workspaceId: string,
        callId: string,
        requestBody: CallUpdateRequest,
    }): CancelablePromise<Call> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/calls/{callId}',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Join call
     * Join an active call
     * @returns any Joined call
     * @throws ApiError
     */
    public static joinCall({
        workspaceId,
        callId,
        requestBody,
    }: {
        workspaceId: string,
        callId: string,
        requestBody?: JoinCallRequest,
    }): CancelablePromise<{
        call?: Call;
        connectionInfo?: {
            token?: string;
            serverUrl?: string;
            iceServers?: Array<{
                urls?: Array<string>;
                username?: string;
                credential?: string;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls/{callId}/join',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid password`,
                403: `In waiting room`,
            },
        });
    }
    /**
     * Leave call
     * Leave the current call
     * @returns void
     * @throws ApiError
     */
    public static leaveCall({
        workspaceId,
        callId,
    }: {
        workspaceId: string,
        callId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls/{callId}/leave',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
        });
    }
    /**
     * End call
     * End call for all participants (host only)
     * @returns Call Call ended
     * @throws ApiError
     */
    public static endCall({
        workspaceId,
        callId,
    }: {
        workspaceId: string,
        callId: string,
    }): CancelablePromise<Call> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls/{callId}/end',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            errors: {
                403: `Not the host`,
            },
        });
    }
    /**
     * Call action
     * Perform an action in the call (mute, screen share, etc.)
     * @returns any Action performed
     * @throws ApiError
     */
    public static callAction({
        workspaceId,
        callId,
        requestBody,
    }: {
        workspaceId: string,
        callId: string,
        requestBody: CallActionRequest,
    }): CancelablePromise<{
        success?: boolean;
        participant?: CallParticipant;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls/{callId}/action',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Invite to call
     * Invite users to join the call
     * @returns any Invites sent
     * @throws ApiError
     */
    public static inviteToCall({
        workspaceId,
        callId,
        requestBody,
    }: {
        workspaceId: string,
        callId: string,
        requestBody: {
            userIds: Array<string>;
        },
    }): CancelablePromise<{
        invited?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/calls/{callId}/invite',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List call participants
     * Get all participants in a call
     * @returns any Call participants
     * @throws ApiError
     */
    public static listCallParticipants({
        workspaceId,
        callId,
    }: {
        workspaceId: string,
        callId: string,
    }): CancelablePromise<{
        participants?: Array<CallParticipant>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/calls/{callId}/participants',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
        });
    }
    /**
     * Get call recording
     * Get recording details for a call
     * @returns CallRecording Recording details
     * @throws ApiError
     */
    public static getCallRecording({
        workspaceId,
        callId,
    }: {
        workspaceId: string,
        callId: string,
    }): CancelablePromise<CallRecording> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/calls/{callId}/recording',
            path: {
                'workspaceId': workspaceId,
                'callId': callId,
            },
            errors: {
                404: `No recording found`,
            },
        });
    }
}
