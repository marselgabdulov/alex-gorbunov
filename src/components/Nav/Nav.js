import React from "react"
import "./Nav.scss"
import { Link } from "gatsby"

const Nav = props => (
  <nav className="nav">
    <h1 className="nav__logo">
      <Link to="/" title="на главную">
        А.
      </Link>
    </h1>

    <div className="nav__button" onClick={props.handleClick}>
      <span className="button__text">меню</span>
      <div className="button__lines">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </div>
  </nav>
)

export default Nav

// <div className="nav__links">
//   <div className="nav__link">
//     <Link to="/weddings" title="свадьбы" activeStyle={{ color: "#e82a6e" }}>
//       Свадьбы
//     </Link>
//   </div>
//   <div className="nav__link">
//     <Link
//       to="/corporates"
//       title="корпоративы"
//       activeStyle={{ color: "#e82a6e" }}
//     >
//       Корпоративы
//     </Link>
//   </div>
//   <div className="nav__link">
//     <Link
//       to="/children"
//       title="детские праздники"
//       activeStyle={{ color: "#e82a6e" }}
//     >
//       Детские праздники
//     </Link>
//   </div>
//   <div className="nav__link">
//     <Link to="/responses" title="отзывы" activeStyle={{ color: "#e82a6e" }}>
//       Отзывы
//     </Link>
//   </div>
//   <div className="nav__link">
//     <Link to="/contacts" title="контакты">
//       Контакты
//     </Link>
//   </div>
// </div>
