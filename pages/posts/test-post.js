import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function TestPost() {
  return (
    <Layout>
      <Head>
        <title>Test Post</title>
      </Head>
      <h1>Test Post</h1>
    </Layout>
  )
}