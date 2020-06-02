import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p >Created by {data.site.siteMetadata.author} (c) 2020</p>
            <p>Thank you to Andrew Mead for the <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM">GatsbyJS Tutorial</a></p>
        </footer>
    )
}

export default Footer