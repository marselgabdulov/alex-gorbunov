import React, { useEffect, useState } from "react"
import AOS from "aos"
import Navigation from "./Navigation/Navigation"
import NavPannel from "./NavPannel/NavPannel"
import Loader from "./Loader/Loader"
import Footer from "./Footer/Footer"

import "./layout.scss"

function Main({ children }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Oswald&display=swap"
        rel="stylesheet"
      />
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Navigation />
      <NavPannel />
      <div className="content">
        <main>{children}</main>
      </div>
      <div className="layout-footer"></div>
    </>
  )
}

function Layout({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init()
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })

  return <>{loading ? <Loader /> : <Main children={children} />}</>
}

export default Layout

// <Footer />
