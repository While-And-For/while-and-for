import { FunctionComponent } from 'react';
declare type Props = {
    error: Error;
    status?: 'error' | 'success' | 'warning' | '404' | '500' | '403' | 'info' | undefined;
};
declare const ErrorComponent: FunctionComponent<Props>;
export default ErrorComponent;
