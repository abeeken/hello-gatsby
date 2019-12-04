import React from "react"
import contentStyles from "./styles/content.module.scss"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

export default ({ children }) => (
    <div class="site">
        <Header />
        <Nav />
        <div className={contentStyles.content}>
            {children}
        </div>
        <Footer />
    </div>
)