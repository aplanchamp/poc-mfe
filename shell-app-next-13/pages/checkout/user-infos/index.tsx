import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// const CheckoutUserInfosRemote: React.ComponentType<{
//   customLink: typeof Link;
// }> = dynamic(() => import('checkout/information'), {
//   ssr: false,
// });
let CheckoutUserInfosRemote: React.ComponentType<{
  customLink: typeof Link;
}> = () => null;
if (typeof window !== 'undefined') {
  CheckoutUserInfosRemote = React.lazy(() => import('checkout/information'));
}

const CheckoutUserInfos = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log('SHELL CheckoutUserInfos');
  return (
    <div>
      <Head>
        <title>Next 12 MFE - Checkout</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <CheckoutUserInfosRemote customLink={Link} /> */}
      {isClient && <CheckoutUserInfosRemote customLink={Link} />}
    </div>
  );
};

export default CheckoutUserInfos;
