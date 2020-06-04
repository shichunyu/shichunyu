import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogListStyles from './blogList.module.scss'

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
            <h1>Algorithms</h1>
            <ol className={blogListStyles.posts}>
                {data.allMarkdownRemark.nodes.map((node) => {
                    return (
                        <li className={blogListStyles.post}>
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
        </div>
    )
}

export default BlogPage