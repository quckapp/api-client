/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HuddleParticipant } from './HuddleParticipant';
import type { UserProfile } from './UserProfile';
export type Huddle = {
    /**
     * Unique huddle identifier
     */
    id: string;
    /**
     * Channel where huddle is active
     */
    channelId: string;
    /**
     * Huddle status
     */
    status: 'active' | 'ended';
    /**
     * User who started the huddle
     */
    startedBy: string;
    starter?: UserProfile;
    /**
     * Current participants
     */
    participants?: Array<HuddleParticipant>;
    /**
     * Number of current participants
     */
    participantCount?: number;
    /**
     * Maximum allowed participants
     */
    maxParticipants?: number;
    /**
     * Whether video is enabled
     */
    hasVideo?: boolean;
    /**
     * Whether someone is screen sharing
     */
    hasScreenShare?: boolean;
    /**
     * Optional huddle topic
     */
    topic?: string;
    /**
     * Link to join huddle
     */
    inviteLink?: string;
    startedAt: string;
    endedAt?: string;
};

