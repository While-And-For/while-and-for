import React, { SFC, useEffect, useState } from 'react';

import { Input } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import CountryCodes from './CountryCodes';
import data from './data';

import Item from '../Item';
import { InputProps } from '../interface';

const getPrefix = (phone: string | undefined): string => {
  if (!phone) return data[0].value;
  const prefix = data.find(({ value }) => phone.startsWith(value));
  return prefix ? prefix.value : '';
};

const Phone: SFC<InputProps<string>> = ({
  error,
  field,
  label,
  placeholder,
  required,
  setFieldValue,
  status,
  touched,
  validate
}) => {
  const [prefix, setPrefix] = useState<string | undefined>(
    getPrefix(field.value)
  );
  const inputValue =
    prefix && field.value ? field.value.slice(prefix.length) : '';

  useEffect(() => {
    const subStr = getPrefix(field.value);
    if (subStr !== prefix) {
      setPrefix(prefix || subStr);
      setFieldValue(prefix + inputValue);
    }
    if (field.value !== prefix + inputValue) setFieldValue(prefix + inputValue);
  }, [field.value, setPrefix, prefix, setFieldValue, inputValue]);

  return (
    <Item
      hasFeedback={validate}
      help={validate && touched && error}
      label={label}
      required={required}
      validateStatus={validate ? status : ''}
    >
      <Input
        name={field.name}
        value={inputValue}
        onChange={({ target: { value } }): void => {
          setFieldValue(prefix + value);
        }}
        onBlur={field.onBlur}
        placeholder={placeholder}
        addonBefore={<CountryCodes prefix={prefix} setPrefix={setPrefix} />}
      />
    </Item>
  );
};

export default withFieldMeta<InputProps<string>>(Phone);
