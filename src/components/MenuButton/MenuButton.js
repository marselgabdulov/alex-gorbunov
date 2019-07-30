import React from "react"
import "./MenuButton.scss"

function MenuButton(props) {
  return (
    <div className="menu-button" onClick={props.handleClick}>
      <span className="menu-button__text" style={{ color: props.color }}>
        меню
      </span>
      <div className="menu-button__lines">
        <div className="one" style={{ backgroundColor: props.color }}></div>
        <div className="two" style={{ backgroundColor: props.color }}></div>
        <div className="three" style={{ backgroundColor: props.color }}></div>
      </div>
    </div>
  )
}

export default MenuButton
