const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query AllLessons {
      allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const lessons = result.data.allMdx.edges
    lessons.forEach(({ node }, index) => {
      const next = lessons[index + 1]
      const previous = lessons[index - 1]
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`./src/templates/lesson.js`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    })
  })
}
