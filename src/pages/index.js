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
            <h1>Overview</h1>
            <p>This is a collection of algorithms that I have worked on in the past.
            <br/>Feel free to use the content for your own studies.</p>
            <h2>Sources</h2>
            <p>Questions numbers reference their <a href="https://leetcode.com/">Leetcode</a> problem number, and questions with number "0" are either do not have a Leetcode number, or are sourced from somewhere else (ie. <a href="https://www.algoexpert.io">AlgoExpert</a>).</p>
            <p>I have no affiliation with Leetcode or AlgoExpert, I'm just a student :)</p>
            <h2>Credits</h2>
            <p>This site is built using <a href="https://www.gatsbyjs.org/">GatsbyJS</a> (GraphQL & Markdown Files).</p>
            <p>Posts are written in <a href="https://bear.app/">Bear</a> and then exported as Markdown files for compiling.</p>
        </Layout>
      
    </div>
  )
}

export default IndexPage