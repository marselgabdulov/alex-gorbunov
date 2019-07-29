import React from "react"
import "./Footer.scss"

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__copy">
        © {new Date().getFullYear()}, Алексей Горбунов
      </div>
      <div className="footer__developer">
        Разработан{" "}
        <a
          href="https://marselgabdulov.github.io/personal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MG
        </a>
      </div>
    </footer>
  )
}

export default Footer
