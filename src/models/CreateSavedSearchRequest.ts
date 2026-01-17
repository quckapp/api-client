/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchFilters } from './SearchFilters';
export type CreateSavedSearchRequest = {
    name: string;
    query: string;
    filters?: SearchFilters;
    notifyOnNew?: boolean;
};

