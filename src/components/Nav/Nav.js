import React from "react"
import "./Nav.scss"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import MenuButton from "../MenuButton/MenuButton"
import Submenu from "./Submenu/Submenu"
import ArrowIcon from "../../images/icons/play-button.svg"
import classnames from "classnames"

class Nav extends React.Component {
  state = {
    submenuVisible: false,
  }

  scrollToBottom = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: document.body.scrollHeight,
    })
  }

  handleSubmenu = () => {
    this.setState({ submenuVisible: false })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <nav className="navbar" style={{ backgroundColor: "white" }}>
        <Logo />
        <div className="navbar__main">
          <div
            className="services__list"
            style={{ color: "black" }}
            onMouseEnter={() => this.setState({ submenuVisible: true })}
            onMouseLeave={() => this.setState({ submenuVisible: false })}
            onClick={() => {
              this.setState({ submenuVisible: !this.state.submenuVisible })
            }}
          >
            <div className="link__wrapper">
              <span>Я веду</span>
              <div className="icon">
                <ArrowIcon style={{ color: "black" }} />
              </div>
            </div>
            <Submenu visible={this.state.submenuVisible} />
          </div>
          <Link
            to="/reviews"
            style={{ color: "black" }}
            activeStyle={{ color: "#e82a6e" }}
          >
            отзывы
          </Link>
          <div className="contacts-link" onClick={this.scrollToBottom}>
            контакты
          </div>
        </div>
        <MenuButton
          handleClick={this.props.handleClick}
          style={{ color: "black" }}
        />
      </nav>
    )
  }
}

export default Nav
