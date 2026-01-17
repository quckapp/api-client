/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CallRecurrence = {
    frequency?: 'daily' | 'weekly' | 'biweekly' | 'monthly';
    daysOfWeek?: Array<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'>;
    endDate?: string;
    /**
     * Number of occurrences
     */
    occurrences?: number;
};

