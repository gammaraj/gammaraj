import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Login from './login'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <SessionProvider>
      <Head>
        <title>Boxy</title>
        <meta name="description" content="Boxy" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <nav className='container'>
        <Link href="/">
          <a>
          <Image
            src="/images/boxy-logo.png"
            alt="logo"
            width={120}
            height={100}
          /></a>
        </Link>
        <ul>
          <li><Login/></li>
       </ul>
      </nav>
      <hr></hr>
      <br></br>
      <main className='container'>      
        {children}
      </main>

      
      <br></br>
      <footer className="container">
        <small><em>© Boxy - Get Shit Done</em></small>
      </footer>
    </SessionProvider>
  )
}