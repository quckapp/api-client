/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfile } from './UserProfile';
export type ChannelMember = {
    userId: string;
    channelId: string;
    user?: UserProfile;
    /**
     * Member role in channel
     */
    role: 'member' | 'admin' | 'owner';
    /**
     * Notification preference
     */
    notifications?: 'all' | 'mentions' | 'none';
    /**
     * Whether notifications are muted
     */
    isMuted?: boolean;
    /**
     * Mute expiration time
     */
    mutedUntil?: string;
    /**
     * Last read message timestamp
     */
    lastReadAt?: string;
    /**
     * Last read message ID
     */
    lastReadMessageId?: string;
    joinedAt: string;
};

