/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
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
}
