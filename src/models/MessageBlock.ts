/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockElement } from './BlockElement';
import type { TextObject } from './TextObject';
export type MessageBlock = {
    /**
     * Block type
     */
    type: 'section' | 'divider' | 'image' | 'context' | 'actions' | 'header' | 'input' | 'file' | 'video' | 'code' | 'quote' | 'callout' | 'table';
    text?: TextObject;
    accessory?: BlockElement;
    elements?: Array<BlockElement>;
    fields?: Array<TextObject>;
    imageUrl?: string;
    altText?: string;
    title?: TextObject;
    /**
     * Unique block identifier
     */
    blockId?: string;
};

