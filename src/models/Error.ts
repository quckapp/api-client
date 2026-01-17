/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorDetail } from './ErrorDetail';
export type Error = {
    error: {
        /**
         * Error code
         */
        code: 'BAD_REQUEST' | 'UNAUTHORIZED' | 'FORBIDDEN' | 'NOT_FOUND' | 'CONFLICT' | 'VALIDATION_ERROR' | 'RATE_LIMITED' | 'INTERNAL_ERROR' | 'SERVICE_UNAVAILABLE';
        /**
         * Human-readable error message
         */
        message: string;
        /**
         * Detailed error information
         */
        details?: Array<ErrorDetail>;
        /**
         * Request ID for tracing
         */
        requestId?: string;
        /**
         * Link to relevant documentation
         */
        documentation?: string;
    };
};

