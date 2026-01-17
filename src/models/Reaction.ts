/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Reaction = {
    /**
     * Reaction emoji
     */
    emoji: string;
    /**
     * Emoji name without colons
     */
    name?: string;
    /**
     * Number of reactions
     */
    count: number;
    /**
     * User IDs who reacted
     */
    users?: Array<string>;
    /**
     * Whether current user reacted
     */
    me?: boolean;
};

