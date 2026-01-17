/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionsResponse } from '../models/SessionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SessionsService {
    /**
     * Get active sessions
     * Get all active sessions for current user.
     * Rate limited: 30 requests per minute per user.
     *
     * @returns SessionsResponse List of active sessions
     * @throws ApiError
     */
    public static getSessions(): CancelablePromise<SessionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/v1/sessions',
        });
    }
    /**
     * Terminate specific session
     * Terminate a specific session by ID.
     * Rate limited: 10 requests per minute per user.
     *
     * @returns any Session terminated
     * @throws ApiError
     */
    public static terminateSession({
        sessionId,
    }: {
        sessionId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/v1/sessions/{sessionId}',
            path: {
                'sessionId': sessionId,
            },
            errors: {
                404: `Session not found`,
            },
        });
    }
    /**
     * Terminate all other sessions
     * Terminate all sessions except current.
     * Rate limited: 5 requests per 5 minutes per user.
     *
     * @returns any All other sessions terminated
     * @throws ApiError
     */
    public static terminateAllSessions(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/v1/sessions/all',
        });
    }
}
