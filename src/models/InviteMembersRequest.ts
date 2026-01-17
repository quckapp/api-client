/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InviteMembersRequest = {
    /**
     * Email addresses to invite
     */
    emails: Array<string>;
    role?: 'member' | 'admin' | 'guest';
    /**
     * Channels to auto-add invitees to
     */
    channels?: Array<string>;
    /**
     * Custom invite message
     */
    message?: string;
};

