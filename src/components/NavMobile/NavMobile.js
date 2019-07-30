import React from "react"
import Logo from "../Logo/Logo"
import MenuButton from "../MenuButton/MenuButton"
import "./NavMobile.scss"

function NavMobile(props) {
  return (
    <div className="navbar-mobile">
      <Logo />
      <MenuButton handleClick={props.handleClick} color="black" />
    </div>
  )
}

export default NavMobile
