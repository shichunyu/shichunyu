import React from 'react'
import { Link } from 'gatsby'
import styles from './Header.module.scss'

const Layout = () => {
    return (
        <div className={styles.navBar}>
            <ul>
                <li>Moon Talk</li>
                {/* <li>About</li>
                <li>Contact</li> */}
                <li className={styles.navItem}><a href="https://www.producthunt.com/upcoming/moon-talk">Sign Up</a></li>
            </ul>
            
        </div>
    )
}

export default Layout