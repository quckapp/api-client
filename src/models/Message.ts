/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileAttachment } from './FileAttachment';
import type { Mention } from './Mention';
import type { MessageBlock } from './MessageBlock';
import type { Reaction } from './Reaction';
import type { UserProfile } from './UserProfile';
export type Message = {
    /**
     * Unique message identifier
     */
    id: string;
    /**
     * Channel where message was posted
     */
    channelId: string;
    /**
     * Parent thread ID if this is a reply
     */
    threadId?: string;
    /**
     * Author user ID
     */
    userId: string;
    user?: UserProfile;
    /**
     * Message content (markdown supported)
     */
    content: string;
    /**
     * Message type
     */
    type: 'text' | 'system' | 'bot' | 'ephemeral';
    /**
     * Rich content blocks
     */
    blocks?: Array<MessageBlock>;
    /**
     * File attachments
     */
    attachments?: Array<FileAttachment>;
    /**
     * User and channel mentions
     */
    mentions?: Array<Mention>;
    /**
     * Message reactions
     */
    reactions?: Array<Reaction>;
    /**
     * Number of thread replies
     */
    replyCount?: number;
    /**
     * Users who replied (preview)
     */
    replyUsers?: Array<UserProfile>;
    /**
     * Timestamp of last reply
     */
    lastReplyAt?: string;
    /**
     * Whether message was edited
     */
    isEdited?: boolean;
    /**
     * Last edit timestamp
     */
    editedAt?: string;
    /**
     * Whether message is pinned
     */
    isPinned?: boolean;
    /**
     * User who pinned the message
     */
    pinnedBy?: string;
    /**
     * When message was pinned
     */
    pinnedAt?: string;
    /**
     * Whether current user bookmarked this
     */
    isBookmarked?: boolean;
    /**
     * Additional message metadata
     */
    metadata?: Record<string, any>;
    createdAt: string;
    updatedAt?: string;
};

