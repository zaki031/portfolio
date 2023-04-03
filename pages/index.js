import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Top from "../components/home"
import Bar from "../components/bar"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Zakaria</title>
        <meta name="description" content="your local tech nerd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top/>
        <Bar/>
      </main>
    </div>
  )
}
