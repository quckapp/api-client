/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfile } from './UserProfile';
export type CallParticipant = {
    userId: string;
    user?: UserProfile;
    /**
     * Participant status
     */
    status: 'invited' | 'joining' | 'connected' | 'disconnected' | 'left';
    /**
     * Participant role in call
     */
    role?: 'host' | 'co-host' | 'participant';
    /**
     * Audio mute status
     */
    isAudioMuted?: boolean;
    /**
     * Video mute status
     */
    isVideoMuted?: boolean;
    /**
     * Screen sharing status
     */
    isScreenSharing?: boolean;
    /**
     * Hand raised status
     */
    isHandRaised?: boolean;
    /**
     * Currently speaking
     */
    isSpeaking?: boolean;
    joinedAt: string;
    leftAt?: string;
    /**
     * Time in call (seconds)
     */
    duration?: number;
};

