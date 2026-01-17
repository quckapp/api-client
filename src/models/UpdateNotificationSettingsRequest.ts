/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DesktopNotificationSettings } from './DesktopNotificationSettings';
import type { EmailNotificationSettings } from './EmailNotificationSettings';
import type { MobileNotificationSettings } from './MobileNotificationSettings';
import type { NotificationSchedule } from './NotificationSchedule';
export type UpdateNotificationSettingsRequest = {
    desktop?: DesktopNotificationSettings;
    mobile?: MobileNotificationSettings;
    email?: EmailNotificationSettings;
    schedule?: NotificationSchedule;
};

