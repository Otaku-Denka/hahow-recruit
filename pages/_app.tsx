import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NextComponentType } from 'next';
import withReduxStore from '../utils/with-redux-store';
import { Provider } from 'react-redux';
import theme from '../theme/default';
import Layout from '../components/layout/layout';

interface AppProps {
  Component: NextComponentType;
  pageProps?: any;
  reduxStore: any;
}

class MyApp extends App<AppProps> {
  static async getInitialProps(ctx: any) {
    const { Component } = ctx;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
    };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
