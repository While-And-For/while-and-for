import { Dispatch, SetStateAction, FunctionComponent } from 'react';
declare type Props = {
    prefix?: string;
    setPrefix: Dispatch<SetStateAction<string | undefined>>;
};
declare const CountryCodes: FunctionComponent<Props>;
export default CountryCodes;
