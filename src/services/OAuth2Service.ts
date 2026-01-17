/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationUrlResponse } from '../models/AuthorizationUrlResponse';
import type { AuthResponse } from '../models/AuthResponse';
import type { LinkedProvidersResponse } from '../models/LinkedProvidersResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { OAuth2ProvidersResponse } from '../models/OAuth2ProvidersResponse';
import type { OAuthRequest } from '../models/OAuthRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OAuth2Service {
    /**
     * Login/register with OAuth provider
     * Authenticate using OAuth provider (google, facebook, github, apple).
     * Creates account if user doesn't exist.
     * Rate limited: 10 requests per minute per IP.
     *
     * @returns AuthResponse OAuth authentication successful
     * @throws ApiError
     */
    public static oauthLogin({
        provider,
        requestBody,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
        requestBody: OAuthRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/oauth/{provider}',
            path: {
                'provider': provider,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid OAuth code or configuration`,
            },
        });
    }
    /**
     * Link OAuth provider to existing account
     * Link an OAuth provider to the current user's account.
     * Rate limited: 5 requests per hour per user.
     *
     * @returns MessageResponse Provider linked successfully
     * @throws ApiError
     */
    public static linkOAuthProvider({
        provider,
        requestBody,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
        requestBody: OAuthRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/oauth/{provider}/link',
            path: {
                'provider': provider,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Provider already linked`,
            },
        });
    }
    /**
     * Unlink OAuth provider from account
     * Unlink an OAuth provider from the current user's account.
     * Cannot unlink the last authentication method.
     * Rate limited: 5 requests per hour per user.
     *
     * @returns MessageResponse Provider unlinked successfully
     * @throws ApiError
     */
    public static unlinkOAuthProvider({
        provider,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/v1/oauth/{provider}/unlink',
            path: {
                'provider': provider,
            },
            errors: {
                400: `Cannot unlink last authentication method`,
            },
        });
    }
    /**
     * Get available OAuth2 providers
     * Get list of available OAuth2 providers with their authorization URLs
     * @returns OAuth2ProvidersResponse List of available providers
     * @throws ApiError
     */
    public static getOAuth2Providers(): CancelablePromise<OAuth2ProvidersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/v1/oauth2/providers',
        });
    }
    /**
     * Get linked OAuth2 providers for current user
     * Get list of OAuth2 providers linked to the current user's account
     * @returns LinkedProvidersResponse Linked providers
     * @throws ApiError
     */
    public static getLinkedProviders(): CancelablePromise<LinkedProvidersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/v1/oauth2/linked',
        });
    }
    /**
     * Get authorization URL for OAuth2 provider
     * Get the authorization URL for a specific OAuth2 provider
     * @returns AuthorizationUrlResponse Authorization URL
     * @throws ApiError
     */
    public static getAuthorizationUrl({
        provider,
        redirectUri,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
        redirectUri?: string,
    }): CancelablePromise<AuthorizationUrlResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/v1/oauth2/authorize/{provider}',
            path: {
                'provider': provider,
            },
            query: {
                'redirectUri': redirectUri,
            },
        });
    }
}
