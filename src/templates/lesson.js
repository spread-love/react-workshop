import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"

import Layout from "../components/layout"

const Lesson = ({ data: { mdx } }) => (
  <Layout>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </Layout>
)

export default Lesson

export const pageQuery = graphql`
  query getLesson($id: String) {
    mdx(id: { eq: $id }) {
      code {
        body
      }
    }
  }
`
