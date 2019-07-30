import React from "react"
import "./Logo.scss"
import { Link } from "gatsby"

function Logo() {
  return (
    <div className="logo">
      <div className="logo__link">
        <Link to="/" title="вернуться на главную">
          Алексей Горбунов
        </Link>
      </div>
    </div>
  )
}

export default Logo
