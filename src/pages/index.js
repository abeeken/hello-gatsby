import React from "react"
import { graphql } from "gatsby"
import Content from "../components/layout/content"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default ({ data }) => (            
    <Content>
        <Helmet>
            <title>The Fantastic Site</title>
        </Helmet>
        <Img className="headerimage" fluid={data.file.childImageSharp.fluid} alt="Gate" />
        <div class="page">
            <h2>Hello there!</h2>
            <p>This is as little site I put together to play around with Gatsby and Netlify. You can find the source code on GitHub at: <a href="https://github.com/abeeken/hello-gatsby">https://github.com/abeeken/hello-gatsby</a> and you can visit my site at <a href="https://andrewbeeken.co.uk/">https://andrewbeeken.co.uk/</a></p>
            <p>Hit me up at <a href="https://twitter.com/abeeken">@abeeken</a></p>
        </div>
    </Content>
)

export const query = graphql`
query {
    file(relativePath: { eq: "IMG_20181028_155042.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`