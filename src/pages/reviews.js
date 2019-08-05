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
      id: "1",
      image: props.data.image1.childImageSharp.fluid,
      author: "Мария",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      id: "2",
      image: props.data.image2.childImageSharp.fluid,
      author: "сергей",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Все началось с того, что с Very Berry Event мы встретились в кафе примерно за пол года до свадьбы. Когда я увидела Вику, сразу стало понятно что контакт есть и всё будет ок. Вот есть такие люди, с твоей планеты. Когда мы просматривали их работы, было видно что каждый праздник- это маленькая отдельная история, ребята даже сами одеваются в соответствии с тематикой праздника:)",
    },
    {
      id: "3",
      image: props.data.image3.childImageSharp.fluid,
      author: "Даша и Лена",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Ребята помогли сделать для сына настоящий праздник. До этого его дни рождения праздновали как-то просто: за столом на кухне собирали его друзей, а потом они шли играть в приставку. Думал, что им еще надо в свои 9 лет? Но на 10 лет решил сделать запоминающийся праздник. Обратился в агенство, даже я с женой участвовали в тематической вечеринке, было весело и точно незабываемо, спасибо большое компании Вери Берри!",
    },
    {
      id: "4",
      image: props.data.image4.childImageSharp.fluid,
      author: "Барбос",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Дочь сильно просила меня устроить оригинальный тематический праздник в честь ее дня рождения. Она даже нарисовала на листе бумаги, как видит свой праздник. Мы с мужем после этого поняли как для нее это важно и обратились к ребятам. Приехали к ним, взяла с собой дочурку, ведь она была главным заказчиком)) Ребята сделали все для нее, ребенок бесконечно был рад, а я за это безумно благодарна им.",
    },
    {
      id: "5",
      image: props.data.image5.childImageSharp.fluid,
      author: "Оля",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Огромная благодарность агенству Very Berry! У нас с мужем было 10 лет как мы женаты и в последний момент решили организовать оригинальный праздник на свежем воздухе. В сжатые сроки разработали программу, за все договорились. Все гости остались очень довольны, было классные декорации, веселые ведущие и много незабываемых эмоций.",
    },
    {
      id: "6",
      image: props.data.image6.childImageSharp.fluid,
      author: "Вася",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Ребята выложились на все 100% и даже больше. На 50 летие отца обратились к Вери Берри. Праздник был в ретро стиле, всем присутствующим безумно понравилось. Отличные декорации, музыка, ведущие, агенство помогло даже встретить и поселить гостей, которые приехали тогда с других городов. В общем, ОГРОМНОЕ спасибо Very Berry от всей семьи Антоновых!",
    },
    {
      id: "7",
      image: props.data.image7.childImageSharp.fluid,
      author: "Катя",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "В честь открытия нового магазина мы пригласили агентство VERYBERRY для проведения корпоратива. Очень впечатлила их работа. В короткие сроки была придумана и реализована концепция, разработана шоу-программа, поставлены светодиодные экраны. Мероприятие подарило нам море эмоций и заряд совершенствоваться, чтобы поводов для таких корпоративов было больше. Спасибо команде Very Berry, вы молодцы!",
    },
    {
      id: "8",
      image: props.data.image8.childImageSharp.fluid,
      author: "Петр",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Агенство Very Berry организовывало для нас новогодний корпоратив. Была проведена грандиозная работа! Концепция, идеи, программа были максимально продуманы и направлены на активное общение гостей. Ведущие никого не оставили без внимания, все участвовали в празднике и получали удовольствие. Сотрудникам Very Berry огромная благодарность за сплочение коллектива!",
    },
    {
      id: "9",
      image: props.data.image9.childImageSharp.fluid,
      author: "Василиса",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Мы обсудили то какой мой жених и я видим нашу свадьбу и распрощались на несколько месяцев. Все это время мы с Викой обменивались фотографиями декора, букетов, скатертей и стульев. Ни одного раза я не почувствовала что Вика как-то нехотя мне отвечает или не заинтересована в нашем мероприятии так же как и мы.",
    },
  ]
  return (
    <Layout>
      <SEO title="Отзывы" />
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
