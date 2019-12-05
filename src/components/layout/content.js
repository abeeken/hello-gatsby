import React from "react"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

export default ({ children }) => (
    <div class="site">     
        <Header />
        <Nav />
        <div className="content">            
            {children}
        </div>        
        <Footer />
    </div>
)