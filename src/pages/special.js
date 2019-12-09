import React from "react"
import Content from "../components/layout/content"
import pic from "../assets/20180820_150604.jpg"
import { Helmet } from "react-helmet"

export default () => (            
    <Content>
        <Helmet>
            <title>The Fantastic Site | Special</title>
        </Helmet>
        <img class="headerimage" src={pic} alt="Waterfall" />
        <div class="page">
            <h2>Special Page!</h2>
            <p>This is the special page. If you're seeing this then you're doing something right!</p>
        </div>
    </Content>
)
