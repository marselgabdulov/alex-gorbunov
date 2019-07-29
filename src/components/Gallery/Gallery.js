import React, { useState } from "react"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import Swipe from "react-easy-swipe"
import "./Gallery.scss"
import classnames from "classnames"

import Next from "../../images/icons/next.svg"
import Back from "../../images/icons/back.svg"
import Cross from "../../images/icons/remove.svg"

function Gallery(props) {
  const images = props.images
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleVisible() {
    visible ? setVisible(false) : setVisible(true)
  }

  function handlePrev() {
    return currentIndex === 0
      ? setCurrentIndex(images.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  function handleNext() {
    return currentIndex === images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
    <>
      <Swipe onSwipeLeft={handleNext} onSwipeRight={handlePrev}>
        <ReactScrollWheelHandler
          upHandler={handlePrev}
          downHandler={handleNext}
        >
          <div
            className={classnames("gallery", {
              "gallery--hidden": !visible,
            })}
          >
            <div
              className="gallery__current-image"
              style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            ></div>

            <button className="gallery__close-button" onClick={handleVisible}>
              <Cross />
            </button>
            <button className="gallery__prev-button" onClick={handlePrev}>
              <Back />
            </button>
            <button className="gallery__next-button" onClick={handleNext}>
              <Next />
            </button>
          </div>
        </ReactScrollWheelHandler>
      </Swipe>
      <div className="gallery__wrapper">
        <div className="gallery__thumbnails">
          {images.map((image, index) => (
            <div
              className="gallery__thumbnail"
              key={index}
              onClick={e => {
                setCurrentIndex(index)
                handleVisible()
              }}
            >
              <div
                className="gallery__thumbnail--bg"
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
