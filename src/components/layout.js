import React, { useState, useEffect } from "react"
import AOS from "aos"
import Nav from "./Nav/Nav"
import NavMobile from "./NavMobile/NavMobile"
import NavPannel from "./NavPannel/NavPannel"
import Footer from "./Footer/Footer"
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
      <NavMobile handleClick={handleNavPannel} />
      <NavPannel show={navPannelState} handleClick={handleNavPannel} />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
