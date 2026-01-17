/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageBlock } from './MessageBlock';
export type ScheduleMessageRequest = {
    content: string;
    blocks?: Array<MessageBlock>;
    attachments?: Array<string>;
    /**
     * ISO 8601 timestamp
     */
    scheduledFor: string;
};

