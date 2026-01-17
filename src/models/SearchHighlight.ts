/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SearchHighlight = {
    /**
     * Field containing the match
     */
    field?: string;
    /**
     * Text snippet with highlights
     */
    snippet?: string;
    offsets?: Array<{
        start?: number;
        end?: number;
    }>;
};

