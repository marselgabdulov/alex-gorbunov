import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./Nav.scss"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import MenuButton from "../MenuButton/MenuButton"
import ArrowIcon from "../../images/icons/play-button.svg"
import classnames from "classnames"
import SubmenuItem from "./SubmenuItem/SubmenuItem"

export const navImage = graphql`
  fragment navImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "index/wedding.jpg" }) {
          ...navImage
        }
        image2: file(relativePath: { eq: "index/party.jpg" }) {
          ...navImage
        }
        image3: file(relativePath: { eq: "index/children.jpg" }) {
          ...navImage
        }
        image4: file(relativePath: { eq: "index/pull.jpg" }) {
          ...navImage
        }
        image5: file(relativePath: { eq: "index/hb.jpg" }) {
          ...navImage
        }
        image6: file(relativePath: { eq: "index/salut.jpg" }) {
          ...navImage
        }
        image7: file(relativePath: { eq: "index/microphone.jpg" }) {
          ...navImage
        }
        image8: file(relativePath: { eq: "index/smoke.jpg" }) {
          ...navImage
        }
      }
    `}
    render={data => <Nav data={data} {...props} />}
  />
)

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
    const navData = [
      {
        link: "/services#wedding",
        image: this.props.data.image1.childImageSharp.fluid,
        name: "свадьбы",
        color: "#627367",
      },
      {
        link: "/services#corporate",
        image: this.props.data.image2.childImageSharp.fluid,
        name: "корпоративы",
        color: "#832A46",
      },
      {
        link: "/services#kids",
        image: this.props.data.image3.childImageSharp.fluid,
        name: "детские праздники",
        color: "#24222F",
      },
      {
        link: "/services#birthday",
        image: this.props.data.image4.childImageSharp.fluid,
        name: "дни рождения",
        color: "#4C4C4C",
      },
      {
        link: "/services#private",
        image: this.props.data.image5.childImageSharp.fluid,
        name: "частные праздники",
        color: "#a83849",
      },
      {
        link: "/services#city",
        image: this.props.data.image8.childImageSharp.fluid,
        name: "городские праздники",
        color: "#f09e84",
      },
      {
        link: "/services#promo",
        image: this.props.data.image7.childImageSharp.fluid,
        name: "промоакции",
        color: "#3c3d57",
      },
      {
        link: "/reviews",
        image: this.props.data.image8.childImageSharp.fluid,
        name: "отзывы",
        color: "#515e55",
      },
    ]
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
              <ArrowIcon
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
              {navData.map((item, index) => (
                <SubmenuItem
                  handleClick={() => this.handleSubmenu()}
                  key={index}
                  color={item.color}
                  image={item.image}
                  link={item.link}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
