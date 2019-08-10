import React, { useEffect } from "react"
import AOS from "aos"
import Navigation from "./Navigation/Navigation"
import NavPannel from "./NavPannel/NavPannel"

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
      <Navigation />
      <NavPannel />
      <div className="content">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
