import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const SideNavHeader = () => {
    // "tagged template literal" syntax
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    return(
        <div>
            <Link to="/">
                {data.site.siteMetadata.title}
            </Link>
        </div>
    )
}

export default SideNavHeader