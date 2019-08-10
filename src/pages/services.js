import React from "react"
import "./styles/services.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

function ServicesPage(props) {
  return (
    <Layout>
      <SEO title="Я веду" />
      <div className="services-page">
        <h1>В разработке</h1>
      </div>
    </Layout>
  )
}

export default ServicesPage