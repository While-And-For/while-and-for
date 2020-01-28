import React, { FunctionComponent, useState } from 'react';

import { AutoComplete as AutoCompleteDefault } from 'antd';

import Item from '../Item';
import withFieldMeta from '../../utilities/withFieldMeta';

import { InputProps } from '../interface';

const lower = (value: string): string => value.toLowerCase();

type Props = {
  dataSource: string[];
  setFieldValue: any;
} & InputProps<string>;

const AutoComplete: FunctionComponent<Props> = ({
  dataSource,
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
  const [data, setData] = useState<string[]>(dataSource);

  const handleSearch: (a?: string) => void = nextValue => {
    if (!nextValue) {
      setData(dataSource);
      return;
    }

    const filtered: string[] = dataSource.filter(
      (option: string) => !!lower(option).includes(lower(nextValue))
    );

    setData(filtered);
  };

  return (
    <Item
      hasFeedback={validate}
      help={touched && error}
      label={label || placeholder}
      required={required}
      validateStatus={validate ? status : undefined}
    >
      <AutoCompleteDefault
        dataSource={data}
        onChange={setFieldValue}
        onSelect={setFieldValue}
        onSearch={handleSearch}
        placeholder={placeholder}
        value={field.value}
      />
    </Item>
  );
};

export default withFieldMeta(AutoComplete);
