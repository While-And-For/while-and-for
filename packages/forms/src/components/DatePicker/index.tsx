import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { DatePicker as DatePickerDefault } from 'antd';
import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';
import { InputProps } from '../interface';

type Props = InputProps<moment.Moment> & {
  setFieldValue: (a: moment.Moment | null) => void;
};

const DatePicker: FunctionComponent<Props> = ({
  error,
  field,
  label,
  placeholder,
  required,
  setFieldValue,
  status,
  touched,
  validate
}) => (
  <Item
    hasFeedback={validate}
    help={touched && error}
    label={label || placeholder}
    required={required}
    validateStatus={touched ? status : ''}
  >
    <DatePickerDefault
      format="Do MMM YYYY"
      placeholder={placeholder}
      name={field.name}
      onChange={setFieldValue}
      value={field.value}
    />
  </Item>
);

DatePicker.defaultProps = {
  error: undefined
};

export default withFieldMeta(DatePicker);
