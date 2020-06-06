import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import styles from './RightHeader.module.scss'

const RightHeader = () => {
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
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default RightHeader