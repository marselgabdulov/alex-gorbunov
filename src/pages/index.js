import React from "react"
import { Link } from "gatsby"
import "./styles/index.scss"
import IndexGallery from "../components/IndexGallery/IndexGallery"
import Video from "../components/Video/Video"
import Layout from "../components/layout"
import Image from "../components/Image/Image"
import SEO from "../components/seo"

function IndexPage(props) {
  const indexData = [
    {
      image: props.data.image1.childImageSharp.fluid,
      link: {
        to: "/services#wedding",
        title: "Свадьбы",
      },
    },
    {
      image: props.data.image2.childImageSharp.fluid,
      link: {
        to: "/services#corporate",
        title: "Корпоративы",
      },
    },
    {
      image: props.data.image3.childImageSharp.fluid,
      link: {
        to: "/services#kids",
        title: "Праздники",
      },
    },
    {
      image: props.data.image1.childImageSharp.fluid,
    },
  ]

  const indexLinks = [
    {
      to: "/services#wedding",
      title: "Свадьбы",
    },
    {
      to: "/services#corporate",
      title: "Корпоративы",
    },
    {
      to: "/services#kids",
      title: "Детские праздники",
    },
    {
      to: "/services#private",
      title: "Частные праздники",
    },
    {
      to: "/services#birthday",
      title: "Дни рождения",
    },
    {
      to: "/services#city",
      title: "Городские праздники",
    },
    {
      to: "/services#promo",
      title: "Промоакции",
    },
  ]
  return (
    <Layout>
      <SEO title="Главная" />
      <div className="index-page">
        <section className="intro">
          <IndexGallery data={indexData} />
        </section>

        <section className="about">
          <div className="about__title">Обо мне</div>
          <div className="about__skills">
            <div className="skill">
              <div className="skill__title">Я люблю праздники</div>
              <div className="skill__body">
                Каждый праздник можно сравнить с полнометражным фильмом с
                уникальной идеей и своим сюжетом. Здесь главные герои вы – наши
                друзья-клиенты.
              </div>
            </div>

            <div className="skill">
              <div className="skill__title">Я надежный и мне не все равно</div>
              <div className="skill__body">
                Мои услуги прошли настоящее испытание качеством. Мои клиенты
                всегда требовательны. И Ч постоянно двигаюсь вперед.
              </div>
            </div>

            <div className="skill">
              <div className="skill__title">Профессиональная команда</div>
              <div className="skill__body">
                Я много учусь, путешествую и вдохновляюсь идеями по всему миру,
                чтобы проекты, организуемые мною для вас, были актуальными. Это
                очень важно.
              </div>
            </div>
            <div className="skill">
              <div className="skill__title">Я - Ваша уверенность</div>
              <div className="skill__body">
                Со мной Вы узнаете, что процесс подготовки к празднику может
                быть исключительно приятным. А на своем празднике вы забудете
                обо всех организационных вопросах
              </div>
            </div>
          </div>
          <div
            className="about__image"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <Image image={props.data.image4.childImageSharp.fluid} />
          </div>
        </section>
        <section className="video">
          <h2 className="video__title">Видео</h2>
          <Video
            videoId="tNs3exn6PKk"
            cover={props.data.image3.childImageSharp.fluid}
          />
        </section>
      </div>
    </Layout>
  )
}

export const testPageImage = graphql`
  fragment testPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "index/wedding.jpg" }) {
      ...testPageImage
    }
    image2: file(relativePath: { eq: "index/party2.jpg" }) {
      ...testPageImage
    }
    image3: file(relativePath: { eq: "index/children.jpg" }) {
      ...testPageImage
    }
    image4: file(relativePath: { eq: "reviews/cappy.jpg" }) {
      ...testPageImage
    }
  }
`
export default IndexPage
