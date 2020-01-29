import React, { ReactNode } from 'react';

import { Input as InputDefault } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';

import { InputProps } from '../interface';

type InputPropsExtended = InputProps<string> & {
  addonAfter?: string | ReactNode;
};

const Input: React.SFC<InputPropsExtended> = ({
  addonAfter,
  field,
  error,
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
    <InputDefault
      addonAfter={addonAfter}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
      prefix={prefix}
    />
  </Item>
);

Input.defaultProps = {
  addonAfter: undefined,
  error: undefined,
  label: undefined,
  prefix: null,
  required: false,
  validate: true
};


export default withFieldMeta<InputPropsExtended>(Input);
