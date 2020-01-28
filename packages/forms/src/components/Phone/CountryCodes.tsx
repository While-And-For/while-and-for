import React, { Dispatch, SetStateAction, FunctionComponent } from 'react';

import { Select } from 'antd';

import data from './data';

const { Option } = Select;

type Props = {
  prefix?: string;
  setPrefix: Dispatch<SetStateAction<string | undefined>>;
};

const CountryCodes: FunctionComponent<Props> = ({ prefix, setPrefix }) => (
  <Select
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
