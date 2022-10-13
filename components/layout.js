import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Boxy</title>
        <meta name="description" content="Boxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='container'>
        <hgroup>
          <Image
            src="/boxy-logo.png"
            alt="Picture of the author"
            width={120}
            height={100}
          />
        </hgroup>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#" role="button" className="outline">Signup/Login</a></li>
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
    </>
  )
}