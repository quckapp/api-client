/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkspaceSettings = {
    /**
     * Channels users auto-join
     */
    defaultChannels?: Array<string>;
    /**
     * Allow external guests
     */
    allowGuestAccess?: boolean;
    /**
     * Message retention days (0 = forever)
     */
    messageRetention?: number;
    /**
     * File retention days (0 = forever)
     */
    fileRetention?: number;
    /**
     * Allowed email domains for signup
     */
    allowedDomains?: Array<string>;
    sso?: {
        enabled?: boolean;
        provider?: 'saml' | 'oidc';
        required?: boolean;
    };
    security?: {
        mfaRequired?: boolean;
        /**
         * Session timeout in minutes
         */
        sessionTimeout?: number;
        /**
         * Allowed IP addresses/ranges
         */
        ipAllowlist?: Array<string>;
    };
};

