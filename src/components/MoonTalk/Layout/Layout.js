import React from 'react'

import Header from '../Header/Header'

import styles from './Layout.module.scss'

const Layout = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout