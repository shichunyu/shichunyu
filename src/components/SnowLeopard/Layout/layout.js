import React from 'react'

import BlogList from '../AlgoList/AlgoList'
import Footer from '../Footer/footer'
import Header from '../Header/Header'
import Content from '../Content/Content'


import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <Header/>
            <div className={layoutStyles.columns}>
                <div className={layoutStyles.columnLeft} >
                    <BlogList />
                    <Footer />
                </div>
                <div className={layoutStyles.columnRight}>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </div>
    )
}

export default Layout