import React from "react"
import Content from "../components/layout/content"
import pic from "../assets/IMG_20180822_141058.jpg"
import { Helmet } from "react-helmet"

export default () => (
  <Content>
    <Helmet>
      <title>The Fantastic Site | About</title>
    </Helmet>
    <img class="headerimage" src={pic} alt="Castle" />
    <div class="page">
        <h2>About</h2>
        <p>This is as little site I put together to play around with Gatsby and Netlify. You can find the source code on GitHub at: <a href="https://github.com/abeeken/hello-gatsby">https://github.com/abeeken/hello-gatsby</a> and you can visit my site at <a href="https://andrewbeeken.co.uk/">https://andrewbeeken.co.uk/</a></p>
        <p>Hit me up at <a href="https://twitter.com/abeeken">@abeeken</a></p>
    </div>
  </Content>
)