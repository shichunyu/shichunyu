import React from "react"
import { Link } from 'gatsby'
import styles from './Splash.module.scss'

const IndexPage = () => {
    return (
        <div className={styles.content}>
            <div className={styles.box}>
                <Link to="/algos">
                    Algorithms
                </Link>
            </div>
            <div className={styles.box}>
                <Link to="/moontalk">
                    Moon Talk
                </Link>
            </div>
        </div>
    )
}

export default IndexPage


