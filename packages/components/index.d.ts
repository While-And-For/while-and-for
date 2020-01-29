/// <reference types="node" />

import { Component, ComponentClass, FC, ReactNode, SFC } from 'react';
import { Button, Row } from 'antd';
import { LayoutProps, SiderProps } from 'antd/lib/layout';
import { Properties } from 'csstype';
import { StyledComponent } from 'styled-components';

declare module '@while-and-for/forms' {
  // --- COMPONENTS ---
  export const AppContainer: StyledComponent<"div", any, {}, never>;
  export const ButtonLink: StyledComponent<typeof Button, any, {}, never>;
  export const ContainerFlex: StyledComponent<"div", any, {}, never>;
  export const Content: StyledComponent<ComponentClass<LayoutProps, any>, any, {}, never>;

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
  export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props);
    static defaultProps: {
      ErrorComponent: null;
    };
    static getDerivedStateFromError(error: State['error']): State;
    render(): ReactNode;
  }

  type ErrorProps = {
    error: Error;
    status?:
      | 'error'
      | 'success'
      | 'warning'
      | '404'
      | '500'
      | '403'
      | 'info'
      | undefined;
  };
  const ErrorComponent: SFC<ErrorProps>;

  export const Header: StyledComponent<typeof Row, any, {}, never>;
  export const Loading: FC;
  export const Sider: StyledComponent<ComponentClass<SiderProps, any>, any, {}, never>;
  // Typography
  export interface TitleProps {
    level?: 4 | 1 | 2 | 3 | undefined;
    style?: Properties;
  }
  export const Title: React.SFC<TitleProps>;
  export const H1: React.SFC<TitleProps>;
  export const H2: React.SFC<TitleProps>;
  export const H3: React.SFC<TitleProps>;
  export const H4: React.SFC<TitleProps>;
}
