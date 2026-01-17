/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import type { ForgotPasswordRequest } from '../models/ForgotPasswordRequest';
import type { MessageResponse } from '../models/MessageResponse';
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PasswordService {
    /**
     * Request password reset
     * Send password reset link to email.
     * Rate limited: 3 requests per hour per IP.
     * Always returns success to prevent email enumeration.
     *
     * @returns MessageResponse Reset email sent if account exists
     * @throws ApiError
     */
    public static forgotPassword({
        requestBody,
    }: {
        requestBody: ForgotPasswordRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/password/forgot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                429: `Too many reset requests`,
            },
        });
    }
    /**
     * Reset password with token
     * Set new password using reset token from email.
     * Rate limited: 5 requests per hour per IP.
     *
     * @returns MessageResponse Password reset successful
     * @throws ApiError
     */
    public static resetPassword({
        requestBody,
    }: {
        requestBody: ResetPasswordRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/password/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or expired token`,
            },
        });
    }
    /**
     * Change password (authenticated)
     * Change password for authenticated user.
     * Rate limited: 5 requests per hour per user.
     *
     * @returns MessageResponse Password changed successfully
     * @throws ApiError
     */
    public static changePassword({
        requestBody,
    }: {
        requestBody: ChangePasswordRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/password/change',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Password requirements not met`,
                401: `Current password incorrect`,
            },
        });
    }
}
