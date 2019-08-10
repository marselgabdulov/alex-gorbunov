import React from "react"
import { graphql } from "gatsby"
import "./styles/index.scss"
import Layout from "../components/layout"
import ReactPlayer from "react-player"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Главная" />
        <div className="index-page">
          <section className="index-intro">
            <div
              className="index__phone"
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              <a href="tel:+79856446489">+7 985 644 64 89</a>
            </div>
            <div
              className="index__bg-image"
              data-aos="fade"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-once="true"
              style={{
                backgroundImage: `url(${this.props.data.imageMobileBG.childImageSharp.fluid.src})`,
              }}
            ></div>
            <h1
              className="index__title"
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              Алексей Горбунов
            </h1>

            <span
              className="index__subtitle"
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              Ведущий Москва
            </span>
            <div className="video-container">
              <div className="video-foreground">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=33gGO3nu4Yk&t=10s&loop=1&mute=1"
                  width="100%"
                  height="100%"
                  playing={true}
                  loop={true}
                  muted={true}
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const indexPageImage = graphql`
  fragment indexPageImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageMobileBG: file(relativePath: { eq: "photos/a3.jpg" }) {
      ...indexPageImage
    }
  }
`
export default IndexPage
