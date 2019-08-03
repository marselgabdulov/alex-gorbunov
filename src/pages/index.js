import React from "react"
import "./styles/index.scss"
import IndexGallery from "../components/IndexGallery/IndexGallery"
import Layout from "../components/layout"
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
  return (
    <Layout>
      <SEO title="Главная" />
      <div className="test-page">
        <IndexGallery data={indexData} />
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
  }
`
export default IndexPage
