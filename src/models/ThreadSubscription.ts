/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ThreadSubscription = {
    threadId: string;
    userId: string;
    /**
     * Whether user is subscribed
     */
    subscribed: boolean;
    /**
     * When to notify user
     */
    notifyOn?: 'all' | 'mentions' | 'none';
    lastReadAt?: string;
    lastReadMessageId?: string;
};

