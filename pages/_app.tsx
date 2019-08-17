import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NextComponentType } from 'next';

const theme = {
  colors: {
    primary: '#FF70f3',
  },
};

interface AppProps {
  Component: NextComponentType;
  pageProps?: any;
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
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
