/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdatePresenceRequest = {
    status?: 'online' | 'away' | 'dnd' | 'offline';
    statusText?: string;
    statusEmoji?: string;
    statusExpiry?: string;
    clearAfter?: 'never' | '30min' | '1h' | '4h' | 'today' | 'this_week';
};

