/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from './Error';
import type { ErrorDetail } from './ErrorDetail';
export type ValidationError = (Error & {
    error?: {
        code?: 'VALIDATION_ERROR';
        details?: Array<ErrorDetail>;
    };
});

