import React from "react"
import { connect } from "react-redux"
import "./MenuButton.scss"

function MenuButton({ toggleNavPannel, isNavPannelVisible, color }) {
  return (
    <div className="menu-button" onClick={toggleNavPannel}>
      <span className="menu-button__text" style={{ color: color }}>
        меню
      </span>
      <div className="menu-button__lines">
        <div className="one" style={{ backgroundColor: color }}></div>
        <div className="two" style={{ backgroundColor: color }}></div>
        <div className="three" style={{ backgroundColor: color }}></div>
      </div>
    </div>
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

const ConnectedButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)

export default ConnectedButton
