import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"
import Instagram from "../../images/icons/social/instagram.svg"
import Facebook from "../../images/icons/social/facebook.svg"
import Youtube from "../../images/icons/social/youtube.svg"
import Vimeo from "../../images/icons/social/vimeo.svg"
import Vk from "../../images/icons/social/vk.svg"

function Footer(props) {
  return (
    <footer className="footer" id="contacts">
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
              href="vk.com"
              title="в контакте"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Vk />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.facebook.com/alex.gorbunov.969"
              title="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/"
              title="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.youtube.com/watch?v=xkAQ6bhpwYw"
              title="youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </a>
          </div>
          <div className="social-icon">
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
        <div className="right">
          <Link to="/services#private">частные</Link>
          <Link to="/services#city">городские</Link>
          <Link to="/services#promo">промоакции</Link>
          <Link to="/reviews">отзывы</Link>
        </div>
      </div>
      <div className="footer__contacts">
        <div className="footer__phone">
          <a href="tel:+79166228889">+7 916 622 88 89</a>
        </div>
        <div className="footer__email">
          <a href="mailto:alex.gorbunov@gmail.com">alex.gorbunov@gmail.com</a>
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

// <div className="footer__wrapper">
//   <div className="footer-contacts">
//     <div className="footer-logo">
//       <Link to="/" title="вернуться на главную">
//         Алексей Горбунов
//       </Link>
//     </div>
//     <div className="footer__phone">
//       <span className="footer__title">Позвоните</span>
//       <a href="tel:+79166228889">+7 916 622 88 89</a>
//     </div>
//
//     <div className="footer__email">
//       <span className="footer__title">Напишите</span>
//       <a href="mailto:alex.gorbunov@gmail.com">alex.gorbunov@gmail.com</a>
//     </div>
//   </div>
//
//   <div className="footer-social">
//     <span className="footer__title">Социальные сети:</span>
//     <div className="footer-social__link">
//       <Link to="vk.com" target="_blank" rel="noopener noreferrer">
//         VK
//       </Link>
//     </div>
//     <div className="footer-social__link">
//       <Link
//         to="https://www.facebook.com/alex.gorbunov.969/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Facebook
//       </Link>
//     </div>
//     <div className="footer-social__link">
//       <Link
//         to="https://www.instagram.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Instagram
//       </Link>
//     </div>
//     <div className="footer-social__link">
//       <Link
//         to="https://www.youtube.com/watch?v=xkAQ6bhpwYw"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Youtube
//       </Link>
//     </div>
//     <div className="footer-social__link">
//       <Link
//         to="https://vimeo.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Vimeo
//       </Link>
//     </div>
//   </div>
//   <div className="footer-menu">
//     <span className="footer__title">Меню:</span>
//
//     <div className="footer-menu__link">
//
//     </div>
//     <div className="footer-menu__link">
//
//     </div>
//     <div className="footer-menu__link">
//
//     </div>
//     <div className="footer-menu__link">
//
//     </div>
//     <div className="footer-menu__link">
//
//     </div>
//   </div>
// </div>
// <div className="footer-subfooter">
//   <div className="footer__copy">
//     © {new Date().getFullYear()}, Алексей Горбунов
//   </div>

// </div>
