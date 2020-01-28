import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Checkbox as CheckboxDefault, Form, Typography } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import { InputProps } from '../interface';

const { Item } = Form;
const TextDefault = Typography.Text;

const Text = styled(TextDefault)`
  line-height: 1.5 !important;
`;

type Props = {
  childen: string | React.Component;
  onChange: (e: boolean) => void;
} & InputProps<boolean>;

const Checkbox: FunctionComponent<Props> = ({
  children,
  field,
  onChange,
  setFieldValue
}) => (
  <Item>
    <CheckboxDefault
      checked={field.value}
      name={field.name}
      onChange={({ target: { checked } }: any): void => {
        if (typeof onChange === 'function') {
          onChange(checked);
          return;
        }
        setFieldValue(checked);
      }}
    />
    &nbsp;
    <Text>{children}</Text>
    <br />
  </Item>
);

export default withFieldMeta(Checkbox);
