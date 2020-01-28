import React, { Component, ReactNode } from 'react';

import H3 from '../typography/H3';

type State = {
  hasError: boolean;
  error?: {
    [key: string]: any;
  };
};

type Props = {
  ErrorComponent?: ReactNode;
  children: ReactNode;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static defaultProps = {
    ErrorComponent: null
  };

  static getDerivedStateFromError(error: State['error']): State {
    console.warn('ErrorBoundary: ', error);
    return { hasError: true, error };
  }

  render(): ReactNode {
    const { children, ErrorComponent } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <H3>Something went wrong!</H3>
          {ErrorComponent}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
