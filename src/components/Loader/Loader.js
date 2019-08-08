import React from "react"
import "./Loader.scss"

function Loader(props) {
  return (
    <div className="loader">
      <link
        href="https://fonts.googleapis.com/css?family=Oswald&display=swap"
        rel="stylesheet"
      />
      <div
        className="loader__logo"
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <span>ведущий Алексей Горбунов</span>
      </div>
    </div>
  )
}

export default Loader
