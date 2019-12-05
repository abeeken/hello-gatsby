import React from "react"
import Content from "../components/layout/content"
import pic from "../assets/IMG_20190101_153445.jpg"

export default () => (            
    <Content>
        <img class="headerimage" src={pic} alt="Sunset" />
        <div class="page">
            <h2>Contact</h2>
            <ul>
                <li>Tel: 01234 567890</li>
                <li>Email: lipsum@lorem.com</li>
                <li>Twitter: @lipsum</li>
            </ul>
        </div>
    </Content>
)
