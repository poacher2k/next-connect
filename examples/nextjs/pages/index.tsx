import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + next-connect</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/hoangvvo/next-connect/tree/main/examples/nextjs">
            Next.js + next-connect
          </a>
        </h1>
        <div className={styles.grid}>
          <Link href="/gssp-users">
            <a className={styles.card}>
              <h2>Get Server Side Props</h2>
              <p>Use next-connect in getServerSideProps</p>
            </a>
          </Link>

          <Link href="/api-routes">
            <a className={styles.card}>
              <h2>API Routes</h2>
              <p>Use next-connect in API Routes</p>
            </a>
          </Link>

          <Link href="/edge-api-routes">
            <a className={styles.card}>
              <h2>Edge API Routes (Beta)</h2>
              <p>Use next-connect in API Routes</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
