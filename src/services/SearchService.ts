/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { CreateSavedSearchRequest } from '../models/CreateSavedSearchRequest';
import type { PagedApiResponse } from '../models/PagedApiResponse';
import type { QuickSearchResponse } from '../models/QuickSearchResponse';
import type { SavedSearch } from '../models/SavedSearch';
import type { SearchHistory } from '../models/SearchHistory';
import type { SearchRequest } from '../models/SearchRequest';
import type { SearchResponse } from '../models/SearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
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
     * Search workspace
     * Search messages, files, channels, and users in workspace
     * @returns SearchResponse Search results
     * @throws ApiError
     */
    public static search({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: SearchRequest,
    }): CancelablePromise<SearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/search',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid search query`,
            },
        });
    }
    /**
     * Quick search
     * Fast autocomplete search for UI suggestions
     * @returns QuickSearchResponse Quick search results
     * @throws ApiError
     */
    public static quickSearch({
        workspaceId,
        q,
        types,
    }: {
        workspaceId: string,
        /**
         * Search query
         */
        q: string,
        /**
         * Result types to include
         */
        types?: Array<'channel' | 'user' | 'message' | 'file'>,
    }): CancelablePromise<QuickSearchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/search/quick',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'q': q,
                'types': types,
            },
        });
    }
    /**
     * Search messages
     * Search specifically for messages
     * @returns SearchResponse Message search results
     * @throws ApiError
     */
    public static searchMessages({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: (SearchRequest & {
            scope?: 'messages';
        }),
    }): CancelablePromise<SearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/search/messages',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Search files
     * Search specifically for files
     * @returns SearchResponse File search results
     * @throws ApiError
     */
    public static searchFiles({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: (SearchRequest & {
            scope?: 'files';
        }),
    }): CancelablePromise<SearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/search/files',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List saved searches
     * Get user's saved searches
     * @returns any Saved searches
     * @throws ApiError
     */
    public static listSavedSearches({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<{
        searches?: Array<SavedSearch>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/search/saved',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
    /**
     * Create saved search
     * Save a search for quick access
     * @returns SavedSearch Search saved
     * @throws ApiError
     */
    public static createSavedSearch({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: CreateSavedSearchRequest,
    }): CancelablePromise<SavedSearch> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/search/saved',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get saved search
     * Get a saved search by ID
     * @returns SavedSearch Saved search details
     * @throws ApiError
     */
    public static getSavedSearch({
        workspaceId,
        searchId,
    }: {
        workspaceId: string,
        searchId: string,
    }): CancelablePromise<SavedSearch> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/search/saved/{searchId}',
            path: {
                'workspaceId': workspaceId,
                'searchId': searchId,
            },
            errors: {
                404: `Saved search not found`,
            },
        });
    }
    /**
     * Delete saved search
     * Delete a saved search
     * @returns void
     * @throws ApiError
     */
    public static deleteSavedSearch({
        workspaceId,
        searchId,
    }: {
        workspaceId: string,
        searchId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/search/saved/{searchId}',
            path: {
                'workspaceId': workspaceId,
                'searchId': searchId,
            },
        });
    }
    /**
     * Run saved search
     * Execute a saved search
     * @returns SearchResponse Search results
     * @throws ApiError
     */
    public static runSavedSearch({
        workspaceId,
        searchId,
        requestBody,
    }: {
        workspaceId: string,
        searchId: string,
        requestBody?: {
            page?: number;
            limit?: number;
        },
    }): CancelablePromise<SearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/search/saved/{searchId}/run',
            path: {
                'workspaceId': workspaceId,
                'searchId': searchId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get search history
     * Get user's recent searches
     * @returns SearchHistory Search history
     * @throws ApiError
     */
    public static getSearchHistory({
        workspaceId,
        limit = 20,
    }: {
        workspaceId: string,
        limit?: number,
    }): CancelablePromise<SearchHistory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/search/history',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'limit': limit,
            },
        });
    }
    /**
     * Clear search history
     * Clear user's search history
     * @returns void
     * @throws ApiError
     */
    public static clearSearchHistory({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/search/history',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
    /**
     * Get search suggestions
     * Get search query suggestions based on input
     * @returns any Search suggestions
     * @throws ApiError
     */
    public static getSearchSuggestions({
        workspaceId,
        q,
    }: {
        workspaceId: string,
        /**
         * Partial search query
         */
        q: string,
    }): CancelablePromise<{
        suggestions?: Array<{
            text?: string;
            type?: 'query' | 'filter' | 'modifier';
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/search/suggestions',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'q': q,
            },
        });
    }
}
