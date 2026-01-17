/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageBlock } from './MessageBlock';
export type MessageCreateRequest = {
    /**
     * Message content
     */
    content: string;
    blocks?: Array<MessageBlock>;
    /**
     * File IDs to attach
     */
    attachments?: Array<string>;
    /**
     * Thread ID for replies
     */
    threadId?: string;
    /**
     * Also post reply to channel
     */
    replyBroadcast?: boolean;
    /**
     * Enable link previews
     */
    unfurlLinks?: boolean;
    /**
     * Enable media previews
     */
    unfurlMedia?: boolean;
    metadata?: Record<string, any>;
};

