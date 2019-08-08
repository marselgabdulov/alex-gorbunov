import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"
import Instagram from "../../images/icons/social/instagram.svg"
import Facebook from "../../images/icons/social/facebook.svg"
import Vk from "../../images/icons/social/vk.svg"

function Footer(props) {
  return (
    <footer className="footer" id="footer">
      <div className="footer__logo">
        <h2>
          <Link to="/" title="вернуться на главную">
            Алексей Горбунов
          </Link>
        </h2>
      </div>
      <div className="footer__links">
        <div className="left">
          <Link to="/services#wedding">свадьбы</Link>
          <Link to="/services#corporate">корпоративы</Link>
          <Link to="/services#kids">детские</Link>
          <Link to="/services#birthday">дни рождения</Link>
        </div>
        <div className="center">
          <div className="social-icon">
            <a
              href="https://vk.com/alexgrantshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Vk />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.facebook.com/alex.gorbunov.969"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div className="right">
          <Link to="/services#private">частные</Link>
          <Link to="/services#city">городские</Link>
          <Link to="/services#promo">промоакции</Link>
          <Link to="/reviews">отзывы</Link>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__phone">
          <a href="tel:+79856446489">+7 985 644 64 89</a>
        </div>
        <div className="footer__email">
          <a href="mailto:gorbunov_show@mail.ru">gorbunov_show@mail.ru</a>
        </div>
      </div>

      <div className="footer__copy">© {new Date().getFullYear()}</div>

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
