/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OtpResponse } from '../models/OtpResponse';
import type { PhoneLoginRequest } from '../models/PhoneLoginRequest';
import type { PhoneOtpRequest } from '../models/PhoneOtpRequest';
import type { PhoneVerifyRequest } from '../models/PhoneVerifyRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PhoneOtpService {
    /**
     * Request OTP
     * Request a one-time password sent via SMS.
     * Rate limits: 5 per day per phone, 10 per hour per IP.
     *
     * @returns OtpResponse OTP sent successfully
     * @throws ApiError
     */
    public static requestPhoneOtp({
        requestBody,
    }: {
        requestBody: PhoneOtpRequest,
    }): CancelablePromise<OtpResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/auth/phone/request-otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid phone number or rate limit exceeded`,
            },
        });
    }
    /**
     * Verify OTP
     * Verify the OTP code without logging in
     * @returns OtpResponse OTP verified
     * @throws ApiError
     */
    public static verifyPhoneOtp({
        requestBody,
    }: {
        requestBody: PhoneVerifyRequest,
    }): CancelablePromise<OtpResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/auth/phone/verify-otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or expired OTP`,
            },
        });
    }
    /**
     * Login with OTP
     * Verify OTP and login. Creates account if phone number is new.
     *
     * @returns OtpResponse Login successful
     * @throws ApiError
     */
    public static phoneLogin({
        requestBody,
    }: {
        requestBody: PhoneLoginRequest,
    }): CancelablePromise<OtpResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/auth/phone/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid OTP`,
            },
        });
    }
    /**
     * Resend OTP
     * Resend OTP to the same phone number.
     * Cooldown: 60 seconds between resends.
     *
     * @returns OtpResponse OTP resent
     * @throws ApiError
     */
    public static resendPhoneOtp({
        requestBody,
    }: {
        requestBody: PhoneOtpRequest,
    }): CancelablePromise<OtpResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/auth/phone/resend-otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Cooldown not elapsed`,
            },
        });
    }
}
