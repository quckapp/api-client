/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileMetadata } from './FileMetadata';
import type { FileShare } from './FileShare';
import type { UserProfile } from './UserProfile';
export type File = {
    /**
     * Unique file identifier
     */
    id: string;
    /**
     * Original filename
     */
    name: string;
    /**
     * Custom display name
     */
    displayName?: string;
    /**
     * MIME type
     */
    mimeType: string;
    /**
     * File size in bytes
     */
    size: number;
    /**
     * File extension
     */
    extension?: string;
    /**
     * Download URL
     */
    url?: string;
    /**
     * Thumbnail URL for images/videos
     */
    thumbnailUrl?: string;
    /**
     * Preview URL
     */
    previewUrl?: string;
    /**
     * User who uploaded the file
     */
    uploadedBy: string;
    uploader?: UserProfile;
    workspaceId?: string;
    /**
     * Channel where file was shared
     */
    channelId?: string;
    /**
     * Message containing the file
     */
    messageId?: string;
    /**
     * File category
     */
    category?: 'image' | 'video' | 'audio' | 'document' | 'spreadsheet' | 'presentation' | 'archive' | 'code' | 'other';
    metadata?: FileMetadata;
    /**
     * Whether file is publicly accessible
     */
    isPublic?: boolean;
    /**
     * When file access expires
     */
    expiresAt?: string;
    /**
     * Number of downloads
     */
    downloadCount?: number;
    shares?: Array<FileShare>;
    createdAt: string;
    updatedAt?: string;
};

