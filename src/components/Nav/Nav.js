import React from "react"
import "./Nav.scss"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import MenuButton from "../MenuButton/MenuButton"
import classnames from "classnames"

class Nav extends React.Component {
  state = {
    prevScrollPosition: null,
    visible: true,
    top: false,
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
          <Link
            style={this.state.top ? { color: "black" } : { color: "white" }}
            to="/"
          >
            услуги
          </Link>
          <Link
            to="/"
            style={this.state.top ? { color: "black" } : { color: "white" }}
          >
            отзывы
          </Link>
          <Link
            to="/"
            style={this.state.top ? { color: "black" } : { color: "white" }}
          >
            контакты
          </Link>
        </div>
        <MenuButton
          handleClick={this.props.handleClick}
          color={this.state.top ? "black" : "white"}
        />
      </nav>
    )
  }
}

export default Nav
