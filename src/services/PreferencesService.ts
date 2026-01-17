/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PreferencesApiResponse } from '../models/PreferencesApiResponse';
import type { UpdatePreferencesRequest } from '../models/UpdatePreferencesRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PreferencesService {
    /**
     * Get user preferences
     * Retrieve user notification, display, and privacy preferences
     * @returns PreferencesApiResponse User preferences
     * @throws ApiError
     */
    public static getPreferences({
        id,
    }: {
        id: string,
    }): CancelablePromise<PreferencesApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/preferences',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Update user preferences
     * Update preference fields. Only provided fields will be updated.
     * @returns PreferencesApiResponse Preferences updated
     * @throws ApiError
     */
    public static updatePreferences({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdatePreferencesRequest,
    }): CancelablePromise<PreferencesApiResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}/preferences',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                404: `User not found`,
            },
        });
    }
}
