import React, { ReactNode } from 'react';

import { Tag } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';
import Item from '../Item';
import { InputProps } from '../interface';

const { CheckableTag } = Tag;

type Option = {
  value: any;
  label: string;
};

type Props = {
  options: Option[];
} & InputProps<any>;

const TagSelect: React.SFC<Props> = ({
  field,
  error,
  label,
  options,
  required,
  setFieldValue,
  status,
  validate
}) => (
  <Item
    help={validate && error}
    label={label}
    required={required}
    validateStatus={validate ? status : ''}
  >
    {options.map(
      ({ value, label }: Option): ReactNode => (
        <CheckableTag
          key={value}
          checked={value === field.value}
          onChange={(): void => setFieldValue(value)}
        >
          {label}
        </CheckableTag>
      )
    )}
  </Item>
);

export default withFieldMeta<Props>(TagSelect);
