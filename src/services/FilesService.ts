/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalLink } from '../models/ExternalLink';
import type { File } from '../models/File';
import type { FileShare } from '../models/FileShare';
import type { FileUpdateRequest } from '../models/FileUpdateRequest';
import type { FileUploadRequest } from '../models/FileUploadRequest';
import type { FileUploadResponse } from '../models/FileUploadResponse';
import type { Pagination } from '../models/Pagination';
import type { ShareFileRequest } from '../models/ShareFileRequest';
import type { StorageQuota } from '../models/StorageQuota';
import type { UserProfile } from '../models/UserProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesService {
    /**
     * List files
     * Get files shared in workspace
     * @returns any List of files
     * @throws ApiError
     */
    public static listFiles({
        workspaceId,
        channelId,
        userId,
        category,
        search,
        dateFrom,
        dateTo,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        /**
         * Filter by channel
         */
        channelId?: string,
        /**
         * Filter by uploader
         */
        userId?: string,
        category?: 'image' | 'video' | 'audio' | 'document' | 'spreadsheet' | 'presentation' | 'archive' | 'code' | 'other',
        /**
         * Search by filename
         */
        search?: string,
        dateFrom?: string,
        dateTo?: string,
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        files?: Array<File>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/files',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'channelId': channelId,
                'userId': userId,
                'category': category,
                'search': search,
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'page': page,
                'limit': limit,
            },
        });
    }
    /**
     * Initialize file upload
     * Get a pre-signed URL for file upload
     * @returns FileUploadResponse Upload URL generated
     * @throws ApiError
     */
    public static initFileUpload({
        workspaceId,
        requestBody,
    }: {
        workspaceId: string,
        requestBody: FileUploadRequest,
    }): CancelablePromise<FileUploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/files/upload',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid file type or size exceeds limit`,
                413: `File too large`,
            },
        });
    }
    /**
     * Get file
     * Get file details by ID
     * @returns File File details
     * @throws ApiError
     */
    public static getFile({
        workspaceId,
        fileId,
    }: {
        workspaceId: string,
        fileId: string,
    }): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/files/{fileId}',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
            errors: {
                404: `File not found`,
            },
        });
    }
    /**
     * Update file
     * Update file metadata
     * @returns File File updated
     * @throws ApiError
     */
    public static updateFile({
        workspaceId,
        fileId,
        requestBody,
    }: {
        workspaceId: string,
        fileId: string,
        requestBody: FileUpdateRequest,
    }): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspaceId}/files/{fileId}',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete file
     * Delete a file (uploader or admin)
     * @returns void
     * @throws ApiError
     */
    public static deleteFile({
        workspaceId,
        fileId,
    }: {
        workspaceId: string,
        fileId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/files/{fileId}',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
            errors: {
                403: `Not authorized to delete`,
            },
        });
    }
    /**
     * Complete file upload
     * Mark file upload as complete after uploading to pre-signed URL
     * @returns File File upload completed
     * @throws ApiError
     */
    public static completeFileUpload({
        workspaceId,
        fileId,
    }: {
        workspaceId: string,
        fileId: string,
    }): CancelablePromise<File> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/files/{fileId}/complete',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
            errors: {
                400: `Upload not found or already completed`,
            },
        });
    }
    /**
     * Get download URL
     * Get a temporary download URL for a file
     * @returns any Download URL
     * @throws ApiError
     */
    public static getFileDownloadUrl({
        workspaceId,
        fileId,
        disposition = 'attachment',
    }: {
        workspaceId: string,
        fileId: string,
        disposition?: 'inline' | 'attachment',
    }): CancelablePromise<{
        url?: string;
        expiresAt?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/files/{fileId}/download',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
            query: {
                'disposition': disposition,
            },
        });
    }
    /**
     * Share file
     * Share a file with users, channels, or make public
     * @returns FileShare File shared
     * @throws ApiError
     */
    public static shareFile({
        workspaceId,
        fileId,
        requestBody,
    }: {
        workspaceId: string,
        fileId: string,
        requestBody: ShareFileRequest,
    }): CancelablePromise<FileShare> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/files/{fileId}/share',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List file shares
     * Get all shares for a file
     * @returns any File shares
     * @throws ApiError
     */
    public static listFileShares({
        workspaceId,
        fileId,
    }: {
        workspaceId: string,
        fileId: string,
    }): CancelablePromise<{
        shares?: Array<FileShare>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/files/{fileId}/shares',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
            },
        });
    }
    /**
     * Revoke file share
     * Revoke a file share
     * @returns void
     * @throws ApiError
     */
    public static revokeFileShare({
        workspaceId,
        fileId,
        shareId,
    }: {
        workspaceId: string,
        fileId: string,
        shareId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspaceId}/files/{fileId}/shares/{shareId}',
            path: {
                'workspaceId': workspaceId,
                'fileId': fileId,
                'shareId': shareId,
            },
        });
    }
    /**
     * Get storage quota
     * Get workspace storage usage and limits
     * @returns StorageQuota Storage quota information
     * @throws ApiError
     */
    public static getStorageQuota({
        workspaceId,
    }: {
        workspaceId: string,
    }): CancelablePromise<StorageQuota> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/storage',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }
    /**
     * List shared links
     * Get external links shared in workspace
     * @returns any List of external links
     * @throws ApiError
     */
    public static listExternalLinks({
        workspaceId,
        channelId,
        page = 1,
        limit = 20,
    }: {
        workspaceId: string,
        channelId?: string,
        /**
         * Page number for pagination
         */
        page?: number,
        /**
         * Number of items per page
         */
        limit?: number,
    }): CancelablePromise<{
        links?: Array<(ExternalLink & {
            messageId?: string;
            sharedBy?: UserProfile;
            sharedAt?: string;
        })>;
        pagination?: Pagination;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}/links',
            path: {
                'workspaceId': workspaceId,
            },
            query: {
                'channelId': channelId,
                'page': page,
                'limit': limit,
            },
        });
    }
}
