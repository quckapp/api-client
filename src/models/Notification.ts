/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationAction } from './NotificationAction';
import type { NotificationData } from './NotificationData';
export type Notification = {
    /**
     * Unique notification identifier
     */
    id: string;
    /**
     * Notification type
     */
    type: 'message' | 'mention' | 'reaction' | 'thread_reply' | 'channel_invite' | 'workspace_invite' | 'dm' | 'call_incoming' | 'call_missed' | 'huddle_invite' | 'file_shared' | 'reminder' | 'system';
    /**
     * User receiving notification
     */
    userId: string;
    /**
     * Notification title
     */
    title?: string;
    /**
     * Notification body text
     */
    body?: string;
    /**
     * Notification icon/emoji
     */
    icon?: string;
    /**
     * Avatar or preview image
     */
    imageUrl?: string;
    data?: NotificationData;
    actions?: Array<NotificationAction>;
    priority?: 'low' | 'normal' | 'high' | 'urgent';
    isRead?: boolean;
    readAt?: string;
    /**
     * Whether to show without sound/vibration
     */
    isSilent?: boolean;
    /**
     * When notification expires
     */
    expiresAt?: string;
    createdAt: string;
};

