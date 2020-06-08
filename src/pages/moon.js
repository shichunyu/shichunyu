import React from "react"

import Layout from '../components/MoonTalk/Layout/Layout'
import News from '../components/MoonTalk/News/News'

import '../styles/index.scss'
import '../styles/colors.scss'
import '../styles/prism-tomorrow-custom.css'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <News></News>
            </Layout>
        </div>
    )
}

export default IndexPage