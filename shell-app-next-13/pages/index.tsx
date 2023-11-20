import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next 13 MFE - home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          This is a sample test application for integrating MFE (microfrontends)
        </p>

        <div className={styles.grid}>
          <Link href='/checkout/user-infos' className={styles.card}>
            <h2>Checkout &rarr;</h2>
            <p>Redirects to checkout page with integrated MFE</p>
          </Link>

          <Link href='/react-example' className={styles.card}>
            <h2>Example &rarr;</h2>
            <p>Redirects to page with integrated MFE with react v18</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
