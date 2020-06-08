import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Algos/Layout/Layout'

export const newsQuery = graphql`
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

const News = () => {
    return (
        <Layout>
            test
        </Layout>
    )
}

export default News