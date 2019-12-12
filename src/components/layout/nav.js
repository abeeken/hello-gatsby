import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./styles/nav.module.scss"

const Nav = ({ data }) => (    
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            {data.allMarkdownRemark.edges.map(edge => {
                const {frontmatter} = edge.node
                return <li><a href={frontmatter.path}>{frontmatter.title}</a></li>                        
            })}   
        </ul>
    </nav>
)

export default () => (    
    <StaticQuery
        query = {graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}, menu_position: {gt: 0}}}, sort: {fields: frontmatter___menu_position, order: ASC}) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `}
        render = {data => <Nav data={data} />}
    />
)