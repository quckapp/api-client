/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DirectMessage } from '../models/DirectMessage';
import type { GroupDirectMessage } from '../models/GroupDirectMessage';
import type { Pagination } from '../models/Pagination';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DirectMessagesService {
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
