import React from "react"
import Layout from '../components/Layout/Layout'
import Head from '../components/head'
import '../styles/index.scss'
import '../styles/colors.scss'
import '../styles/prism-tomorrow-custom.css'

const IndexPage = () => {
  return (
    <div>
        <Layout>
            <Head title="Home" />
            <h1>Overview</h1>
            <p>Hello, I am sharing my algorithm notes here both for myself and anyone else looking to learn.</p>
            <h2>Sources</h2>
            <p>Questions numbers reference their <a href="https://leetcode.com/">Leetcode</a> problem number, and questions with number "0" either do not have a Leetcode number, or are sourced from somewhere else (ie. <a href="https://www.algoexpert.io">AlgoExpert</a>).</p>
            <p>I have no affiliation with Leetcode or AlgoExpert, I'm just a student :)</p>
            <h2>Credits</h2>
            <p>This site is built using <a href="https://www.gatsbyjs.org/">GatsbyJS</a> (GraphQL & Markdown Files).</p>
            <p>Posts are written in <a href="https://bear.app/">Bear</a> and then exported as Markdown files for compiling.</p>
        </Layout>
    </div>
  )
}

export default IndexPage