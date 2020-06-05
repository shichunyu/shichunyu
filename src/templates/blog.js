import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

import blogStyles from './blog.module.scss'

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
            <div className={blogStyles.content}>
                <Head title={props.data.markdownRemark.frontmatter.title}/>
                <h1>{props.data.markdownRemark.frontmatter.number}. {props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export default Blog