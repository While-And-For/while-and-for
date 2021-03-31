import React, { ReactNode } from 'react';
import { Properties } from 'csstype';

import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

import formItemLayout from '../../utilities/formItemLayout';

type Props = {
  children: string | ReactNode;
  colon?: boolean;
  extra?: string | ReactNode;
  hasFeedback?: boolean;
  help?: string | ReactNode;
  htmlFor?: string;
  label?: string | ReactNode;
  labelCol?: {
    [key: string]: number;
  };
  style?: Properties;
  required?: boolean;
  validateStatus?: '' | 'success' | 'warning' | 'error' | undefined;
  wrapperCol?: {
    [key: string]: number;
  };
};

const Item: React.FC<Props> = ({
  children,
  colon,
  extra,
  hasFeedback,
  help,
  htmlFor,
  label,
  labelCol,
  required,
  style,
  validateStatus,
  wrapperCol
}) => {
  return (
    <Form.Item
      colon={colon}
      extra={extra}
      hasFeedback={hasFeedback}
      help={help}
      htmlFor={htmlFor}
      label={label}
      labelCol={labelCol}
      required={required}
      style={style}
      validateStatus={validateStatus}
      wrapperCol={wrapperCol}
    >
      {children}
    </Form.Item>
  );
};

Item.defaultProps = {
  labelCol: formItemLayout.labelCol,
  wrapperCol: formItemLayout.wrapperCol
};

export default Item;
