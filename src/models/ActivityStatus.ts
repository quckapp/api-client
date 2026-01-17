/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DevicePresence } from './DevicePresence';
/**
 * Detailed activity status
 */
export type ActivityStatus = {
    userId?: string;
    activity?: 'active' | 'idle' | 'away' | 'dnd' | 'offline';
    /**
     * How status was set
     */
    source?: 'manual' | 'auto' | 'schedule' | 'mobile';
    /**
     * When user became idle
     */
    idleSince?: string;
    devices?: Array<DevicePresence>;
};

