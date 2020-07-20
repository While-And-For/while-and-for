import React, { ReactText, SFC } from 'react';
import styled from 'styled-components';

import { InputNumber as InputNumberDefault } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';
import { InputProps } from '../interface';

const StyledInputNumber = styled(InputNumberDefault)`
  width: 100%;
`;

type Props = {
  formatter?: ((value: string | number | undefined) => string) | undefined;
  parser?: ((displayValue: string | undefined) => ReactText) | undefined;
} & InputProps<number>;

const InputNumber: SFC<Props> = ({
  disabled,
  error,
  field,
  formatter,
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
      <StyledInputNumber
        disabled={disabled}
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
