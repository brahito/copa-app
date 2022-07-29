import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Noticias: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Copa App</title>
        <meta name="description" content="esto es una pagina de ejemplo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}

export default Noticias
