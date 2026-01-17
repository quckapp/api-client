/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceToken } from '../models/DeviceToken';
import type { MarkNotificationsReadRequest } from '../models/MarkNotificationsReadRequest';
import type { Notification } from '../models/Notification';
import type { NotificationSettings } from '../models/NotificationSettings';
import type { Pagination } from '../models/Pagination';
import type { PushSubscription } from '../models/PushSubscription';
import type { UpdateNotificationSettingsRequest } from '../models/UpdateNotificationSettingsRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * List notifications
     * Get user's notifications
     * @returns any List of notifications
     * @throws ApiError
     */
    public static listNotifications({
        unread,
        type,
        before,
        after,
        page = 1,
        limit = 20,
    }: {
        /**
         * Only show unread notifications
         */
        unread?: boolean,
        type?: 'message' | 'mention' | 'reaction' | 'thread_reply' | 'channel_invite' | 'workspace_invite' | 'dm' | 'call_incoming' | 'call_missed' | 'huddle_invite' | 'file_shared' | 'reminder' | 'system',
        before?: string,
        after?: string,
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        notifications?: Array<Notification>;
        pagination?: Pagination;
        unreadCount?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
            query: {
                'unread': unread,
                'type': type,
                'before': before,
                'after': after,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Get notification
     * Get a specific notification
     * @returns Notification Notification details
     * @throws ApiError
     */
    public static getNotification({
        notificationId,
    }: {
        notificationId: string,
    }): CancelablePromise<Notification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/{notificationId}',
            path: {
                'notificationId': notificationId,
            },
            errors: {
                404: `Notification not found`,
            },
        });
    }
    /**
     * Delete notification
     * Delete a notification
     * @returns void
     * @throws ApiError
     */
    public static deleteNotification({
        notificationId,
    }: {
        notificationId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/{notificationId}',
            path: {
                'notificationId': notificationId,
            },
        });
    }
    /**
     * Mark notifications as read
     * Mark one or more notifications as read
     * @returns any Notifications marked as read
     * @throws ApiError
     */
    public static markNotificationsRead({
        requestBody,
    }: {
        requestBody: MarkNotificationsReadRequest,
    }): CancelablePromise<{
        markedCount?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/read',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get unread count
     * Get count of unread notifications
     * @returns any Unread notification count
     * @throws ApiError
     */
    public static getUnreadCount(): CancelablePromise<{
        count?: number;
        byType?: Record<string, number>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/unread-count',
        });
    }
    /**
     * Get notification settings
     * Get user's notification settings
     * @returns NotificationSettings Notification settings
     * @throws ApiError
     */
    public static getNotificationSettings(): CancelablePromise<NotificationSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/settings',
        });
    }
    /**
     * Update notification settings
     * Update user's notification settings
     * @returns NotificationSettings Settings updated
     * @throws ApiError
     */
    public static updateNotificationSettings({
        requestBody,
    }: {
        requestBody: UpdateNotificationSettingsRequest,
    }): CancelablePromise<NotificationSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/notifications/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Register push subscription
     * Register a web push subscription
     * @returns any Subscription registered
     * @throws ApiError
     */
    public static registerPushSubscription({
        requestBody,
    }: {
        requestBody: PushSubscription,
    }): CancelablePromise<{
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/push',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unregister push subscription
     * Remove a push subscription
     * @returns void
     * @throws ApiError
     */
    public static unregisterPushSubscription({
        requestBody,
    }: {
        requestBody: {
            endpoint: string;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/push',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Register device token
     * Register a mobile push notification token
     * @returns any Token registered
     * @throws ApiError
     */
    public static registerDeviceToken({
        requestBody,
    }: {
        requestBody: DeviceToken,
    }): CancelablePromise<{
        id?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/device',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unregister device token
     * Remove a mobile push notification token
     * @returns void
     * @throws ApiError
     */
    public static unregisterDeviceToken({
        requestBody,
    }: {
        requestBody: {
            token: string;
        },
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/device',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get DND status
     * Get current Do Not Disturb status
     * @returns any DND status
     * @throws ApiError
     */
    public static getDndStatus(): CancelablePromise<{
        enabled?: boolean;
        endsAt?: string;
        /**
         * Remaining snooze time in minutes
         */
        snoozeRemaining?: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/dnd',
        });
    }
    /**
     * Set DND
     * Enable Do Not Disturb mode
     * @returns any DND enabled
     * @throws ApiError
     */
    public static setDnd({
        requestBody,
    }: {
        requestBody: {
            /**
             * Duration in minutes (0 for indefinite)
             */
            duration?: number;
            /**
             * End time (alternative to duration)
             */
            until?: string;
        },
    }): CancelablePromise<{
        enabled?: boolean;
        endsAt?: string;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/notifications/dnd',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Disable DND
     * Turn off Do Not Disturb mode
     * @returns any DND disabled
     * @throws ApiError
     */
    public static disableDnd(): CancelablePromise<{
        enabled?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/dnd',
        });
    }
    /**
     * Snooze notifications
     * Temporarily snooze all notifications
     * @returns any Notifications snoozed
     * @throws ApiError
     */
    public static snoozeNotifications({
        requestBody,
    }: {
        requestBody: {
            /**
             * Snooze duration in minutes
             */
            duration: number;
        },
    }): CancelablePromise<{
        snoozeUntil?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/snooze',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Send test notification
     * Send a test notification to verify settings
     * @returns any Test notification sent
     * @throws ApiError
     */
    public static sendTestNotification({
        requestBody,
    }: {
        requestBody?: {
            channel?: 'push' | 'email' | 'desktop';
        },
    }): CancelablePromise<{
        sent?: boolean;
        message?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/test',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
