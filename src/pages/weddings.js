import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Gallery from "../components/Gallery/Gallery"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import "./styles/weddings.scss"

function WeddingsPage(props) {
  const images = [
    props.data.image1.childImageSharp.fluid,
    props.data.image2.childImageSharp.fluid,
    props.data.image3.childImageSharp.fluid,
    props.data.image4.childImageSharp.fluid,
    props.data.image5.childImageSharp.fluid,
    props.data.image6.childImageSharp.fluid,
    props.data.image7.childImageSharp.fluid,
    props.data.image8.childImageSharp.fluid,
    props.data.image9.childImageSharp.fluid,
  ]

  return (
    <Layout>
      <SEO title="Свадьбы" />
      <div className="page">
        <SocialLinks />
        <div className="page__wrapper">
          <section className="page__intro">
            <div className="page__intro--text-content">
              <div className="page__intro--title">
                <h1>Свадьбы</h1>
              </div>
              <div className="page__intro--text">
                <p>
                  Уже более 7 лет ему доверяют свадебные ужины не только Москве
                  и области, но и далеко за пределами России. В его портфолио
                  мероприятия, проведенные в Италии, Германии, Словении, Греции.
                  Харизма, душевность и чувство юмора помогают Сергею сделать
                  праздник интересным и комфортным для всех гостей. Владеет
                  английским языком, что позволяет ему проводить мероприятия с
                  иностранными гостями по всему миру.(SPEAK ENGLISH).
                </p>
                <p>
                  Сергей Калашников, в отличие от большинства ведущих,
                  выстраивает сценарий таким образом, что гости и главные
                  участники праздничного события подключаются к развлекательной
                  программе, поздравлениям и танцам без принуждения, по
                  собственному желанию. В зависимости от поведения гостей он
                  легко перестраивает сценарный план и программу вечера прямо по
                  ходу праздника.
                </p>
              </div>
              <div className="page__link">
                <Link to="/responses" title="Отзывы">
                  Отзывы
                </Link>
              </div>
            </div>
            <div className="page__intro--image-gallery">
              <Gallery images={images} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const weddingsImage = graphql`
  fragment weddingsImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "wedding/wedding1.jpg" }) {
      ...weddingsImage
    }
    image2: file(relativePath: { eq: "wedding/wedding2.jpg" }) {
      ...weddingsImage
    }
    image3: file(relativePath: { eq: "wedding/wedding3.jpg" }) {
      ...weddingsImage
    }
    image4: file(relativePath: { eq: "wedding/wedding4.jpg" }) {
      ...weddingsImage
    }
    image5: file(relativePath: { eq: "wedding/wedding5.jpg" }) {
      ...weddingsImage
    }
    image6: file(relativePath: { eq: "wedding/wedding6.jpg" }) {
      ...weddingsImage
    }
    image7: file(relativePath: { eq: "wedding/wedding7.jpg" }) {
      ...weddingsImage
    }
    image8: file(relativePath: { eq: "wedding/wedding8.jpg" }) {
      ...weddingsImage
    }
    image9: file(relativePath: { eq: "wedding/wedding9.jpg" }) {
      ...weddingsImage
    }
  }
`

export default WeddingsPage
