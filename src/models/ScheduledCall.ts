/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallRecurrence } from './CallRecurrence';
import type { CallSettings } from './CallSettings';
export type ScheduledCall = {
    id: string;
    type: 'audio' | 'video';
    title?: string;
    description?: string;
    scheduledFor: string;
    /**
     * Expected duration in minutes
     */
    duration?: number;
    channelId?: string;
    invitees?: Array<string>;
    settings?: CallSettings;
    recurrence?: CallRecurrence;
    createdBy: string;
    createdAt?: string;
};

