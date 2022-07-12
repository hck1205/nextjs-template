import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

import { LayoutComponent } from '@/components';
import { wrapper } from '@/store';

import 'antd/dist/antd.css';
import '../src/assets/styles/index.scss';

const withoutLayoutPageList = ['/login', '/signup'];

const withoutLayout = (path: string) => withoutLayoutPageList.includes(path);

function storePathValues() {
  const storage = globalThis?.sessionStorage;

  if (!storage) return;

  // Set the previous path as the value of the current path.
  const prevPath = storage.getItem('currentPath');
  console.log('prevPath', prevPath);

  storage.setItem('prevPath', prevPath);

  // Set the current path value by looking at the browser's location object.
  storage.setItem('currentPath', globalThis.location.pathname);
}

const RootApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => storePathValues, [router.asPath]);

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
