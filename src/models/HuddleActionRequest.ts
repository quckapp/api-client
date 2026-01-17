/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HuddleActionRequest = {
    /**
     * Action to perform
     */
    action: 'mute' | 'unmute' | 'enable_video' | 'disable_video' | 'start_screen_share' | 'stop_screen_share' | 'invite' | 'leave' | 'end';
    /**
     * User to invite (for invite action)
     */
    targetUserId?: string;
};

