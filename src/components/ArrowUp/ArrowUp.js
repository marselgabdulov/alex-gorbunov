import React from 'react'
import './ArrowUp.css'

class ArrowUp extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: 0,
    })
  }
  render() {
    return (
      <svg className="arrow-up" onClick={this.scrollToTop}>
        <path className="a1" d="M0 0 L15 16 L30 0" />
        <path className="a2" d="M0 10 L15 26 L30 10" />
        <path className="a3" d="M0 20 L15 36 L30 20" />
      </svg>
    )
  }
}

export default ArrowUp
