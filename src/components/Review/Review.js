import React, { useState } from "react"
import "./Review.scss"
import Cross from "../../images/icons/cross.svg"

function Review({ image, link, name, text }) {
  const [visible, setVisible] = useState(false)

  let result

  let textIsLong = text.split("").length > 450
  if (text.split("").length > 450) {
    result = text
      .split("")
      .slice(0, 450)
      .join("")
  } else {
    result = text
  }
  return (
    <>
      <div className={visible ? "full-review" : "full-review--hidden"}>
        <div
          className="full-review__sider"
          onClick={() => setVisible(false)}
        ></div>
        <div className="full-review__main">
          <div className="close" onClick={() => setVisible(false)}>
            <Cross />
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="review-card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-info">
          <div className="card-author">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="автор отзыва"
            >
              {name}
            </a>
          </div>
          <div className="card-text">
            {textIsLong ? (
              <p className="card-text">
                {result}...
                <strong onClick={() => setVisible(true)}>ЧИТАТЬ ДАЛЬШЕ</strong>
              </p>
            ) : (
              <p className="card-text">{result}</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
