import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
          <Component {...pageProps}/>
      </Layout>
    </SessionProvider>
  )
}