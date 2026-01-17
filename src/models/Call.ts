/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CallParticipant } from './CallParticipant';
import type { CallRecording } from './CallRecording';
import type { CallSettings } from './CallSettings';
import type { UserProfile } from './UserProfile';
export type Call = {
    /**
     * Unique call identifier
     */
    id: string;
    /**
     * Call type
     */
    type: 'audio' | 'video';
    /**
     * Current call status
     */
    status: 'ringing' | 'active' | 'ended' | 'missed' | 'declined';
    /**
     * Channel where call was initiated
     */
    channelId?: string;
    /**
     * Workspace ID
     */
    workspaceId?: string;
    /**
     * Call title/topic
     */
    title?: string;
    /**
     * User who started the call
     */
    initiatedBy: string;
    initiator?: UserProfile;
    /**
     * Current participants
     */
    participants?: Array<CallParticipant>;
    /**
     * Maximum allowed participants
     */
    maxParticipants?: number;
    settings?: CallSettings;
    recording?: CallRecording;
    /**
     * When call started
     */
    startedAt?: string;
    /**
     * When call ended
     */
    endedAt?: string;
    /**
     * Call duration in seconds
     */
    duration?: number;
    /**
     * URL to join the call
     */
    joinUrl?: string;
    createdAt: string;
};

