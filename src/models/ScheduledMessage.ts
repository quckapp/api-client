/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageBlock } from './MessageBlock';
export type ScheduledMessage = {
    id: string;
    channelId: string;
    content: string;
    blocks?: Array<MessageBlock>;
    /**
     * When to send the message
     */
    scheduledFor: string;
    createdAt?: string;
};

