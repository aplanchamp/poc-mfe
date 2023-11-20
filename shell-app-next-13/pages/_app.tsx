import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PubSub, EVENTS, CheckoutConfig } from 'context-manager';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import App from 'next/app';
import React from 'react';

// const CartToggleRemote = dynamic(() => import('cart/cartToggle'), {
//   ssr: false,
// });
let CartToggleRemote: React.ComponentType<{}> = () => null;
if (typeof window !== 'undefined') {
  CartToggleRemote = React.lazy(() => import('cart/cartToggle'));
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    PubSub.publish(EVENTS.SET_CHECKOUT_ROUTES, {
      [CheckoutConfig.ROUTES.INFORMATION]: '/checkout/user-infos',
      [CheckoutConfig.ROUTES.PAYMENT]: '/checkout/payment',
    });

    setIsClient(true);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Next 13 application (shell)</h1>
        <p className={styles.subtitle}>✅ uses react 18</p>
        <p className={styles.subtitle}>✅ instanciates MFE react 18 test</p>
        <div className={styles.cartToggleContainer}>
          <Link href='/' className={styles.card}>
            Home
          </Link>
          {isClient && <CartToggleRemote />}
          {/* <CartToggleRemote /> */}
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;
