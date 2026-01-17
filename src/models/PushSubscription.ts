/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PushSubscription = {
    /**
     * Push service endpoint
     */
    endpoint: string;
    keys: {
        /**
         * Public key for encryption
         */
        p256dh: string;
        /**
         * Authentication secret
         */
        auth: string;
    };
    expirationTime?: string;
};

