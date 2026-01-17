/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MarkNotificationsReadRequest = {
    /**
     * Specific notification IDs to mark read
     */
    notificationIds?: Array<string>;
    /**
     * Mark all notifications as read
     */
    all?: boolean;
    /**
     * Mark all before this timestamp as read
     */
    before?: string;
};

