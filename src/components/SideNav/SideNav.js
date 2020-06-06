import React from 'react'

import BlogList from '../AlgoList/AlgoList'
import Footer from '../Footer/footer'

import sideNav from './sideNav.module.scss'

const SideNav = () => {
    

    return (
        <div className={sideNav.container}>
            <div className={sideNav.topLeft}>
                
            </div>
            <div className={sideNav.bottom}>
                <BlogList/>
                <Footer/>
            </div>

        </div>
    )
}

export default SideNav