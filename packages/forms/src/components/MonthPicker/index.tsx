import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { DatePicker } from 'antd';
import withFieldMeta from '../../utilities/withFieldMeta';

import Item from '../Item';
import { InputProps } from '../interface';

const MonthPickerDefault = DatePicker.MonthPicker;

type Props = InputProps<moment.Moment> & {
  setFieldValue: (a: moment.Moment | null) => void;
};

const MonthPicker: FunctionComponent<Props> = ({
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
    <MonthPickerDefault
      placeholder={placeholder}
      name={field.name}
      onChange={setFieldValue}
      value={field.value}
    />
  </Item>
);

MonthPicker.defaultProps = {
  error: undefined
};

export default withFieldMeta(MonthPicker);
