/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponse } from '../models/AuthResponse';
import type { BackupCodesResponse } from '../models/BackupCodesResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { TwoFactorDisableRequest } from '../models/TwoFactorDisableRequest';
import type { TwoFactorEnableRequest } from '../models/TwoFactorEnableRequest';
import type { TwoFactorEnableResponse } from '../models/TwoFactorEnableResponse';
import type { TwoFactorLoginRequest } from '../models/TwoFactorLoginRequest';
import type { TwoFactorSetupResponse } from '../models/TwoFactorSetupResponse';
import type { TwoFactorVerifyRequest } from '../models/TwoFactorVerifyRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MfaService {
    /**
     * Complete login with 2FA code
     * Complete login by providing 2FA code after initial login returned requiresTwoFactor=true.
     * Rate limited: 5 attempts per 5 minutes per IP.
     *
     * @returns AuthResponse 2FA verification successful
     * @throws ApiError
     */
    public static loginWith2Fa({
        requestBody,
    }: {
        requestBody: TwoFactorLoginRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/login/2fa',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid 2FA code or token`,
                429: `Too many 2FA attempts`,
            },
        });
    }
    /**
     * Setup 2FA - get QR code
     * Initialize 2FA setup and return TOTP secret with QR code.
     * Rate limited: 10 requests per hour per user.
     *
     * @returns TwoFactorSetupResponse 2FA setup initiated
     * @throws ApiError
     */
    public static setup2Fa(): CancelablePromise<TwoFactorSetupResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/setup',
            errors: {
                400: `2FA already enabled`,
            },
        });
    }
    /**
     * Enable 2FA after verification
     * Verify TOTP code to complete 2FA setup.
     * Returns backup codes on success.
     * Rate limited: 5 requests per 5 minutes per user.
     *
     * @returns TwoFactorEnableResponse 2FA enabled successfully
     * @throws ApiError
     */
    public static enable2Fa({
        requestBody,
    }: {
        requestBody: TwoFactorEnableRequest,
    }): CancelablePromise<TwoFactorEnableResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/enable',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid 2FA code`,
            },
        });
    }
    /**
     * Disable 2FA
     * Disable 2FA for current user (requires 2FA code and password).
     * Rate limited: 3 requests per hour per user.
     *
     * @returns MessageResponse 2FA disabled
     * @throws ApiError
     */
    public static disable2Fa({
        requestBody,
    }: {
        requestBody: TwoFactorDisableRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/disable',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid password or 2FA code`,
            },
        });
    }
    /**
     * Generate new backup codes
     * Generate new backup codes (invalidates previous codes).
     * Rate limited: 3 requests per hour per user.
     *
     * @returns BackupCodesResponse New backup codes generated
     * @throws ApiError
     */
    public static generateBackupCodes({
        requestBody,
    }: {
        requestBody: TwoFactorVerifyRequest,
    }): CancelablePromise<BackupCodesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/backup-codes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid 2FA code`,
            },
        });
    }
}
