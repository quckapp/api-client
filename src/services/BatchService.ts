/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchApiResponse } from '../models/BatchApiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BatchService {
    /**
     * Get users by IDs
     * Retrieve multiple users by their IDs in a single request.
     * Useful for populating user data in lists.
     * Users not found will be silently omitted from the response.
     *
     * @returns BatchApiResponse List of users
     * @throws ApiError
     */
    public static getUsersByIds({
        requestBody,
    }: {
        requestBody: Array<string>,
    }): CancelablePromise<BatchApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
