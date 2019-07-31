import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import "./styles/reviews.scss"
import Hand from "../images/icons/hand.svg"
import Image from "../components/Image/Image"

function reviewsPage(props) {
  const [visible, setVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleFullReview(index) {
    setCurrentIndex(index)
    setVisible(true)
  }

  const reviews = [
    {
      image: props.data.image1.childImageSharp.fluid,
      author: "Мария",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image2.childImageSharp.fluid,
      author: "сергей",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image3.childImageSharp.fluid,
      author: "Даша и Лена",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image4.childImageSharp.fluid,
      author: "Барбос",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image5.childImageSharp.fluid,
      author: "Оля",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image6.childImageSharp.fluid,
      author: "Вася",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image7.childImageSharp.fluid,
      author: "Катя",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image8.childImageSharp.fluid,
      author: "Петр",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image9.childImageSharp.fluid,
      author: "Василиса",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
  ]

  return (
    <Layout>
      <SEO title="Отзывы" />
      <div className="page">
        <section className="reviews">
          <div className="reviews__intro">
            <h2>Я люблю своих клиентов.</h2>
            <div className="text">
              <span>Убедитесь сами</span> <Hand />
            </div>
          </div>
          <div className="reviews__gallery-wrapper">
            <div className="mobile-title">Отзывы</div>
            <div className="reviews__gallery">
              {reviews.map((item, index) => (
                <div
                  className="reviews-gallery__item"
                  key={index}
                  onClick={() => handleFullReview(index)}
                >
                  <div className="image-wrapper">
                    <Image image={item.image} />
                  </div>
                </div>
              ))}
            </div>
            <div className={visible ? "full-review" : "full-review--hidden"}>
              <div
                className="full-review__sider"
                onClick={() => setVisible(false)}
              ></div>
              <div className="full-review__wrapper">
                <div className="close" onClick={() => setVisible(false)}>
                  закрыть
                </div>
                <div className="full-review__image">
                  <Image image={reviews[currentIndex].image} />
                </div>
                <div className="full-review__info">
                  <div className="author">
                    <a
                      href={reviews[currentIndex].link}
                      title="автор отзыва"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {reviews[currentIndex].author}
                    </a>
                  </div>
                  <div className="text">
                    <p>{reviews[currentIndex].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const reviewsImage = graphql`
  fragment reviewsImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const reviewsPageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "reviews/bold.jpg" }) {
      ...reviewsImage
    }
    image2: file(relativePath: { eq: "reviews/cappy.jpg" }) {
      ...reviewsImage
    }
    image3: file(relativePath: { eq: "reviews/couple.jpg" }) {
      ...reviewsImage
    }
    image4: file(relativePath: { eq: "reviews/dog.jpg" }) {
      ...reviewsImage
    }
    image5: file(relativePath: { eq: "reviews/happy.jpg" }) {
      ...reviewsImage
    }
    image6: file(relativePath: { eq: "reviews/hippi.jpg" }) {
      ...reviewsImage
    }
    image7: file(relativePath: { eq: "reviews/katya.jpg" }) {
      ...reviewsImage
    }
    image8: file(relativePath: { eq: "reviews/petr.jpg" }) {
      ...reviewsImage
    }
    image9: file(relativePath: { eq: "reviews/redhead.jpg" }) {
      ...reviewsImage
    }
  }
`

export default reviewsPage
