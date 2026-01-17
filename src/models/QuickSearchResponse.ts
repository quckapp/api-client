/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuickSearchItem } from './QuickSearchItem';
/**
 * Fast autocomplete search response
 */
export type QuickSearchResponse = {
    query?: string;
    channels?: Array<QuickSearchItem>;
    users?: Array<QuickSearchItem>;
    messages?: Array<QuickSearchItem>;
    files?: Array<QuickSearchItem>;
    /**
     * Recent searches
     */
    recent?: Array<QuickSearchItem>;
};

