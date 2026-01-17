/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkspaceSettings } from './WorkspaceSettings';
import type { WorkspaceStats } from './WorkspaceStats';
export type Workspace = {
    /**
     * Unique workspace identifier
     */
    id: string;
    /**
     * Workspace display name
     */
    name: string;
    /**
     * URL-friendly workspace identifier
     */
    slug: string;
    /**
     * Workspace description
     */
    description?: string;
    /**
     * Workspace icon URL
     */
    icon?: string;
    /**
     * Custom domain for the workspace
     */
    domain?: string;
    /**
     * Subscription plan
     */
    plan?: 'free' | 'pro' | 'business' | 'enterprise';
    settings?: WorkspaceSettings;
    stats?: WorkspaceStats;
    /**
     * Workspace owner user ID
     */
    ownerId?: string;
    createdAt: string;
    updatedAt?: string;
};

