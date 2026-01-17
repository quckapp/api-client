/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Channel } from './Channel';
import type { File } from './File';
import type { Message } from './Message';
import type { SearchHighlight } from './SearchHighlight';
import type { UserProfile } from './UserProfile';
export type SearchResult = {
    /**
     * Result type
     */
    type: 'message' | 'file' | 'channel' | 'user';
    id: string;
    /**
     * Relevance score
     */
    score: number;
    highlights?: Array<SearchHighlight>;
    message?: Message;
    file?: File;
    channel?: Channel;
    user?: UserProfile;
};

