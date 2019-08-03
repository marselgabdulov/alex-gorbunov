import React, { useState } from "react"
import { graphql } from "gatsby"
import "./styles/reviews.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Review from "../components/Review/Review"

function Reviews(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrev() {
    currentIndex === 0
      ? setCurrentIndex(reviews.length - 1)
      : setCurrentIndex(currentIndex - 1)
    console.log(currentIndex)
  }
  function handleNext() {
    currentIndex === reviews.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
    console.log(currentIndex)
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel amet temporibus tempore a dicta commodi velit dolorum delectus, aperiam laborum ipsam in fugit asperiores illo necessitatibus ullam quas, officiis inventore similique facilis libero. Nobis mollitia aliquam quia, iure aperiam officiis. Molestias possimus, odit tenetur delectus laudantium, incidunt quas, dolor ut quae nisi aperiam fugit asperiores. Voluptas, voluptatem eos natus vel dolorum. In incidunt beatae nemo ab error eveniet, corrupti consequuntur enim corporis porro nisi fugit commodi at doloribus reiciendis recusandae mollitia omnis hic. Natus itaque, vero, accusantium possimus culpa consequuntur. Necessitatibus odio, odit reiciendis. Repellat, consequatur laborum assumenda unde ipsa.,",
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
      <section className="reviews">
        <h1 className="page__title">Отзывы</h1>
        <span className="page__subtitle">
          что говорят клиенты о моей работе
        </span>
        <Review data={reviews[currentIndex]} />
        <div className="prev" onClick={handlePrev}>
          пред
        </div>
        <div className="next" onClick={handlePrev}>
          след
        </div>
      </section>
    </Layout>
  )
}

export default Reviews

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
