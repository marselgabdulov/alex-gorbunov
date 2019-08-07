import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import "./NavPannel.scss"
import Instagram from "../../images/icons/social/instagram.svg"
import Facebook from "../../images/icons/social/facebook.svg"
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
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </button>

          <div className="nav-pannel__menu">
            {links.map((item, index) => (
              <div className="menu__item" key={index}>
                <TransitionLink
                  to={item.to}
                  activeStyle={{ color: "#f1891d" }}
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
              <a href="tel:+79166228889">+7 916 622 88 89</a>
            </div>

            <div className="nav-pannel__email">
              <a href="mailto:alex.gorbunov@gmail.com">
                alex.gorbunov@gmail.com
              </a>
            </div>

            <div className="nav-pannel__social-links">
              <div className="nav-pannel__social-icon">
                <a
                  href="vk.com"
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
                  href="https://www.instagram.com/"
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
