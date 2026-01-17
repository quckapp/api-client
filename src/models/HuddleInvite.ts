/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfile } from './UserProfile';
export type HuddleInvite = {
    huddleId: string;
    invitedBy: string;
    inviter?: UserProfile;
    invitedUser: string;
    channelId?: string;
    channelName?: string;
    participantCount?: number;
    createdAt?: string;
};

