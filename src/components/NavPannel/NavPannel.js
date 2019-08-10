import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import "./NavPannel.scss"
import Cross from "../../images/icons/cross.svg"

const links = [
  {
    to: "/",
    name: "Главная",
  },
  {
    to: "/about",
    name: "Обо мне",
  },
  {
    to: "/photos",
    name: "Фото",
  },
  {
    to: "/videos",
    name: "Видео",
  },
  {
    to: "/services",
    name: "Я провожу",
  },
  {
    to: "/reviews",
    name: "Отзывы",
  },
  {
    to: "/contacts",
    name: "Контакты",
  },
]

function NavPannel({ handleClick, visible }) {
  return (
    <>
      <div className="nav-pannel">
        <div className={visible ? "nav-opened" : "nav-closed"}>
          <button className="nav-pannel__close-button" onClick={handleClick}>
            <div className="button-icon">
              <Cross />
            </div>
          </button>

          <div className="nav-pannel__menu">
            {links.map((item, index) => (
              <div className="menu__item" key={index}>
                <TransitionLink
                  to={item.to}
                  activeStyle={{ color: "#f77905" }}
                  onClick={handleClick}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  {item.name}
                </TransitionLink>
              </div>
            ))}

            <div className="nav-pannel__phone">
              <a href="tel:+79856446489">+7 985 644 64 89</a>
            </div>

            <div className="nav-pannel__email">
              <a href="mailto:gorbunov_show@mail.ru">gorbunov_show@mail.ru</a>
            </div>

            <div className="nav-pannel__social-links">
              <div className="nav-pannel__social-icon">
                <a
                  href="https://vk.com/alexgrantshow"
                  title="в контакте"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vk
                </a>
              </div>
              <div className="nav-pannel__social-icon">
                <a
                  href="https://www.facebook.com/alex.gorbunov.969"
                  title="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fb
                </a>
              </div>
              <div className="nav-pannel__social-icon">
                <a
                  href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
                  title="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inst
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavPannel
