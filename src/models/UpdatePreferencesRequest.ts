/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdatePreferencesRequest = {
    /**
     * Enable push notifications
     */
    pushEnabled?: boolean;
    /**
     * Enable email notifications
     */
    emailEnabled?: boolean;
    /**
     * Enable SMS notifications
     */
    smsEnabled?: boolean;
    /**
     * Enable desktop notifications
     */
    desktopNotifications?: boolean;
    /**
     * Enable notification sounds
     */
    soundEnabled?: boolean;
    /**
     * Start of quiet hours (HH:mm:ss)
     */
    quietHoursStart?: string;
    /**
     * End of quiet hours (HH:mm:ss)
     */
    quietHoursEnd?: string;
    /**
     * Enable quiet hours
     */
    quietHoursEnabled?: boolean;
    /**
     * UI theme
     */
    theme?: string;
    /**
     * Preferred language
     */
    language?: string;
    /**
     * Enable compact mode
     */
    compactMode?: boolean;
    /**
     * Collapse sidebar by default
     */
    sidebarCollapsed?: boolean;
    /**
     * Show only unread items
     */
    showUnreadOnly?: boolean;
    /**
     * Show message preview in notifications
     */
    messagePreview?: boolean;
    /**
     * Press Enter to send messages
     */
    enterToSend?: boolean;
    /**
     * Enable markdown in messages
     */
    markdownEnabled?: boolean;
    /**
     * Enable emoji suggestions
     */
    emojiSuggestionsEnabled?: boolean;
    /**
     * Show online status to others
     */
    showOnlineStatus?: boolean;
    /**
     * Show typing indicator to others
     */
    showTypingIndicator?: boolean;
    /**
     * Show read receipts to others
     */
    showReadReceipts?: boolean;
    /**
     * Reduce motion/animations
     */
    reducedMotion?: boolean;
    /**
     * Enable high contrast mode
     */
    highContrast?: boolean;
    /**
     * Font size
     */
    fontSize?: number;
    /**
     * Custom key-value settings
     */
    customSettings?: Record<string, any>;
};

