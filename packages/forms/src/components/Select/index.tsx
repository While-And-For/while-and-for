import React, { FC } from 'react';

import { Select as SelectDefault } from 'antd';
import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';
import { InputProps } from '../interface';

const { Option } = SelectDefault;

type Props = {
  multiple: boolean;
  onChange: (value: any) => void;
  style: any;
} & InputProps<any>;

const Select: FC<Props> = ({
  children,
  disabled,
  error,
  field,
  label,
  multiple,
  onChange,
  placeholder,
  required,
  setFieldValue,
  status,
  style,
  touched,
  validate
}) => (
  <Item
    hasFeedback={validate}
    help={validate && touched && error}
    label={label}
    required={required}
    validateStatus={validate ? status : ''}
    style={style}
  >
    <SelectDefault
      defaultValue={field.value}
      disabled={disabled}
      onChange={onChange || setFieldValue}
      mode={multiple ? 'multiple' : undefined}
      placeholder={placeholder}
      value={field.value}
    >
      {children}
    </SelectDefault>
  </Item>
);

Select.defaultProps = {
  multiple: false,
  placeholder: 'Select from dropdown',
  required: false,
  validate: true
};

export { Option };

export default withFieldMeta<Props>(Select);
