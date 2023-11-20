import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const CheckoutPaymentRemote: React.ComponentType<{
  customLink: typeof Link;
}> = dynamic(() => import('checkout/payment'), {
  ssr: false,
});
// let CheckoutPaymentRemote: React.ComponentType<{
//   customLink: typeof Link;
// }> = () => null;
// if (typeof window !== 'undefined') {
//   CheckoutPaymentRemote = React.lazy(() => import('checkout/payment'));
// }

const CheckoutPayment = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Next 12 MFE - Checkout</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* {isClient && <CheckoutPaymentRemote customLink={Link} />} */}
      <CheckoutPaymentRemote customLink={Link} />
    </div>
  );
};

export default CheckoutPayment;
