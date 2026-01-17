/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateFacetBucket } from './DateFacetBucket';
import type { FacetBucket } from './FacetBucket';
/**
 * Aggregated counts for filtering
 */
export type SearchFacets = {
    channels?: Array<FacetBucket>;
    users?: Array<FacetBucket>;
    fileTypes?: Array<FacetBucket>;
    dates?: Array<DateFacetBucket>;
};

