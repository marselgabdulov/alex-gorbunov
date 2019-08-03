import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import "./Submenu.scss"

const links = [
  {
    link: "/services#wedding",
    name: "свадьбы",
  },
  {
    link: "/services#corporate",
    name: "корпоративы",
  },
  {
    link: "/services#kids",
    name: "детские праздники",
  },
  {
    link: "/services#birthday",
    name: "дни рождения",
  },
  {
    link: "/services#private",
    name: "частные праздники",
  },
  {
    link: "/services#city",
    name: "городские праздники",
  },
  {
    link: "/services#promo",
    name: "промоакции",
  },
]

function Submenu({ visible, handleClick }) {
  return (
    <div className={visible ? "submenu--visible" : "submenu--hidden"}>
      {links.map((item, index) => (
        <div className="submenu__link" key={index}>
          <TransitionLink
            to={item.link}
            onClick={handleClick}
            exit={{
              length: 0.5,
            }}
            entry={{
              delay: 1,
            }}
          >
            {item.name}
          </TransitionLink>
        </div>
      ))}
    </div>
  )
}

export default Submenu
