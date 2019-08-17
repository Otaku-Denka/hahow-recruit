import * as React from 'react';

import { NextPage } from 'next';
import { Button } from 'antd';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: NextPage = () => {
  return (
    <div>
      <Title>My page</Title>
      <h1>Hello Next.js </h1>
      <Button>asadasdad</Button>
    </div>
  );
};

export default IndexPage;
