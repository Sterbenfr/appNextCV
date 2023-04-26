import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './NavBar'
import Footer from './Footer'


const name = 'Pierre Caudreliez';
export const siteTitle = 'Online CV of Pierre Caudreliez';

export default function Layout({ children, home }) {
  return (
    <div className={styles.fullpage}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Online CV of Pierre Caudreliez"
          />
          <meta
            property="og:image"
            content="/favicon.png"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{siteTitle}</title>
        </Head>
        <NavBar />
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/PP.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="My profile picture"
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/PP.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt="My profile picture"
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>
          {children}
        </main>
        <div className={styles.containerFoot}>
          <Footer />
        </div>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
}