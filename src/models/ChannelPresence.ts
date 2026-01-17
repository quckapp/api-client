/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Presence } from './Presence';
import type { TypingUser } from './TypingUser';
/**
 * Presence info for a channel
 */
export type ChannelPresence = {
    channelId?: string;
    /**
     * Number of online members
     */
    onlineCount?: number;
    onlineMembers?: Array<Presence>;
    typingUsers?: Array<TypingUser>;
};

