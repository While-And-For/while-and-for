import React from 'react';

import styled from 'styled-components';

import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomIcon = styled(Loading3QuartersOutlined)`
  font-size: 4em;
  color: #e80044;
  margin-bottom: 25px;
`;

const Loading: React.FC = () => (
  <Container>
    <Row>
      <CustomIcon spin type="loading" />
      <Title level={4}>loading...</Title>
    </Row>
  </Container>
);

export default Loading;
