import React from "react"
import "./styles/videos.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/Video/Video"

function VideosPage(props) {
  return (
    <Layout>
      <SEO title="Видео  | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div
        className="videos-page"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="videos-page__scroll">
          <div className="videos-page__text">
            <h2 className="videos__title">Видео</h2>
            <Video
              cover={props.data.coverImage.childImageSharp.fluid}
              name="Демо"
              top={0}
              url="https://www.youtube.com/watch?v=33gGO3nu4Yk&t=2s"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const videosPageImage = graphql`
  fragment videosPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const reviewsPageQuery = graphql`
  query {
    coverImage: file(relativePath: { eq: "photos/1.jpg" }) {
      ...videosPageImage
    }
  }
`

export default VideosPage
