import React from "react"
import { Link } from "gatsby"
import "./NavPannel.scss"
import Instagram from "../../images/icons/social/instagram.svg"
import Facebook from "../../images/icons/social/facebook.svg"
import Youtube from "../../images/icons/social/youtube.svg"
import Vimeo from "../../images/icons/social/vimeo.svg"
import Vk from "../../images/icons/social/vk.svg"
import Phone from "../../images/icons/phone.svg"

const NavPannel = props => {
  let pannelClass = "nav-closed"
  if (props.show === true) {
    pannelClass = "nav-opened"
  }
  return (
    <>
      <div className="nav-pannel">
        <div className={pannelClass}>
          <button
            className="nav-pannel__close-button"
            onClick={props.handleClick}
          >
            <div className="button-text">закрыть</div>
            <div className="button-icon">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </button>
          <div className="nav-pannel__wrapper">
            <div className="nav-pannel__left">
              <div className="nav-pannel__left--wrapper">
                <div className="nav-pannel__logo">
                  <div className="nav-pannel__logo--name">
                    Алексей Горбунов.
                  </div>
                  <div className="nav-pannel__logo--text">Ведущий. Москва.</div>
                </div>
                <div className="nav-pannel__phone">
                  <a href="tel:+79166228889">+7 916 622 88 89</a>
                </div>
                <div className="nav-pannel__phone--mobile">
                  <a href="tel:+79166228889">
                    <Phone />
                  </a>
                </div>
                <div className="nav-pannel__email">
                  <a href="mailto:alex.gorbunov@gmail.com">
                    alex.gorbunov@gmail.com
                  </a>
                </div>
                <div className="nav-pannel__social">
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
                  <div className="nav-pannel__social-icon">
                    <a
                      href="https://www.youtube.com/watch?v=xkAQ6bhpwYw"
                      title="youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube />
                    </a>
                  </div>
                  <div className="nav-pannel__social-icon">
                    <a
                      href="https://vimeo.com/"
                      title="vimeo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Vimeo />
                    </a>
                  </div>
                </div>
                <div className="nav-pannel__creator">
                  Разработан{" "}
                  <a
                    href="https://marselgabdulov.github.io/personal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MG
                  </a>
                </div>
                <div className="nav-pannel__copy">
                  <span>&copy; 2019. Алексей Горбунов. &nbsp;</span>
                  <span>Все права защищены.</span>
                </div>
              </div>
            </div>
            <div className="nav-pannel__wrapper--right">
              <div className="nav-pannel__right-wrapper">
                <Link to="/" title="Главная" activeStyle={{ color: "#e82a6e" }}>
                  Главная
                </Link>
                <Link
                  to="/reviews"
                  title="Отзывы"
                  activeStyle={{ color: "#e82a6e" }}
                >
                  Отзывы
                </Link>
                <Link
                  to="/services#wedding"
                  title="Свадьбы"
                  activeStyle={{ color: "#e82a6e" }}
                >
                  Свадьбы
                </Link>
                <Link
                  to="/services#corporate"
                  title="Корпоративы"
                  activeStyle={{ color: "#e82a6e" }}
                >
                  Корпоративы
                </Link>
                <Link
                  to="/services#kids"
                  title="Детские праздники"
                  activeStyle={{ color: "#e82a6e" }}
                >
                  Детские праздники
                </Link>
                <Link
                  to="/services#"
                  title="Контакты"
                  activeStyle={{ color: "#e82a6e" }}
                >
                  все услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavPannel
