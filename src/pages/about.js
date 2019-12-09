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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit odio sit amet mi eleifend pharetra. Sed nec urna nec nibh gravida vestibulum. Proin efficitur ex vitae quam consectetur ullamcorper. Nulla facilisi. Donec bibendum viverra ultrices. Proin dapibus nibh sed turpis commodo, at hendrerit nisi finibus. Fusce porttitor mauris nec nibh tincidunt mattis.</p>

        <p>Vivamus vitae ipsum quis ligula pharetra porttitor. Morbi vel enim convallis, tristique quam in, iaculis ligula. Aliquam nec porta felis. Nulla sed felis vel nisi consectetur gravida. Nam vel ex leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut magna felis, tincidunt et felis accumsan, viverra mollis orci. Vivamus eget tempor mi. Nam convallis semper commodo. Duis tincidunt iaculis neque id facilisis. Morbi nec est lobortis, mattis ex nec, porttitor sapien. Quisque a ante condimentum mi dictum suscipit sed nec nisi.</p>
    </div>
  </Content>
)