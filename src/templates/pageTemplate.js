import React from "react"
import { graphql } from "gatsby"
import Content from "../components/layout/content"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    console.log(frontmatter.featured_image)
    return (            
        <Content>
            <Helmet>
                <title>The Fantastic Site | { frontmatter.title }</title>
            </Helmet>
            { frontmatter.featured_image !== null && <Img className="headerimage" fluid={ frontmatter.featured_image.childImageSharp.fluid } /> }
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
        featured_image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`