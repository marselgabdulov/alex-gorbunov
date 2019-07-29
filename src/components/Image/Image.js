import React from "react"
import "./Image.scss"

function Image({ image }) {
  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${image.src})` }}
    ></div>
  )
}

export default Image
