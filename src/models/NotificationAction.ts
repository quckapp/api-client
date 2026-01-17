/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NotificationAction = {
    /**
     * Action identifier
     */
    id: string;
    /**
     * Button label
     */
    label: string;
    /**
     * Action type
     */
    action?: 'open' | 'reply' | 'mark_read' | 'dismiss' | 'accept' | 'decline' | 'join';
    data?: Record<string, any>;
};

