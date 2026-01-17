/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PreferencesResponse = {
    userId?: string;
    pushEnabled?: boolean;
    emailEnabled?: boolean;
    smsEnabled?: boolean;
    desktopNotifications?: boolean;
    soundEnabled?: boolean;
    quietHoursStart?: string;
    quietHoursEnd?: string;
    quietHoursEnabled?: boolean;
    theme?: string;
    language?: string;
    compactMode?: boolean;
    sidebarCollapsed?: boolean;
    showUnreadOnly?: boolean;
    messagePreview?: boolean;
    enterToSend?: boolean;
    markdownEnabled?: boolean;
    emojiSuggestionsEnabled?: boolean;
    showOnlineStatus?: boolean;
    showTypingIndicator?: boolean;
    showReadReceipts?: boolean;
    reducedMotion?: boolean;
    highContrast?: boolean;
    fontSize?: number;
    customSettings?: Record<string, any>;
    updatedAt?: string;
};

