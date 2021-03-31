import React, { ReactNode } from 'react';
import { Properties } from 'csstype';
declare type Props = {
    children: string | ReactNode;
    colon?: boolean;
    extra?: string | ReactNode;
    hasFeedback?: boolean;
    help?: string | ReactNode;
    htmlFor?: string;
    label?: string | ReactNode;
    labelCol?: {
        [key: string]: number;
    };
    style?: Properties;
    required?: boolean;
    validateStatus?: '' | 'success' | 'warning' | 'error' | undefined;
    wrapperCol?: {
        [key: string]: number;
    };
};
declare const Item: React.FC<Props>;
export default Item;
