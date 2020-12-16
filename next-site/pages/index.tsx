import Head from 'next/head'
import Header from '@components/header';
import Navigation from '@components/navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Navigation />
        <Header />
      </main>
    </>
  )
}
