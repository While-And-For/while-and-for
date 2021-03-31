import React from 'react';

import Title, { TitleProps } from './Title';

const H3: React.FC<TitleProps> = ({ children, style }) => (
  <Title level={3} style={style}>
    {children}
  </Title>
);

export default H3;
