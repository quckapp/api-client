/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { BatchApiResponse } from '../models/BatchApiResponse';
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { PagedApiResponse } from '../models/PagedApiResponse';
import type { PreferencesApiResponse } from '../models/PreferencesApiResponse';
import type { ProfileApiResponse } from '../models/ProfileApiResponse';
import type { UpdatePreferencesRequest } from '../models/UpdatePreferencesRequest';
import type { UpdateProfileRequest } from '../models/UpdateProfileRequest';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Create a new user
     * Create a new user in the system. This endpoint is typically called
     * by the auth-service after successful registration.
     *
     * @returns ApiResponse User created successfully
     * @throws ApiError
     */
    public static createUser({
        requestBody,
    }: {
        requestBody: CreateUserRequest,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                409: `Email or username already exists`,
            },
        });
    }
    /**
     * Get user by ID
     * Get a user's data by their unique identifier
     * @returns ApiResponse User data
     * @throws ApiError
     */
    public static getUserById({
        id,
    }: {
        id: string,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Update user
     * Update user's basic information
     * @returns ApiResponse User updated
     * @throws ApiError
     */
    public static updateUser({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateUserRequest,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
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
    /**
     * Deactivate user
     * Soft-delete a user by setting their status to DEACTIVATED
     * @returns ApiResponse User deactivated
     * @throws ApiError
     */
    public static deactivateUser({
        id,
    }: {
        id: string,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Get user by email
     * Get a user's data by their email address
     * @returns ApiResponse User data
     * @throws ApiError
     */
    public static getUserByEmail({
        email,
    }: {
        email: string,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/email/{email}',
            path: {
                'email': email,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Get user by username
     * Get a user's data by their username
     * @returns ApiResponse User data
     * @throws ApiError
     */
    public static getUserByUsername({
        username,
    }: {
        username: string,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/username/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Suspend user
     * Suspend a user account. Suspended users cannot access the system until reactivated.
     * @returns ApiResponse User suspended
     * @throws ApiError
     */
    public static suspendUser({
        id,
    }: {
        id: string,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{id}/suspend',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Search users
     * Search for users by query string with optional filtering and pagination
     * @returns PagedApiResponse Search results
     * @throws ApiError
     */
    public static searchUsers({
        query,
        status,
        page,
        size = 20,
    }: {
        /**
         * Search query (min 2 characters)
         */
        query: string,
        /**
         * Filter by user status
         */
        status?: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DEACTIVATED',
        /**
         * Page number (0-indexed)
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<PagedApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/search',
            query: {
                'query': query,
                'status': status,
                'page': page,
                'size': size,
            },
        });
    }
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
