import React from "react"
import { graphql } from "gatsby"
import Content from "../components/layout/content"
import { Helmet } from "react-helmet"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (            
        <Content>
            <Helmet>
                <title>The Fantastic Site | { frontmatter.title }</title>
            </Helmet>
            <img class="headerimage" src={ frontmatter.featured_image } alt="Gate" />
            <div class="page">
                <h2>{ frontmatter.title }</h2>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Content>
    )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featured_image
      }
    }
  }
`