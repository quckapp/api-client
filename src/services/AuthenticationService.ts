/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponse } from '../models/AuthResponse';
import type { BackupCodesResponse } from '../models/BackupCodesResponse';
import type { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import type { ForgotPasswordRequest } from '../models/ForgotPasswordRequest';
import type { LoginRequest } from '../models/LoginRequest';
import type { MessageResponse } from '../models/MessageResponse';
import type { OAuthRequest } from '../models/OAuthRequest';
import type { OtpResponse } from '../models/OtpResponse';
import type { PhoneLoginRequest } from '../models/PhoneLoginRequest';
import type { PhoneOtpRequest } from '../models/PhoneOtpRequest';
import type { PhoneVerifyRequest } from '../models/PhoneVerifyRequest';
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import type { RevokeTokenRequest } from '../models/RevokeTokenRequest';
import type { SessionsResponse } from '../models/SessionsResponse';
import type { TokenResponse } from '../models/TokenResponse';
import type { TokenValidationRequest } from '../models/TokenValidationRequest';
import type { TokenValidationResponse } from '../models/TokenValidationResponse';
import type { TwoFactorDisableRequest } from '../models/TwoFactorDisableRequest';
import type { TwoFactorEnableRequest } from '../models/TwoFactorEnableRequest';
import type { TwoFactorEnableResponse } from '../models/TwoFactorEnableResponse';
import type { TwoFactorLoginRequest } from '../models/TwoFactorLoginRequest';
import type { TwoFactorSetupResponse } from '../models/TwoFactorSetupResponse';
import type { TwoFactorVerifyRequest } from '../models/TwoFactorVerifyRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * Register new user
     * Create a new user account with email and password.
     * Rate limited to 5 requests per hour per IP.
     *
     * @returns AuthResponse Registration successful
     * @throws ApiError
     */
    public static register({
        requestBody,
    }: {
        requestBody: RegisterRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input or password requirements not met`,
                409: `Email already registered`,
                429: `Too many registration attempts`,
            },
        });
    }
    /**
     * Login with email/password
     * Authenticate user with email and password.
     * Rate limited: 5 attempts per 5 minutes, 15-minute block after exceeded.
     *
     * @returns AuthResponse Login successful or 2FA required
     * @throws ApiError
     */
    public static login({
        requestBody,
    }: {
        requestBody: LoginRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials`,
                423: `Account locked due to too many failed attempts`,
                429: `Too many login attempts`,
            },
        });
    }
    /**
     * Complete login with 2FA code
     * Complete login by providing 2FA code after initial login returned requiresTwoFactor=true.
     * Rate limited: 5 attempts per 5 minutes per IP.
     *
     * @returns AuthResponse 2FA verification successful
     * @throws ApiError
     */
    public static loginWith2Fa({
        requestBody,
    }: {
        requestBody: TwoFactorLoginRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/login/2fa',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid 2FA code or token`,
                429: `Too many 2FA attempts`,
            },
        });
    }
    /**
     * Logout and revoke tokens
     * Invalidate current session tokens
     * @returns any Logout successful
     * @throws ApiError
     */
    public static logout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/logout',
            errors: {
                401: `Not authenticated`,
            },
        });
    }
    /**
     * Refresh access token
     * Exchange refresh token for new access token.
     * Rate limited: 30 requests per minute per IP.
     * Refresh tokens are rotated on each use.
     *
     * @returns TokenResponse Token refreshed successfully
     * @throws ApiError
     */
    public static refreshToken({
        requestBody,
    }: {
        requestBody: RefreshTokenRequest,
    }): CancelablePromise<TokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/refresh',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid or expired refresh token`,
            },
        });
    }
    /**
     * Validate JWT token
     * Validate a JWT token and return user information.
     * Rate limited: 100 requests per minute per IP.
     *
     * @returns TokenValidationResponse Token validation result
     * @throws ApiError
     */
    public static validateToken({
        requestBody,
    }: {
        requestBody: TokenValidationRequest,
    }): CancelablePromise<TokenValidationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/validate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Revoke a specific token
     * Revoke a specific token.
     * Rate limited: 10 requests per minute per user.
     *
     * @returns any Token revoked
     * @throws ApiError
     */
    public static revokeToken({
        requestBody,
    }: {
        requestBody: RevokeTokenRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/revoke',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Not authenticated`,
            },
        });
    }
    /**
     * Revoke all tokens for current user
     * Revoke all tokens for the authenticated user (except the current token).
     * Rate limited: 5 requests per 5 minutes per user.
     *
     * @returns any All tokens revoked
     * @throws ApiError
     */
    public static revokeAllTokens(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/token/revoke-all',
            errors: {
                401: `Not authenticated`,
            },
        });
    }
    /**
     * Request password reset
     * Send password reset link to email.
     * Rate limited: 3 requests per hour per IP.
     * Always returns success to prevent email enumeration.
     *
     * @returns MessageResponse Reset email sent if account exists
     * @throws ApiError
     */
    public static forgotPassword({
        requestBody,
    }: {
        requestBody: ForgotPasswordRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/password/forgot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                429: `Too many reset requests`,
            },
        });
    }
    /**
     * Reset password with token
     * Set new password using reset token from email.
     * Rate limited: 5 requests per hour per IP.
     *
     * @returns MessageResponse Password reset successful
     * @throws ApiError
     */
    public static resetPassword({
        requestBody,
    }: {
        requestBody: ResetPasswordRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/password/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or expired token`,
            },
        });
    }
    /**
     * Change password (authenticated)
     * Change password for authenticated user.
     * Rate limited: 5 requests per hour per user.
     *
     * @returns MessageResponse Password changed successfully
     * @throws ApiError
     */
    public static changePassword({
        requestBody,
    }: {
        requestBody: ChangePasswordRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/password/change',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Password requirements not met`,
                401: `Current password incorrect`,
            },
        });
    }
    /**
     * Setup 2FA - get QR code
     * Initialize 2FA setup and return TOTP secret with QR code.
     * Rate limited: 10 requests per hour per user.
     *
     * @returns TwoFactorSetupResponse 2FA setup initiated
     * @throws ApiError
     */
    public static setup2Fa(): CancelablePromise<TwoFactorSetupResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/setup',
            errors: {
                400: `2FA already enabled`,
            },
        });
    }
    /**
     * Enable 2FA after verification
     * Verify TOTP code to complete 2FA setup.
     * Returns backup codes on success.
     * Rate limited: 5 requests per 5 minutes per user.
     *
     * @returns TwoFactorEnableResponse 2FA enabled successfully
     * @throws ApiError
     */
    public static enable2Fa({
        requestBody,
    }: {
        requestBody: TwoFactorEnableRequest,
    }): CancelablePromise<TwoFactorEnableResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/enable',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid 2FA code`,
            },
        });
    }
    /**
     * Disable 2FA
     * Disable 2FA for current user (requires 2FA code and password).
     * Rate limited: 3 requests per hour per user.
     *
     * @returns MessageResponse 2FA disabled
     * @throws ApiError
     */
    public static disable2Fa({
        requestBody,
    }: {
        requestBody: TwoFactorDisableRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/disable',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid password or 2FA code`,
            },
        });
    }
    /**
     * Generate new backup codes
     * Generate new backup codes (invalidates previous codes).
     * Rate limited: 3 requests per hour per user.
     *
     * @returns BackupCodesResponse New backup codes generated
     * @throws ApiError
     */
    public static generateBackupCodes({
        requestBody,
    }: {
        requestBody: TwoFactorVerifyRequest,
    }): CancelablePromise<BackupCodesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/2fa/backup-codes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid 2FA code`,
            },
        });
    }
    /**
     * Login/register with OAuth provider
     * Authenticate using OAuth provider (google, facebook, github, apple).
     * Creates account if user doesn't exist.
     * Rate limited: 10 requests per minute per IP.
     *
     * @returns AuthResponse OAuth authentication successful
     * @throws ApiError
     */
    public static oauthLogin({
        provider,
        requestBody,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
        requestBody: OAuthRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/oauth/{provider}',
            path: {
                'provider': provider,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid OAuth code or configuration`,
            },
        });
    }
    /**
     * Link OAuth provider to existing account
     * Link an OAuth provider to the current user's account.
     * Rate limited: 5 requests per hour per user.
     *
     * @returns MessageResponse Provider linked successfully
     * @throws ApiError
     */
    public static linkOAuthProvider({
        provider,
        requestBody,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
        requestBody: OAuthRequest,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/v1/oauth/{provider}/link',
            path: {
                'provider': provider,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Provider already linked`,
            },
        });
    }
    /**
     * Unlink OAuth provider from account
     * Unlink an OAuth provider from the current user's account.
     * Cannot unlink the last authentication method.
     * Rate limited: 5 requests per hour per user.
     *
     * @returns MessageResponse Provider unlinked successfully
     * @throws ApiError
     */
    public static unlinkOAuthProvider({
        provider,
    }: {
        provider: 'google' | 'facebook' | 'github' | 'apple',
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/v1/oauth/{provider}/unlink',
            path: {
                'provider': provider,
            },
            errors: {
                400: `Cannot unlink last authentication method`,
            },
        });
    }
    /**
     * Get active sessions
     * Get all active sessions for current user.
     * Rate limited: 30 requests per minute per user.
     *
     * @returns SessionsResponse List of active sessions
     * @throws ApiError
     */
    public static getSessions(): CancelablePromise<SessionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/v1/sessions',
        });
    }
    /**
     * Terminate specific session
     * Terminate a specific session by ID.
     * Rate limited: 10 requests per minute per user.
     *
     * @returns any Session terminated
     * @throws ApiError
     */
    public static terminateSession({
        sessionId,
    }: {
        sessionId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/v1/sessions/{sessionId}',
            path: {
                'sessionId': sessionId,
            },
            errors: {
                404: `Session not found`,
            },
        });
    }
    /**
     * Terminate all other sessions
     * Terminate all sessions except current.
     * Rate limited: 5 requests per 5 minutes per user.
     *
     * @returns any All other sessions terminated
     * @throws ApiError
     */
    public static terminateAllSessions(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/v1/sessions/all',
        });
    }
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
