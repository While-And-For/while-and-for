import React, { FunctionComponent } from 'react';

import { Input as InputDefault } from 'antd';
import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';

import { InputProps } from '../interface';

const PasswordDefault = InputDefault.Password;

const Password: FunctionComponent<InputProps<string>> = ({
  field,
  error,
  label,
  placeholder,
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
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
    />
  </Item>
);

Password.defaultProps = {
  error: undefined,
  label: undefined,
  required: false,
  validate: true
};

export default withFieldMeta(Password);
