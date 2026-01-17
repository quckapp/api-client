/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import type { RevokeTokenRequest } from '../models/RevokeTokenRequest';
import type { TokenResponse } from '../models/TokenResponse';
import type { TokenValidationRequest } from '../models/TokenValidationRequest';
import type { TokenValidationResponse } from '../models/TokenValidationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TokenService {
    /**
     * Refresh access token
     * Exchange refresh token for new access token.
     * Rate limited: 30 requests per minute per IP.
     * Refresh tokens are rotated on each use.
     *
     * @returns TokenResponse Token refreshed successfully
     * @throws ApiError
     */
    public static refreshToken({
        requestBody,
    }: {
        requestBody: RefreshTokenRequest,
    }): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid or expired refresh token`,
            },
        });
    }
    /**
     * Validate JWT token
     * Validate a JWT token and return user information.
     * Rate limited: 100 requests per minute per IP.
     *
     * @returns TokenValidationResponse Token validation result
     * @throws ApiError
     */
    public static validateToken({
        requestBody,
    }: {
        requestBody: TokenValidationRequest,
    }): CancelablePromise<TokenValidationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/validate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Revoke a specific token
     * Revoke a specific token.
     * Rate limited: 10 requests per minute per user.
     *
     * @returns any Token revoked
     * @throws ApiError
     */
    public static revokeToken({
        requestBody,
    }: {
        requestBody: RevokeTokenRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/revoke',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Not authenticated`,
            },
        });
    }
    /**
     * Revoke all tokens for current user
     * Revoke all tokens for the authenticated user (except the current token).
     * Rate limited: 5 requests per 5 minutes per user.
     *
     * @returns any All tokens revoked
     * @throws ApiError
     */
    public static revokeAllTokens(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/revoke-all',
            errors: {
                401: `Not authenticated`,
            },
        });
    }
}
