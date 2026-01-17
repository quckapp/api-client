/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from './Message';
import type { MessagePreview } from './MessagePreview';
import type { UserProfile } from './UserProfile';
export type Thread = {
    /**
     * Thread identifier (same as parent message ID)
     */
    id: string;
    /**
     * Channel containing the thread
     */
    channelId: string;
    parentMessage: Message;
    /**
     * Total number of replies
     */
    replyCount: number;
    /**
     * Number of unique participants
     */
    participantCount?: number;
    /**
     * Thread participants (preview)
     */
    participants?: Array<UserProfile>;
    lastReply?: MessagePreview;
    /**
     * Timestamp of last reply
     */
    lastReplyAt?: string;
    /**
     * Whether current user is subscribed
     */
    isSubscribed?: boolean;
    /**
     * Unread replies for current user
     */
    unreadCount?: number;
    /**
     * Whether thread is marked resolved
     */
    isResolved?: boolean;
    /**
     * User who resolved the thread
     */
    resolvedBy?: string;
    resolvedAt?: string;
    createdAt: string;
    updatedAt?: string;
};

