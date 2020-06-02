import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <div>
        <Layout>
            <Head title="Home" />
            <h1>Welcome</h1>
            <p>My name is ChunYu.</p>
            <p><Link to="/blog">Blog</Link></p>
        </Layout>
      
    </div>
  )
}

export default IndexPage