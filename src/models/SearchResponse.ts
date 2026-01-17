/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pagination } from './Pagination';
import type { SearchFacets } from './SearchFacets';
import type { SearchResult } from './SearchResult';
export type SearchResponse = {
    /**
     * Original query
     */
    query?: string;
    results: Array<SearchResult>;
    /**
     * Total number of results
     */
    total: number;
    pagination: Pagination;
    facets?: SearchFacets;
    /**
     * Query suggestions
     */
    suggestions?: Array<string>;
};

