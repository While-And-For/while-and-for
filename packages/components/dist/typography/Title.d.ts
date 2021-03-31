import React from 'react';
import { Properties } from 'csstype';
export interface TitleProps {
    level?: 4 | 1 | 2 | 3 | undefined;
    style?: Properties;
}
declare const Title: React.FC<TitleProps>;
export default Title;
