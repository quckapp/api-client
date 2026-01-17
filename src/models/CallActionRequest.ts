/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CallActionRequest = {
    /**
     * Action to perform
     */
    action: 'mute_audio' | 'unmute_audio' | 'mute_video' | 'unmute_video' | 'start_screen_share' | 'stop_screen_share' | 'raise_hand' | 'lower_hand' | 'start_recording' | 'stop_recording' | 'end_call';
    /**
     * Target user for host actions
     */
    targetUserId?: string;
};

