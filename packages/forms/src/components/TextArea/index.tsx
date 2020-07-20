import React from 'react';

import { Input } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import { InputProps } from '../interface';

import Item from '../Item';

const TextAreaDefault = Input.TextArea;

const TextArea: React.SFC<InputProps<string>> = ({
  disabled,
  error,
  field,
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
    <TextAreaDefault
      disabled={disabled}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
    />
  </Item>
);

TextArea.defaultProps = {
  required: false,
  validate: true
};

export default withFieldMeta<InputProps<string>>(TextArea);
