import React, { Dispatch, SetStateAction } from 'react';

import { Select } from 'antd';

import data from './data';

const { Option } = Select;

type Props = {
  disabled?: boolean;
  prefix?: string;
  setPrefix: Dispatch<SetStateAction<string | undefined>>;
};

const CountryCodes: React.SFC<Props> = ({ disabled, prefix, setPrefix }) => (
  <Select
    disabled={disabled}
    style={{ minWidth: '97px' }}
    optionFilterProp="children"
    onChange={setPrefix}
    placeholder="NZ (+64)"
    value={prefix}
  >
    {data.map(({ name, value }) => (
      <Option key={value} value={value}>
        {name}
      </Option>
    ))}
  </Select>
);

export default CountryCodes;
