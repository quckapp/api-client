/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchFilters } from './SearchFilters';
export type SavedSearch = {
    id: string;
    name: string;
    query: string;
    filters?: SearchFilters;
    /**
     * Get notified on new matches
     */
    notifyOnNew?: boolean;
    createdAt?: string;
    lastUsedAt?: string;
};

