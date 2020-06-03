import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1>Nice to Meet You</h1>
                <p>This is the about page</p>
                <p>Thank you to Andrew Mead for the <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM">GatsbyJS Tutorial</a></p>
            </Layout>
        </div>
    )
}

export default AboutPage