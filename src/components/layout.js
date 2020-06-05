import React from 'react'
import SideNav from './sideNav'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.columnLeft} >
                <SideNav/>
            </div>
            <div className={layoutStyles.columnRight}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout