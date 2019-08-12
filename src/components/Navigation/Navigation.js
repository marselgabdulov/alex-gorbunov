import React from "react"
import "./Navigation.scss"
import { Link } from "gatsby"
import Menu from "../../images/icons/menu.svg"

function Navigation({ handleClick }) {
  return (
    <nav>
      <div
        className="nav__logo"
        data-aos="fade"
        data-aos-delay="1000"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <Link to="/" title="вернуться на главную">
          А.Г.
        </Link>
      </div>
      <div
        className="nav__menu"
        data-aos="fade"
        data-aos-delay="1000"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <Link to="/" activeStyle={{ color: "#f77905" }}>
          Главная
        </Link>
        <Link to="/about" activeStyle={{ color: "#f77905" }}>
          Обо мне
        </Link>
        <Link to="/cooperation" activeStyle={{ color: "#f77905" }}>
          Договор
        </Link>
        <Link to="/photos" activeStyle={{ color: "#f77905" }}>
          Фото
        </Link>
        <Link to="/videos" activeStyle={{ color: "#f77905" }}>
          Видео
        </Link>

        <Link to="/reviews" activeStyle={{ color: "#f77905" }}>
          Отзывы
        </Link>
        <Link to="/contacts" activeStyle={{ color: "#f77905" }}>
          Контакты
        </Link>
      </div>
      <div className="nav__menu-button" onClick={handleClick}>
        <Menu />
      </div>
      <div
        className="nav__social"
        data-aos="fade"
        data-aos-delay="1000"
        data-aos-duration="12200"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        <a
          className="social-link"
          href="https://www.facebook.com/alex.gorbunov.969"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="social-link"
          href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="social-link"
          href="https://vk.com/alexgrantshow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vk
        </a>
      </div>
      <div
        className="nav__creator"
        data-aos="fade"
        data-aos-delay="1000"
        data-aos-duration="12200"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        Разработан{" "}
        <a
          href="https://marselgabdulov.github.io/personal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MG
        </a>
      </div>
    </nav>
  )
}

export default Navigation
