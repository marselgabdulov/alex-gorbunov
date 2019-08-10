import React from "react"
import "./styles/videos.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

function VideosPage(props) {
  return (
    <Layout>
      <SEO title="Видео  | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div className="videos-page">
        <h1>В разработке</h1>
      </div>
    </Layout>
  )
}

export default VideosPage
