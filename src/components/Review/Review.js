import React, { useState, useEffect } from "react"
import "./Review.scss"
import Image from "../Image/Image"
import { TransitionGroup, CSSTransition } from "react-transition-group"

function ReviewBody({ text, handleClick }) {
  return text.length > 200 ? (
    <p>
      {text.slice(0, 200)}...
      <span className="show-more" onClick={handleClick}>
        читать дальше
      </span>
    </p>
  ) : (
    <p>{text}</p>
  )
}

function Review({ data }) {
  const [fullReviewVisible, setFullReviewVisible] = useState(false)

  useEffect(() => {
    console.log(data.text.length)
  })

  return (
    <div className="review">
      <div className="review__image--wrapper">
        <TransitionGroup className="review__image">
          <CSSTransition key={data.id} timeout={1000} classNames="slide">
            <Image image={data.image} />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="review__author">
        <a
          href={data.link}
          title="автор отзыва"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.author}
        </a>
      </div>
      <TransitionGroup className="review__body">
        <CSSTransition key={data.id} timeout={1000} classNames="fade">
          <ReviewBody
            text={data.text}
            handleClick={() => setFullReviewVisible(true)}
          />
        </CSSTransition>
      </TransitionGroup>

      <div
        className={
          fullReviewVisible ? "full-review--visible" : "full-review--hidden"
        }
      >
        <div
          className="full-review__sider"
          onClick={() => setFullReviewVisible(false)}
        ></div>
        <div className="full-review__wrapper">
          <div className="full-review__author">
            <a
              href={data.link}
              title="автор отзыва"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.author}
            </a>
          </div>
          <div className="full-review__body">{data.text}</div>
          <div
            className="full-review__close"
            onClick={() => setFullReviewVisible(false)}
          >
            закрыть
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
