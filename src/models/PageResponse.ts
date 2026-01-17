/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSummaryResponse } from './UserSummaryResponse';
export type PageResponse = {
    content?: Array<UserSummaryResponse>;
    /**
     * Current page number
     */
    page?: number;
    /**
     * Page size
     */
    size?: number;
    /**
     * Total number of elements
     */
    totalElements?: number;
    /**
     * Total number of pages
     */
    totalPages?: number;
    /**
     * Is this the first page
     */
    first?: boolean;
    /**
     * Is this the last page
     */
    last?: boolean;
};

