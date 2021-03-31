import React from 'react';

import Title, { TitleProps } from './Title';

const H4: React.FC<TitleProps> = ({ children, style }) => (
  <Title level={4} style={style}>
    {children}
  </Title>
);

export default H4;
