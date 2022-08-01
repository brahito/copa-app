import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import consumer from '../api/consumer'
import { NoticeFeed } from '../components/noticias'
import { Copa } from '../interfaces'
import styles from '../styles/Home.module.css'
import { AssetsInformation, ItemFields } from '../interfaces/interfaces';

interface Props {
  info: ItemFields[];
  assets: AssetsInformation[];
}


const Home: NextPage<Props> = ({ info, assets }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Copa App</title>
        <meta name="description" content="esto es una pagina de ejemplo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoticeFeed informacion={info} imagen={assets} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await consumer.get<Copa>('/spaces/jk1fvg8p57dl/environments/master/entries/?access_token=fVrQThyBRkv650f0LMtnVWAS3Xf1fw4Xo7hNfiGrsVo');

  const info: ItemFields[] = data.items.map((info) => ({
    titulo: info.fields.titulo,
    imagen: info.fields.imagen || null,
  }));

  const assets: any = data.includes.Asset.map((data) => ({
    id: data.sys.id,
    url: data.fields.file.url,
    description: data.fields.description,
    title: data.fields.title,
  }));

  return {
    props: {
      info,
      assets,
    }
  }
}

export default Home
