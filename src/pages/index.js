import React from "react"
import { Link, graphql } from "gatsby"
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
              className="index__bg-image"
              style={{
                backgroundImage: `url(${this.props.data.image0.childImageSharp.fluid.src})`,
              }}
            ></div>
            <h1 className="index__title">
              Алексей Горбунов <br />
            </h1>
            <div className="index__phone">
              <a href="tel:+79856446489">+7 985 644 64 89</a>
            </div>
            <span className="index__subtitle">Ведущий Москва</span>
            <div className="video-container">
              <div className="video-foreground">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=33gGO3nu4Yk&t=10s&loop=1&mute=1"
                  width="100%"
                  height="100%"
                  playing={true}
                  loop={true}
                  muted={1}
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
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image0: file(relativePath: { eq: "index/alex-bond-horizontal.jpg" }) {
      ...indexPageImage
    }
  }
`
export default IndexPage

//
// url="https://vimeo.com/352916646"
// <iframe
//   src="https://www.youtube.com/33gGO3nu4Yk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
//   frameBorder="0"
//   allowFullScreen
// ></iframe>
