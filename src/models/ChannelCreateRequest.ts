/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChannelCreateRequest = {
    name: string;
    displayName?: string;
    type?: 'public' | 'private';
    description?: string;
    topic?: string;
    icon?: string;
    isDefault?: boolean;
    /**
     * Initial members to add
     */
    members?: Array<string>;
};

