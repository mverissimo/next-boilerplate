import React from 'react';
import Head from 'next/head';

import { Button } from '@components/Button';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{process.env.SITE_TITLE}</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content={process.env.SITE_DESCRIPTION} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button>Button</Button>
    </React.Fragment>
  );
}
