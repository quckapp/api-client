/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessagePreview } from './MessagePreview';
/**
 * Chat thread associated with a huddle
 */
export type HuddleThread = {
    huddleId?: string;
    messages?: Array<MessagePreview>;
    messageCount?: number;
};

