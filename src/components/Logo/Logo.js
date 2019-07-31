import React from "react"
import "./Logo.scss"
import { Link } from "gatsby"

function Logo() {
  return (
    <div className="logo-wrapper">
      <div
        className="logo"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="logo__link">
          <Link to="/" title="вернуться на главную">
            Алексей Горбунов
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Logo
