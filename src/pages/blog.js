import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title,
                        date,
                        number
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)
    
    return (
        <div>
            <Layout>
                <Head title="Blog" />
                <h1>Blog Posts</h1>
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.nodes.map((node) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${node.fields.slug}`}>
                                    <h1>
                                        {node.frontmatter.number}. {node.frontmatter.title}
                                    </h1>
                                    <p>{node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage