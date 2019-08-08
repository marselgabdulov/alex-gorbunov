import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import "./NavPannel.scss"
import Instagram from "../../images/icons/social/instagram.svg"
import Facebook from "../../images/icons/social/facebook.svg"
import Cross from "../../images/icons/cross.svg"
import Vk from "../../images/icons/social/vk.svg"

const mapStateToProps = ({ isNavPannelVisible }) => {
  return { isNavPannelVisible }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavPannel: () => dispatch({ type: `TOGGLE_NAVPANNEL` }),
  }
}

const links = [
  {
    to: "/",
    name: "Главная",
  },
  {
    to: "/wedding",
    name: "Свадьбы",
  },
  {
    to: "/corporate",
    name: "Корпоративы",
  },
  {
    to: "/celebration",
    name: "Праздники",
  },
  {
    to: "/reviews",
    name: "Отзывы",
  },
]

function NavPannel({ toggleNavPannel, isNavPannelVisible }) {
  return (
    <>
      <div className="nav-pannel">
        <div className={isNavPannelVisible ? "nav-opened" : "nav-closed"}>
          <button
            className="nav-pannel__close-button"
            onClick={() => toggleNavPannel()}
          >
            <div className="button-icon">
              <Cross />
            </div>
          </button>

          <div className="nav-pannel__menu">
            {links.map((item, index) => (
              <div className="menu__item" key={index}>
                <TransitionLink
                  to={item.to}
                  activeStyle={{ textDecoration: "#f43327 double underline" }}
                  onClick={() => toggleNavPannel()}
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
                  <Vk />
                </a>
              </div>
              <div className="nav-pannel__social-icon">
                <a
                  href="https://www.facebook.com/alex.gorbunov.969"
                  title="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </div>
              <div className="nav-pannel__social-icon">
                <a
                  href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
                  title="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ConnectedNavPannel = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPannel)

export default ConnectedNavPannel
