import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <icon href="" rel=""></icon>
      </Head>

      <Header/>

      {/* Navbar */}
      <Nav />
      {/* Results */}
      <Results />
    </div>
  )
}
