import React from "react"
import "./styles/reviews.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

function ReviewsPage(props) {
  return (
    <Layout>
      <SEO title="Отзывы | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div className="reviews-page">
        <h1>В разработке</h1>
      </div>
    </Layout>
  )
}

export default ReviewsPage
