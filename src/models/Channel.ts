/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelSettings } from './ChannelSettings';
import type { MessagePreview } from './MessagePreview';
export type Channel = {
    /**
     * Unique channel identifier
     */
    id: string;
    /**
     * Parent workspace ID
     */
    workspaceId: string;
    /**
     * Channel name
     */
    name: string;
    /**
     * Human-readable display name
     */
    displayName?: string;
    /**
     * Channel type
     */
    type: 'public' | 'private' | 'dm' | 'group_dm';
    /**
     * Channel description
     */
    description?: string;
    /**
     * Current channel topic
     */
    topic?: string;
    /**
     * Channel icon emoji
     */
    icon?: string;
    /**
     * Whether the channel is archived
     */
    isArchived?: boolean;
    /**
     * Whether this is a default channel for new members
     */
    isDefault?: boolean;
    /**
     * Number of members in the channel
     */
    memberCount?: number;
    /**
     * Unread message count for current user
     */
    unreadCount?: number;
    /**
     * Timestamp of last message
     */
    lastMessageAt?: string;
    lastMessage?: MessagePreview;
    settings?: ChannelSettings;
    /**
     * User who created the channel
     */
    createdBy?: string;
    createdAt: string;
    updatedAt?: string;
};

