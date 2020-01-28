import React, { FunctionComponent } from 'react';

import { Result } from 'antd';

type Props = {
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

const ErrorComponent: FunctionComponent<Props> = ({ error, status }) => (
  <Result status={status} title={error.name} subTitle={error.message} />
);

export default ErrorComponent;
