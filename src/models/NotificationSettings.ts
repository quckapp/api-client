/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelNotificationSettings } from './ChannelNotificationSettings';
import type { DesktopNotificationSettings } from './DesktopNotificationSettings';
import type { EmailNotificationSettings } from './EmailNotificationSettings';
import type { MobileNotificationSettings } from './MobileNotificationSettings';
import type { NotificationSchedule } from './NotificationSchedule';
export type NotificationSettings = {
    /**
     * Master notification toggle
     */
    enabled?: boolean;
    desktop?: DesktopNotificationSettings;
    mobile?: MobileNotificationSettings;
    email?: EmailNotificationSettings;
    schedule?: NotificationSchedule;
    /**
     * Per-channel notification overrides
     */
    channels?: Record<string, ChannelNotificationSettings>;
};

