const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node, undefined, 4))
        // console.log('@@@@@@@@@@@@@@@',slug)

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // graphql() function returns a promise. we can use a then call but here we use async-await
    const algoPosts = await graphql(`
        query {
            allMarkdownRemark (
                filter: {fileAbsolutePath: {regex: "/(algorithms)/.*\\\\.md$/"}}
            )
            {
                nodes {
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    algoPosts.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
            component: blogTemplate,
            path: `/algos/${node.fields.slug}`,
            context: {
                slug: node.fields.slug
            }
        })
    })

    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create new pages
}