/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessagePreview } from './MessagePreview';
import type { UserProfile } from './UserProfile';
/**
 * Group direct message channel
 */
export type GroupDirectMessage = {
    id?: string;
    type?: 'group_dm';
    /**
     * Optional group name
     */
    name?: string;
    participants?: Array<UserProfile>;
    lastMessage?: MessagePreview;
    unreadCount?: number;
};

