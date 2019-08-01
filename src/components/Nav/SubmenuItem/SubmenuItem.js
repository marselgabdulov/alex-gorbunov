import React from "react"
import "./SubmenuItem.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import Image from "../../Image/Image"

function SubmenuItem(props) {
  return (
    <div className="submenu-item">
      <div
        className="overlay"
        style={{ backgroundColor: `${props.color}` }}
      ></div>
      <div className="submenu-item__image">
        <Image image={props.image} />
      </div>
      <TransitionLink
        to={props.link}
        onClick={props.handleClick}
        exit={{
          length: 0.5,
        }}
        entry={{
          delay: 1,
        }}
      >
        {props.name}
      </TransitionLink>
    </div>
  )
}

export default SubmenuItem
