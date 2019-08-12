import React from "react"
import "./AnimatedIntro.scss"

function AnimatedIntro(props) {
  const titleArray = "Ведущий Алексей Горбунов".split("")
  const aosArray = Array.from(
    { length: titleArray.length },
    (v, k) => (k += 1)
  ).map(i => i * 50)

  let result = []

  for (let i = 0; i <= titleArray.length - 1; i++) {
    result.push({ char: titleArray[i], delay: aosArray[i] })
  }

  return (
    <>
      <div className="animated-title">
        {result.map((item, index) => (
          <span
            key={index}
            data-aos="fade"
            data-aos-delay={item.delay}
            data-aos-duration="500"
            data-aos-once="true"
          >
            {item.char}
          </span>
        ))}
      </div>
      <div
        className="animated-subtitle"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        Умный московский юмор
      </div>
    </>
  )
}

export default AnimatedIntro
