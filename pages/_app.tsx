import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LayoutComponent } from '@/components';

import 'antd/dist/antd.css';
import '../src/assets/styles/index.scss';

// This default export is required in a new `pages/_app.js` file.

export default function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}
