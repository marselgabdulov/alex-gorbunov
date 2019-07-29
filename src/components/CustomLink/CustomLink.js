import React from "react"
import { Link } from "gatsby"
import "./CustomLink.scss"

function CustomLink({ to, text, title, color }) {
  return (
    <div className="custom-link" style={{ color: color }}>
      <div className="custom-link__lines">
        <div className="one" style={{ backgroundColor: color }}></div>
        <div className="two" style={{ backgroundColor: color }}></div>
      </div>
      <Link to={to}>
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default CustomLink
