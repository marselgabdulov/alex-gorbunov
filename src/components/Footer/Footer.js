import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"

function Footer(props) {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-contacts">
        <div className="footer__phone">
          <span className="footer__title">Позвоните</span>
          <a href="tel:+79166228889">+7 916 622 88 89</a>
        </div>

        <div className="footer__email">
          <span className="footer__title">Напишите</span>
          <a href="mailto:alex.gorbunov@gmail.com">alex.gorbunov@gmail.com</a>
        </div>
      </div>
      <div className="footer-social">
        <span className="footer__title">Социальные сети:</span>
        <div className="footer-social__link">
          <Link to="vk.com" target="_blank" rel="noopener noreferrer">
            VK
          </Link>
        </div>
        <div className="footer-social__link">
          <Link
            to="https://www.facebook.com/alex.gorbunov.969/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
        </div>
        <div className="footer-social__link">
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </div>
        <div className="footer-social__link">
          <Link
            to="https://www.youtube.com/watch?v=xkAQ6bhpwYw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </Link>
        </div>
        <div className="footer-social__link">
          <Link
            to="https://vimeo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vimeo
          </Link>
        </div>
      </div>
      <div className="footer-menu">
        <span className="footer__title">Меню:</span>
        <div className="footer-menu__link">
          <Link to="/services#wedding">свадьбы</Link>
        </div>
        <div className="footer-menu__link">
          <Link to="/services#corporate">корпоративы</Link>
        </div>
        <div className="footer-menu__link">
          <Link to="/services#kids">детские</Link>
        </div>
        <div className="footer-menu__link">
          <Link to="/services#private">частные</Link>
        </div>
        <div className="footer-menu__link">
          <Link to="/services#birthday">дни рождения</Link>
        </div>
        <div className="footer-menu__link">
          <Link to="/services#city">городские</Link>
        </div>
        <div className="footer-menu__link">
          <Link to="/services#promo">промоакции</Link>
        </div>
      </div>

      <div className="footer-subfooter">
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
      </div>
    </footer>
  )
}

export default Footer
