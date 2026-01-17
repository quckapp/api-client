/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SelectOption } from './SelectOption';
import type { TextObject } from './TextObject';
export type BlockElement = {
    type: 'button' | 'image' | 'static_select' | 'multi_static_select' | 'users_select' | 'channels_select' | 'overflow' | 'datepicker' | 'timepicker' | 'checkbox' | 'radio_buttons' | 'plain_text_input';
    text?: TextObject;
    actionId?: string;
    value?: string;
    url?: string;
    style?: 'primary' | 'danger';
    options?: Array<SelectOption>;
    placeholder?: TextObject;
};

