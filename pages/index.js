import Head from "next/head";
import styles from "../styles/Home.module.css";
import LevelProgress from "../components/LevelProgress";

export default function Home() {
  let UserOverall = 0;
  return (
    <div className={styles.container}>
      <Head>
        <title>GGPredict</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LevelProgress UserOverall={UserOverall} />
      </main>
    </div>
  );
}