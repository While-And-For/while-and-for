import React, { Dispatch, SetStateAction } from 'react';
declare type Props = {
    disabled?: boolean;
    prefix?: string;
    setPrefix: Dispatch<SetStateAction<string | undefined>>;
};
declare const CountryCodes: React.SFC<Props>;
export default CountryCodes;
