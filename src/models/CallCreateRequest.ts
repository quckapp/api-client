/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallSettings } from './CallSettings';
export type CallCreateRequest = {
    type: 'audio' | 'video';
    /**
     * Channel to start call in
     */
    channelId?: string;
    title?: string;
    /**
     * User IDs to invite
     */
    participants?: Array<string>;
    settings?: CallSettings;
    /**
     * Schedule call for later
     */
    scheduledFor?: string;
};

