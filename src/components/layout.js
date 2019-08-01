import React, { useEffect } from "react"
import AOS from "aos"
import Nav from "./Nav/Nav"
import NavMobile from "./NavMobile/NavMobile"
import NavPannel from "./NavPannel/NavPannel"
import Footer from "./Footer/Footer"

import "./layout.scss"

function Layout({ children }) {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Nav />
      <NavMobile />
      <NavPannel />
      <div className="content">
        <main>{children}</main>
      </div>
      <div className="layout-footer">
        <Footer />
      </div>
    </>
  )
}

export default Layout
