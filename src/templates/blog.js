import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/Algos/Layout/Layout'

export const query = graphql`
    query ($slug: String) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
        }
        ){
            frontmatter {
                title,
                date,
                number
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <div>
                <Head title={props.data.markdownRemark.frontmatter.title}/>
                <h1>{props.data.markdownRemark.frontmatter.number}. {props.data.markdownRemark.frontmatter.title}</h1>
                <p>Last Updated: {props.data.markdownRemark.frontmatter.date}</p>
                <h3>Table of Contents</h3> 
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export default Blog