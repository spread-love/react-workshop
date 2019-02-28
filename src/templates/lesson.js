import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

import Layout from "../components/layout"

const Lesson = ({ data: { mdx }, pageContext: { previous, next } }) => (
  <Layout>
    <h1>{mdx.frontmatter.title}</h1>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
    <div style={{ display: "flex", marginTop: 16, marginBottom: 16 }}>
      {previous && (
        <Link to={previous.node.frontmatter.path}>
          {previous.node.frontmatter.title}
        </Link>
      )}
      <div style={{ flex: 1 }} />
      {next && (
        <Link to={next.node.frontmatter.path}>
          {next.node.frontmatter.title}
        </Link>
      )}
    </div>
  </Layout>
)

export default Lesson

export const pageQuery = graphql`
  query getLesson($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
