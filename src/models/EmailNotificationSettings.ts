/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EmailNotificationSettings = {
    enabled?: boolean;
    frequency?: 'instant' | 'hourly' | 'daily' | 'weekly';
    /**
     * Include message content in emails
     */
    includeContent?: boolean;
    types?: Array<'mentions' | 'dms' | 'threads' | 'digests' | 'announcements'>;
};

