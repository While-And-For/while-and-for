import React, { FC } from 'react';

import { Col, Row, Switch as SwitchDefault, Typography } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import { InputProps } from '../interface';
import Item from '../Item';

const { Text } = Typography;

type Props = {
  onChange: (value: boolean) => void;
} & InputProps<boolean>;

const Switch: FC<Props> = ({ children, disabled, field, onChange }) => (
  <Item>
    <Row justify="space-between">
      <Col>
        <Text>{children}</Text>
      </Col>
      <Col>
        <SwitchDefault
          checked={field.value}
          disabled={disabled}
          onChange={onChange || field.onChange}
        />
      </Col>
    </Row>
  </Item>
);

export default withFieldMeta<Props>(Switch);
