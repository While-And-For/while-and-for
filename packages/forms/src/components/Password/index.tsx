import React, { SFC } from 'react';

import { Input as InputDefault } from 'antd';
import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';

import { InputProps } from '../interface';

const PasswordDefault = InputDefault.Password;

const Password: SFC<InputProps<string>> = ({
  disabled,
  error,
  field,
  label,
  placeholder,
  prefix,
  required,
  status,
  touched,
  validate
}) => (
  <Item
    hasFeedback={validate}
    help={validate && touched && error}
    label={label}
    required={required}
    validateStatus={validate ? status : ''}
  >
    <PasswordDefault
      disabled={disabled}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
      prefix={prefix}
    />
  </Item>
);

Password.defaultProps = {
  error: undefined,
  label: undefined,
  required: false,
  validate: true
};

export default withFieldMeta<InputProps<string>>(Password);
