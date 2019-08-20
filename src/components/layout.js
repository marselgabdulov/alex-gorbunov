import React, { useEffect } from "react"
import AOS from "aos"
import Navigation from "./Navigation/Navigation"
import NavPannel from "./NavPannel/NavPannel"
import NavpannelState from "../context/navpannel/NavpannelState"

import "./layout.scss"

function Layout({ children }) {
  useEffect(() => {
    AOS.init()
  })

  return (
    <NavpannelState>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Navigation />
      <NavPannel />
      <div className="content">
        <main>{children}</main>
      </div>
    </NavpannelState>
  )
}

export default Layout
