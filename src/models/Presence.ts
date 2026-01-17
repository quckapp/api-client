/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypingIndicator } from './TypingIndicator';
export type Presence = {
    userId: string;
    /**
     * Current presence status
     */
    status: 'online' | 'away' | 'dnd' | 'offline';
    /**
     * Custom status text
     */
    statusText?: string;
    /**
     * Status emoji
     */
    statusEmoji?: string;
    /**
     * When custom status expires
     */
    statusExpiry?: string;
    /**
     * Whether user is actively using app
     */
    isActive?: boolean;
    /**
     * Last activity timestamp
     */
    lastSeenAt: string;
    /**
     * Current active device
     */
    activeDevice?: 'desktop' | 'mobile' | 'web';
    /**
     * Whether user is in a call
     */
    inCall?: boolean;
    /**
     * Whether user is in a huddle
     */
    inHuddle?: boolean;
    typing?: TypingIndicator;
};

