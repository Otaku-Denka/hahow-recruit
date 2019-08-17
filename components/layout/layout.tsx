import Container from './container';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;
const MyLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <Content>
          <Container>{children}</Container>
        </Content>
      </Container>
    </Layout>
  );
};

const GlobalStyle = createGlobalStyle`
 * {
   padding: 0;
   margin: 0;
 }
  #__next {
    height: 100%;
  }
  .ant-layout {
    min-height: 100%;
    background: #fff;
  }

  .ant-layout-content {
    background: #fff;
  }
`;

export default MyLayout;
