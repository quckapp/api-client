/**
 * QuckApp TypeScript API Client
 *
 * Auto-generated type-safe client for the QuckApp API
 *
 * @example
 * ```ts
 * import { createClient } from '@quckapp/api-client';
 *
 * const client = createClient({
 *   baseUrl: 'https://api.quckapp.io/v1',
 *   token: 'your-jwt-token',
 * });
 *
 * // Type-safe API calls
 * const { data, error } = await client.auth.login({
 *   email: 'user@example.com',
 *   password: 'password',
 * });
 * ```
 */

export { createClient, type QuckAppClient, type ClientConfig } from './client';
export { QuckAppError, isQuckAppError } from './error';
export * from './types';

// Re-export generated types
export type { paths, components, operations } from './generated/schema';
