import React from "react"
import ReactSwipe from "react-swipe"
import Image from "../Image/Image"
import { Link } from "gatsby"
import "./MobileCarousel.scss"

function MobileCarousel({ data }) {
  let reactSwipeEl
  return (
    <div>
      <ReactSwipe
        className="mobile-carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className="carousel-item">
          <div className="carousel-item__image">
            <Image image={data[0].image} />
          </div>
          <div className="carousel-item__title">
            <h2>{data[0].title.split(" ")[0]}</h2>
          </div>
          <div className="carousel-item__subtitle">
            <h4>{data[0].subtitle}</h4>
          </div>
          <div className="carousel-item__link">
            <Link to={data[0].link.to}>{data[0].link.text}</Link>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item__image">
            <Image image={data[1].image} />
          </div>
          <div className="carousel-item__title">
            <h2>{data[1].title.split(" ")[0]}</h2>
          </div>
          <div className="carousel-item__subtitle">
            <h4>{data[1].subtitle}</h4>
          </div>
          <div className="carousel-item__link">
            <Link to={data[0].link.to}>{data[0].link.text}</Link>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item__image">
            <Image image={data[2].image} />
          </div>
          <div className="carousel-item__subtitle">
            <h4>{data[2].subtitle}</h4>
          </div>
          <div className="carousel-item__title">
            <h2>{data[2].title.split(" ")[0]}</h2>
          </div>
          <div className="carousel-item__link">
            <Link to={data[0].link.to}>{data[0].link.text}</Link>
          </div>
        </div>
      </ReactSwipe>
    </div>
  )
}

export default MobileCarousel
