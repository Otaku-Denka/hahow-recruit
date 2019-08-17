import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { Button } from 'antd';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Title>My page</Title>
      <h1>Hello Next.js 👋</h1>
      <Button>asadasdad</Button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
