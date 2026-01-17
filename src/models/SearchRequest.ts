/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchFilters } from './SearchFilters';
export type SearchRequest = {
    /**
     * Search query string
     */
    query: string;
    /**
     * Search scope
     */
    scope?: 'all' | 'messages' | 'files' | 'channels' | 'users';
    filters?: SearchFilters;
    sort?: 'relevance' | 'date_desc' | 'date_asc';
    /**
     * Include highlighted snippets
     */
    highlight?: boolean;
    page?: number;
    limit?: number;
};

