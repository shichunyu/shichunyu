/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'ChunYu\'s Algorithm Library',
        author: 'ChunYu Shi'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-line-breaks`,
                    'gatsby-plugin-sharp',
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    },
                    "gatsby-remark-sub-sup",
                    "gatsby-remark-autolink-headers",
                    {
                        resolve: `gatsby-remark-table-of-contents`,
                        options: {
                            exclude: "Table of Contents",
                            tight: false,
                            fromHeading: 1,
                            toHeading: 6
                        },
                    },
                ],
            },
        },
    ],
}
