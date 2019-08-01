import React from "react"
import "./Nav.scss"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import TransitionLink from "gatsby-plugin-transition-link"
import MenuButton from "../MenuButton/MenuButton"
import Arrow from "../../images/icons/play-button.svg"
import classnames from "classnames"

class Nav extends React.Component {
  state = {
    prevScrollPosition: null,
    visible: true,
    top: false,
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
    this.setState({ prevScrollPosition: window.pagesYOffset })
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { prevScrollPosition } = this.state
    const currentScrollPosition = window.pageYOffset
    const visible = prevScrollPosition > currentScrollPosition
    const isTop = currentScrollPosition > 0

    this.setState({
      prevScrollPosition: currentScrollPosition,
      visible,
      top: isTop,
    })
  }

  render() {
    return (
      <nav
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible,
        })}
        style={
          this.state.top
            ? { background: "white" }
            : { background: "transparent" }
        }
      >
        <Logo />
        <div className="navbar__main">
          <div
            className="services__list"
            style={this.state.top ? { color: "black" } : { color: "white" }}
            onClick={() => {
              this.setState({ submenuVisible: true })
            }}
          >
            <div className="text">Я веду</div>
            <div className="icon">
              <Arrow
                style={this.state.top ? { fill: "black" } : { fill: "white" }}
              />
            </div>
          </div>
          <Link
            to="/reviews"
            style={this.state.top ? { color: "black" } : { color: "white" }}
            activeStyle={{ color: "#e82a6e" }}
          >
            отзывы
          </Link>
          <div
            style={this.state.top ? { color: "black" } : { color: "white" }}
            onClick={this.scrollToBottom}
          >
            контакты
          </div>
        </div>
        <MenuButton
          handleClick={this.props.handleClick}
          color={this.state.top ? "black" : "white"}
        />
        <div
          className={this.state.submenuVisible ? "submenu" : "submenu--hidden"}
        >
          <div className="submenu__sider" onClick={this.handleSubmenu}></div>
          <div className="submenu__wrapper">
            <div className="submenu__close" onClick={this.handleSubmenu}>
              закрыть
            </div>
            <div className="submenu__grid">
              <div
                className="grid__item"
                style={{ backgroundColor: "#627367" }}
              >
                <TransitionLink
                  to="/services#wedding"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  свадьбы
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#832A46" }}
              >
                <TransitionLink
                  to="/services#corporate"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  корпоративы
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#24222F" }}
              >
                <TransitionLink
                  to="/services#kids"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  детские праздники
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#4C4C4C" }}
              >
                <TransitionLink
                  to="/services#birthday"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  дни рождения
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#a83849" }}
              >
                <TransitionLink
                  to="/services#private"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  частные праздники
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#f09e84" }}
              >
                <TransitionLink
                  to="/services#city"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  городские праздники
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#3c3d57" }}
              >
                <TransitionLink
                  to="/services#promo"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  промоакции
                </TransitionLink>
              </div>
              <div
                className="grid__item"
                style={{ backgroundColor: "#515e55" }}
              >
                <TransitionLink
                  to="/reviews"
                  onClick={() => this.handleSubmenu()}
                  exit={{
                    length: 0.5,
                  }}
                  entry={{
                    delay: 1,
                  }}
                >
                  отзывы
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
