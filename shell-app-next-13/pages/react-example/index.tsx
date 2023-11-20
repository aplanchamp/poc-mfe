import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

// const RemoteComponent = dynamic(() => import('testRemote/test'), {
//   ssr: false,
// });
let RemoteComponent: React.ComponentType<{}> = () => null;
if (typeof window !== 'undefined') {
  RemoteComponent = React.lazy(() => import('testRemote/test'));
}

const FakeOldReact = () => {
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
      {isClient && <RemoteComponent />}
      {/* <RemoteComponent /> */}
    </div>
  );
};

export default FakeOldReact;
