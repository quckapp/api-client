/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChannelSettings = {
    /**
     * Who can post in this channel
     */
    postingPermissions?: 'everyone' | 'admins' | 'specific_members';
    /**
     * Only allow replies in threads
     */
    threadRepliesOnly?: boolean;
    /**
     * Seconds between posts per user (0 = disabled)
     */
    slowMode?: number;
    /**
     * Message retention days (0 = workspace default)
     */
    retentionDays?: number;
};

