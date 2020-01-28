import { Component, ReactNode } from 'react';
declare type State = {
    hasError: boolean;
    error?: {
        [key: string]: any;
    };
};
declare type Props = {
    ErrorComponent?: ReactNode;
    children: ReactNode;
};
declare class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props);
    static defaultProps: {
        ErrorComponent: null;
    };
    static getDerivedStateFromError(error: State['error']): State;
    render(): ReactNode;
}
export default ErrorBoundary;
