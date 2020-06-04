import React from 'react'
import { Link, graphql, useStaticQuery  } from 'gatsby'

import BlogList from './blogList'

import sideNav from './sideNav.module.scss'

const SideNav = () => {
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

    return (
        <div className={sideNav.container}>
            <div className={sideNav.topLeft}>

            </div>
            <div className={sideNav.bottom}>

            </div>
            <Link className={sideNav.title} to="/">
                {data.site.siteMetadata.title}
            </Link>
            
            <nav>
                <ul className={sideNav.navList}>
                    <li>
                        <Link className={sideNav.navItem} activeClassName={sideNav.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={sideNav.navItem} activeClassName={sideNav.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>  
            </nav>
            <BlogList/>
        </div>
    )
}

export default SideNav