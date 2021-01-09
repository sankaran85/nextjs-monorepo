import Link from 'next/link'
import Head from "next/head";
import styles from '../styles/about.module.scss';
const About = () => (
  <div>
    <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <p className={styles.container}>This is the about page new da.</p>
    <div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
    <img width={200} src="/static/zeit.png" />
  </div>
)

export default About
