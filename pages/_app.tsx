import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NextComponentType } from 'next';
import withReduxStore from '../utils/with-redux-store';
import { Provider } from 'react-redux';
import theme from '../theme/default';
import Layout from '../components/layout/layout';
import Router from 'next/router';
import PageLoading from '../components/common/pageLoading';

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
  state = {
    loading: false,
  };
  startLoading() {
    this.setState({
      loading: true,
    });
  }
  stopLoading() {
    this.setState({
      loading: false,
    });
  }
  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading.bind(this));
    Router.events.on('routeChangeComplete', this.stopLoading.bind(this));
    Router.events.on('routeChangeError', this.stopLoading.bind(this));
  }
  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading.bind(this));
    Router.events.off('routeChangeComplete', this.stopLoading.bind(this));
    Router.events.off('routeChangeError', this.stopLoading.bind(this));
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        {this.state.loading ? <PageLoading /> : null}
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
