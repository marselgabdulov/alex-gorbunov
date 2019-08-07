import React from "react"
import "./Navigation.scss"
import { Link } from "gatsby"
import { connect } from "react-redux"

function Navigation({ toggleNavPannel, isNavPannelVisible }) {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/" title="вернуться на главную">
          Алексей Горбунов
        </Link>
      </div>
      <div className="menu-button" onClick={toggleNavPannel}>
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
