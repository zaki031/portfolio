import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Top from "../components/home"
import About from "../components/about"
import Bar from "../components/bar"
import Tech from '../components/tech'
const inter = Inter({ subsets: ['latin'] })
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <div className='overflow-x-hidden mx-[250px]'>
      <Head>
        <title>Zakaria</title>
        <meta name="description" content="your local tech nerd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top/>
        <Bar/>
        <About/>
        <Tech/>
      </main>
    </div>
  )
}
