import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './News.module.scss'

const BlogPage = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter: {fileAbsolutePath: {regex: "/(moon_talk)/.*\\\\.md$/"}},
                sort: {
                    fields: frontmatter___date,
                    order: DESC
                }
            ){
                nodes {
                    frontmatter {
                        title,
                        number,
                        date
                    }
                    html
                }
            }
        }
    `)

    return (
        <div className={styles.wrapper}>
            {data.allMarkdownRemark.nodes.map((node) => {
                return (
                    <div className={styles.container}>
                        <div className={styles.date}>
                            {node.frontmatter.date}
                        </div>
                        <div className={styles.post}>
                            <p className={styles.title}>{node.frontmatter.title}</p>
                            <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
                            <hr className={styles.divider}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogPage