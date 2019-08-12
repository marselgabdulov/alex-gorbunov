import React from "react"
import { graphql } from "gatsby"
import "./styles/reviews.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

function ReviewsPage(props) {
  const reviews = [
    {
      image: props.data.imageFirst.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Мария",
      text:
        "Алексей завоевал расположение буквально на первой встрече! Мы уже на 10 минуте поняли, что это тот ведущий который нам нужен! Не знал, что возможно настолько чувствовать настроение аудитории. Абсолютно невозмутимо он выходил из любых неловких ситуаций, в каждый момент вечера он чётко понимал что сейчас нужно гостям.",
    },
    {
      image: props.data.imageSecond.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Дмитрий",
      text:
        "Бывает так, что чувство благодарности невозможно держать в себе – так вот это по отношению к Леше! Сама в прошлом организатор мероприятий и после предложения руки и сердца любимого думала, что у меня в отношении артистов «все на мази». Как часто происходит, это было не так – я оказалась слишком привередливой невестой. На подготовку свадьбы мы заложили всего 3 месяца и поиск подрядчиков я начала с площадки и ведущего. Время шло, а мне абсолютно никто не нравился - голос, речь, манера поведения, внешний вид. ",
    },
    {
      image: props.data.imageThird.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Татьяна и Ульяна",
      text:
        "Ведущего на нашу свадьбу я выбирала долго и очень тщательно, так как знающие люди подсказали, что именно ведущий будет хедлайнером такого рода мероприятия, поэтому на нем не стоит экономить. Увидев короткие ролики Леши, все стало понятно! Не орет, не кричит, не дергается, ведет непринужденно и смешно, заученных шуток не изрекает, чем грешили остальные кандидаты.",
    },
    {
      image: props.data.imageFourth.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Барбос",
      text:
        "Замечательный, молодой, симпатичный, остроумный и интеллигентный парень. Пересмотрела сайты многих, но Харис как-то запал в душу. Манера ведения, общения, подача. Как-то все совпало. Рассматривали две кандидатуры. Вторая кандидатура, впрочем, его друг, судя по всему. Но, после встречи с Лешей, даже не стали больше никого искать и ни с кем встречаться. Все-таки правильно пишут на форуме: сложно кого-то советовать, каждому свое, каждому комфортно со своим человеком. Но я все же посоветую.",
    },
    {
      image: props.data.imageFifth.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Ольга",
      text:
        "Алексей, хотим сказать огромное спасибо и выразить слова признательности за проведение нашей свадьбы. Леха - ты настоящий профессионал, знающий своё дело! Все наши гости просто в восторге. Все как-будто почувствовали себя участниками шоу на телевидении! Ты очень легко и непринужденно вел торжество, правильно и быстро ориентироваться в сложных ситуациях, все выходки гостей направлял в нужное русло. Организовал веселье на высоком уровне.",
    },
    {
      image: props.data.imageSixth.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Олег",
      text:
        "Дорогой Леша! Благодаря твоему таланту, искусству, креативности, доброте, веселью и широкой улыбке наша свадьба получилась особенной! Мы очень переживали начиная с того момента, как стали готовиться к этому мероприятию. Волновались за каждую мелочь. Единственным моментом, в котором с самого начала были уверены на все 100% был наш выбор ведущего. И честно, мы ожидали, что вечер пройдет отлично, но что свадьба получится такой БОМБОВОЙ никак не могли предугадать! Спасибо тебе много-много раз!!!! ",
    },
    {
      image: props.data.imageSeventh.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Екатерина",
      text:
        "Выбор ведущего для нас был очень важным моментом. Никак не могли найти подходящего человека, одного нашли в Петербурге, но он был занят. Поиски продолжались. Мы уже почти отчаялись. Посмотрели много предложений, фото, видео. Но всё было не то.",
    },
    {
      image: props.data.imageEight.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Петр",
      text:
        "Хотим выразить ОГРОМНУЮ благодарность Лёше за проведение нашей свадьбы 15 августа! Мы долго и тщательно выбирали ведущего (честно признаться, у мужа даже были сомнения по поводу необходимости приглашения ведущего - столь сильными были негативные впечатления от их работы на других свадьбах, которые он посетил), но Лёша провёл мероприятие на ура! ",
    },
    {
      image: props.data.imageNinth.childImageSharp.fluid.src,
      link: "https://www.facebook.com/alex.gorbunov.969",
      name: "Елена",
      text:
        "Леша, спасибо тебе! Наш праздник стал особенным, очень добрым и веселым благодаря твоему таланту! Вспоминая нашу свадьбу мы обязательно говорим о тебе, и о том как нам повезло, что мы познакомились! От тебя были в восторге все гости, после свадьбы все нас спрашивали: Вы, наверное, за такого ведущего отдали баснословные деньги?",
    },
  ]
  return (
    <Layout>
      <SEO title="Отзывы | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div
        className="reviews-page"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="reviews-page__scroll">
          <div className="reviews-page__text">
            <h2 className="reviews__title">
              Отзывы <br />
            </h2>
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${review.image})` }}
                ></div>
                <div className="card-info">
                  <div className="card-author">
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="автор отзыва"
                    >
                      {review.name}
                    </a>
                  </div>
                  <p className="card-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const reviewsPageImage = graphql`
  fragment reviewsPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const reviewsPageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "reviews/maria.jpg" }) {
      ...reviewsPageImage
    }
    imageSecond: file(relativePath: { eq: "reviews/cappy.jpg" }) {
      ...reviewsPageImage
    }
    imageThird: file(relativePath: { eq: "reviews/couple.jpg" }) {
      ...reviewsPageImage
    }
    imageFourth: file(relativePath: { eq: "reviews/dog.jpg" }) {
      ...reviewsPageImage
    }
    imageFifth: file(relativePath: { eq: "reviews/happy.jpg" }) {
      ...reviewsPageImage
    }
    imageSixth: file(relativePath: { eq: "reviews/hippi.jpg" }) {
      ...reviewsPageImage
    }
    imageSeventh: file(relativePath: { eq: "reviews/katya.jpg" }) {
      ...reviewsPageImage
    }
    imageEight: file(relativePath: { eq: "reviews/petr.jpg" }) {
      ...reviewsPageImage
    }
    imageNinth: file(relativePath: { eq: "reviews/redhead.jpg" }) {
      ...reviewsPageImage
    }
  }
`

export default ReviewsPage
