import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LayoutComponent } from '@/components';
import { wrapper } from '@/store';

import 'antd/dist/antd.css';
import '../src/assets/styles/index.scss';

const withoutLayoutPageList = ['/login', '/signup'];

const withoutLayout = (path: string) => withoutLayoutPageList.includes(path);

const RootApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>

      {withoutLayout(appProps.router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      )}
    </>
  );
};

export default wrapper.withRedux(RootApp);
