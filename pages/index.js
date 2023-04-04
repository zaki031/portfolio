import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import {
  Hero,
  About,
  Bar,
  Tech,
  Projects,

} from "../components";
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
        <Hero/>
        <Bar/>
        <About/>
        <Tech/>
        <Projects/>
      </main>
    </div>
  )
}
