import React from "react"
import "./Navigation.scss"
import { Link } from "gatsby"

function Navigation({ handleClick }) {
  return (
    <nav>
      <div
        className="nav__logo"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <Link to="/" title="вернуться на главную">
          AG
        </Link>
      </div>
      <div className="nav__menu">
        <Link
          to="/"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Главная
        </Link>
        <Link
          to="/about"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Обо мне
        </Link>
        <Link
          to="/services"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Я провожу
        </Link>
        <Link
          to="/photos"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Фото
        </Link>
        <Link
          to="/videos"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="250"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Видео
        </Link>

        <Link
          to="/reviews"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Отзывы
        </Link>
        <Link
          to="/contacts"
          activeStyle={{ color: "#f77905" }}
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="500"
          data-aos-once="true"
        >
          Контакты
        </Link>
      </div>
      <div
        className="nav__menu-button"
        onClick={handleClick}
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <div className="nav__social">
        <a
          className="social-link"
          href="https://www.facebook.com/alex.gorbunov.969"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade"
          data-aos-delay="250"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
        >
          Facebook
        </a>
        <a
          className="social-link"
          href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
        >
          Instagram
        </a>
        <a
          className="social-link"
          href="https://vk.com/alexgrantshow"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade"
          data-aos-delay="200"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
        >
          Vk
        </a>
      </div>
      <div
        className="nav__creator"
        data-aos="fade"
        data-aos-delay="200"
        data-aos-duration="1200"
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
