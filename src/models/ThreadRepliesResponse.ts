/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from './Message';
import type { Pagination } from './Pagination';
import type { ThreadReply } from './ThreadReply';
export type ThreadRepliesResponse = {
    parentMessage?: Message;
    replies: Array<ThreadReply>;
    pagination: Pagination;
    hasMore?: boolean;
};

