/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserProfile } from './UserProfile';
export type HuddleParticipant = {
    userId: string;
    user?: UserProfile;
    isAudioMuted?: boolean;
    isVideoEnabled?: boolean;
    isScreenSharing?: boolean;
    isSpeaking?: boolean;
    joinedAt: string;
};

