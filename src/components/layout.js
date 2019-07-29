import React, { useState, useEffect } from "react"
import AOS from "aos"
import Nav from "./Nav/Nav"
import NavPannel from "./NavPannel/NavPannel"
import Footer from "./Footer/Footer"
import Grid from "./Grid/Grid"
import "./layout.scss"

function Layout({ children }) {
  const [navPannelState, setNavPannelState] = useState(false)

  useEffect(() => {
    AOS.init()
  })

  function handleNavPannel() {
    setNavPannelState(navPannelState ? false : true)
  }

  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Nav handleClick={handleNavPannel} />
      <NavPannel show={navPannelState} handleClick={handleNavPannel} />

      <main>{children}</main>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default Layout
