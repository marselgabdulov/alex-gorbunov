import React from "react"
import { graphql } from "gatsby"
import "./styles/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo"
import AnimatedIntro from "../components/AnimatedIntro/AnimatedIntro"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
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
            <div className="index__title">
              <AnimatedIntro />
            </div>
            <BackgroundVideo />
          </section>
        </div>
      </Layout>
    )
  }
}

export const indexPageImage = graphql`
  fragment indexPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1800) {
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
