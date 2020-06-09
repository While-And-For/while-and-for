import React from 'react';

import styled from 'styled-components';
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

const CustomIcon = styled(Icon)`
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
