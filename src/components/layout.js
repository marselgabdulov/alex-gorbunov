import React, { useEffect, useState } from "react"
import AOS from "aos"
import Navigation from "./Navigation/Navigation"
import NavPannel from "./NavPannel/NavPannel"

import "./layout.scss"

function Layout({ children }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    AOS.init()
  })

  function handleNavPannel() {
    visible ? setVisible(false) : setVisible(true)
  }

  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Navigation handleClick={handleNavPannel} />
      <NavPannel handleClick={handleNavPannel} visible={visible} />
      <div className="content">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
