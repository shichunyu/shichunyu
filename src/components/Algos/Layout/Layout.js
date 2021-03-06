import React from 'react'

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