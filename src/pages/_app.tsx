import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp(props: AppProps) {
  let { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Next boilerplate</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content="description" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
