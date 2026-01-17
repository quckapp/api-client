/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SearchFilters = {
    workspaceId?: string;
    /**
     * Filter by specific channels
     */
    channelIds?: Array<string>;
    /**
     * Filter by authors
     */
    userIds?: Array<string>;
    /**
     * Messages from specific user
     */
    from?: string;
    /**
     * Channel name or ID
     */
    in?: string;
    /**
     * Messages after this date
     */
    dateFrom?: string;
    /**
     * Messages before this date
     */
    dateTo?: string;
    /**
     * Only messages with attachments
     */
    hasAttachment?: boolean;
    /**
     * Only messages with links
     */
    hasLink?: boolean;
    /**
     * Only messages with reactions
     */
    hasReaction?: boolean;
    /**
     * Only pinned messages
     */
    isPinned?: boolean;
    /**
     * Only starred/bookmarked items
     */
    isStarred?: boolean;
    /**
     * Filter files by type
     */
    fileTypes?: Array<'image' | 'video' | 'audio' | 'document' | 'spreadsheet' | 'presentation' | 'archive' | 'code'>;
    /**
     * Filter by MIME types
     */
    mimeTypes?: Array<string>;
};

