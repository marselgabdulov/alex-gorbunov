import React from "react"
import "./IndexGallery.scss"
import Image from "../Image/Image"
import { Link } from "gatsby"

class IndexGallery extends React.Component {
  state = {
    translateValue: 0,
    currentIndex: 0,
    prevDisabled: true,
    nextDisabled: false,
  }

  handlePrev = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      nextDisabled: false,
    })
  }

  handleNext = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      prevDisabled: false,
    })
  }

  handleLink = index => {
    this.setState(prevState => ({
      currentIndex:
        prevState.currentIndex === index ? prevState.currentIndex : index,
    }))

    console.log(index, this.state.currentIndex)
  }

  render() {
    const currentIndex = this.state.currentIndex
    const links = [
      this.props.data[0].link,
      this.props.data[1].link,
      this.props.data[2].link,
    ]
    let translate
    if (currentIndex === 0) {
      translate = 0
    }
    if (currentIndex === 1) {
      translate = -22.5
    }
    if (currentIndex === 2) {
      translate = -45
    }

    return (
      <div className="index-gallery">
        <div className="gallery__links">
          {links.map((link, index) => (
            <div
              className={
                index === this.state.currentIndex
                  ? "gallery__link--active"
                  : "gallery__link"
              }
              key={index}
              onMouseEnter={() => this.handleLink(index)}
            >
              <Link to={link.to}>{link.title}</Link>
            </div>
          ))}
        </div>
        <div className="gallery-bg"></div>
        <div className="images-separator"></div>
        <div className="border">
          <div
            className="images-wrapper"
            style={{
              transition: `all 0.75s ease-in-out`,
              transform: `translateX(${this.state.translateValue +
                translate}%)`,
            }}
            data-aos="fade"
          >
            {this.props.data.map((item, index) => (
              <div className="image-container" key={index}>
                <Image image={item.image} />
              </div>
            ))}
          </div>
        </div>
        <div className="counter">
          <div className="current">{`0${this.state.currentIndex + 1}`}</div>
          <div className="all">{`0${this.props.data.length - 1}`}</div>
        </div>
        <div className="control">
          <button
            className="control-button"
            disabled={this.state.currentIndex === 0}
            onClick={this.handlePrev}
          >
            <span>&#8592;</span>
          </button>
          <button
            className="control-button"
            onClick={this.handleNext}
            disabled={this.state.currentIndex === 2}
          >
            <span>&#8594;</span>
          </button>
        </div>
      </div>
    )
  }
}

export default IndexGallery
