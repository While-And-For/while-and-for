import React, { ReactText, SFC } from 'react';

import InputNumberDefault from './InputNumber';

import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';
import { InputProps } from '../interface';

type Props = {
  formatter?: ((value: string | number | undefined) => string) | undefined;
  parser?: ((displayValue: string | undefined) => ReactText) | undefined;
} & InputProps<number>;

const InputNumber: SFC<Props> = ({
  field,
  formatter,
  error,
  label,
  parser,
  placeholder,
  required,
  setFieldValue,
  status,
  touched,
  validate
}) => {
  return (
    <Item
      hasFeedback={validate}
      help={validate && touched && error}
      label={label}
      required={required}
      validateStatus={validate ? status : ''}
    >
      <InputNumberDefault
        formatter={formatter}
        name={field.name}
        value={field.value}
        onChange={setFieldValue}
        parser={parser}
        placeholder={placeholder}
      />
    </Item>
  );
};
InputNumber.defaultProps = {
  formatter: undefined,
  parser: undefined,
  required: false,
  validate: true
};

export default withFieldMeta<Props>(InputNumber);
