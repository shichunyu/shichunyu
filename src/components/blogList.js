import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogListStyles from './blogList.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                sort: {
                    fields: frontmatter___number,
                    order: ASC
                }
            ){
                nodes {
                    frontmatter {
                        title,
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
            <ol className={blogListStyles.posts}>
                {data.allMarkdownRemark.nodes.map((node) => {
                    return (
                        <li className={blogListStyles.post}>
                            <Link to={`/blog/${node.fields.slug}`}>
                                <p>{node.frontmatter.number}. {node.frontmatter.title}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default BlogPage