import React from "react"
import "./Navigation.scss"
import { Link } from "gatsby"
import { connect } from "react-redux"

function Navigation({ toggleNavPannel, isNavPannelVisible }) {
  return (
    <nav className="navigation">
      <div
        className="logo"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <Link to="/" title="вернуться на главную">
          AG
        </Link>
      </div>
      <div
        className="menu-button"
        onClick={toggleNavPannel}
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ isNavPannelVisible }) => {
  return { isNavPannelVisible }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavPannel: () => dispatch({ type: `TOGGLE_NAVPANNEL` }),
  }
}

const ConnectedNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default ConnectedNavigation
