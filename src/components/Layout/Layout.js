import React from 'react'

import SideNav from '../SideNav/SideNav'
import LeftHeader from '../LeftHeader/LeftHeader'
import RightHeader from '../RightHeader/RightHeader'
import Content from '../Content/Content'


import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.columnLeft} >
                <LeftHeader/>
                <SideNav/>
            </div>
            <div className={layoutStyles.columnRight}>
                <RightHeader/>
                <Content>
                    {props.children}
                </Content>
                
            </div>
        </div>
    )
}

export default Layout