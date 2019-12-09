import React from "react"
import { graphql } from "gatsby"
import Content from "../components/layout/content"
import { Helmet } from "react-helmet"

const BlogPage = ({data}) => {
    const {edges} = data.allMarkdownRemark
    console.log(edges)
    return(
        <Content>
            <Helmet>
                <title>The Fantastic Site | Blog</title>
            </Helmet>
            <div class="page blog">
                <h2>Blog</h2>
                {edges.map(edge => {
                    const {frontmatter} = edge.node
                    return(
                        <div class="post">
                            <h3 key={frontmatter.path}><a href={frontmatter.path}>{frontmatter.title}</a></h3>
                            <p>{frontmatter.date}</p>
                            <p>{edge.node.excerpt}</p>
                        </div>
                    )
                })}
            </div>
        </Content>
    )
}

export default BlogPage

export const query = graphql`
    query {
        allMarkdownRemark (
            sort: {order: DESC, fields: [frontmatter___date]}
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        path
                    }
                }
            }
        }
    }
`