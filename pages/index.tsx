import Head from 'next/head'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Base App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js Base App!</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://alimuddinhasan.com"
          target="_blank"
        >
          Created by{' '}
          <span className={styles.logo}>
            Alimuddin Hasan
          </span>
        </a>
      </footer>
    </div>
  )
}
