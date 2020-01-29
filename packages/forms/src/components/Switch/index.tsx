import React, { SFC } from 'react';

import { Col, Row, Switch as SwitchDefault, Typography } from 'antd';

import withFieldMeta from '../../utilities/withFieldMeta';

import { InputProps } from '../interface';
import Item from '../Item';

const { Text } = Typography;

type Props = {
  onChange: (value: boolean) => void;
} & InputProps<boolean>;

const Switch: SFC<Props> = ({ children, field, onChange }) => (
  <Item>
    <Row type="flex" justify="space-between">
      <Col>
        <Text>{children}</Text>
      </Col>
      <Col>
        <SwitchDefault
          checked={field.value}
          onChange={onChange || field.onChange}
        />
      </Col>
    </Row>
  </Item>
);

export default withFieldMeta<Props>(Switch);
