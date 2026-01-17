/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Mention = {
    /**
     * Mention type
     */
    type: 'user' | 'channel' | 'usergroup' | 'everyone' | 'here';
    /**
     * ID of mentioned entity
     */
    id: string;
    /**
     * Display name
     */
    name?: string;
    /**
     * Character offset in content
     */
    offset?: number;
    /**
     * Length of mention text
     */
    length?: number;
};

