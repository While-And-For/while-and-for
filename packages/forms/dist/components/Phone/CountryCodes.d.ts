import React, { Dispatch, SetStateAction } from 'react';
declare type Props = {
    disabled?: boolean;
    prefix?: string;
    setPrefix: Dispatch<SetStateAction<string | undefined>>;
};
declare const CountryCodes: React.FC<Props>;
export default CountryCodes;
