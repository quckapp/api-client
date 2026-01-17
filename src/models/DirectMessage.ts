/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessagePreview } from './MessagePreview';
import type { UserProfile } from './UserProfile';
/**
 * Direct message channel between two users
 */
export type DirectMessage = {
    id?: string;
    type?: 'dm';
    participants?: Array<UserProfile>;
    lastMessage?: MessagePreview;
    unreadCount?: number;
};

