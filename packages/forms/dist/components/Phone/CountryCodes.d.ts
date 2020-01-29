import React, { Dispatch, SetStateAction } from 'react';
declare type Props = {
    prefix?: string;
    setPrefix: Dispatch<SetStateAction<string | undefined>>;
};
declare const CountryCodes: React.SFC<Props>;
export default CountryCodes;
