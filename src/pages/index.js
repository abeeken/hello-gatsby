import React from "react"
import Content from "../components/layout/content"
import pic from "../assets/IMG_20181028_155042.jpg"

export default () => (            
    <Content>
        <img class="headerimage" src={pic} alt="Gate" />
        <div class="page">
            <h2>Hello there!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et enim in elit pellentesque posuere. Phasellus hendrerit erat at dignissim tempus. Cras eu massa sit amet quam vestibulum placerat ut tempus mauris. Duis nec nibh non lorem efficitur pretium. Suspendisse urna libero, bibendum ac elit in, pretium tristique mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce rutrum leo sed mauris sodales pulvinar. Sed fringilla ligula luctus justo dignissim, in laoreet leo pellentesque. Pellentesque lobortis lacinia placerat. In sagittis mollis enim, vitae porttitor orci sagittis ut. Quisque iaculis ac odio vel euismod. Mauris dignissim arcu ac quam condimentum, sit amet rhoncus augue dignissim. Suspendisse in erat justo. Mauris placerat fringilla tortor ut malesuada.</p>

            <p>Pellentesque consectetur pulvinar lacus a feugiat. Nullam semper nulla eget augue condimentum tempor. Morbi a commodo sapien, quis semper purus. Curabitur nec rutrum ligula. Donec ante sapien, ullamcorper vitae vestibulum et, lobortis a mauris. Aenean condimentum fermentum magna nec pretium. Curabitur quis suscipit sapien. Nam nec ornare dolor, eget elementum purus. Cras in suscipit velit, et viverra tortor. Nulla condimentum arcu vitae consectetur lobortis. Nulla commodo erat eu arcu dapibus, in scelerisque tortor gravida.</p>
        </div>
    </Content>
)
