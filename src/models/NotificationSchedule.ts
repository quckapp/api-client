/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Do Not Disturb schedule
 */
export type NotificationSchedule = {
    enabled?: boolean;
    /**
     * Start time (HH:MM)
     */
    startTime?: string;
    /**
     * End time (HH:MM)
     */
    endTime?: string;
    /**
     * Days when schedule is active
     */
    days?: Array<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'>;
    /**
     * Timezone for schedule
     */
    timezone?: string;
    /**
     * Allow urgent notifications during DND
     */
    allowUrgent?: boolean;
};

