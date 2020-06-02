import React from 'react'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p className={footerStyles.green}>Created by ChunYu Shi (c) 2020</p>
            <p>Thank you to Andrew Mead for the <a href="https://www.youtube.com/watch?v=8t0vNu2fCCM">GatsbyJS Tutorial</a></p>
        </footer>
    )
}

export default Footer