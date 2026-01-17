/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProfileApiResponse } from '../models/ProfileApiResponse';
import type { UpdateProfileRequest } from '../models/UpdateProfileRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProfileService {
    /**
     * Get user profile
     * Retrieve extended profile information for a user
     * @returns ProfileApiResponse User profile
     * @throws ApiError
     */
    public static getProfile({
        id,
    }: {
        id: string,
    }): CancelablePromise<ProfileApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/profile',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Update user profile
     * Update profile fields. Only provided fields will be updated.
     * @returns ProfileApiResponse Profile updated
     * @throws ApiError
     */
    public static updateProfile({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateProfileRequest,
    }): CancelablePromise<ProfileApiResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}/profile',
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
