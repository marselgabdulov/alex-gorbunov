import React from "react"
import "./styles/index.scss"
import TestGallery from "../components/TestGallery/TestGallery"
import Layout from "../components/layout"

function Test(props) {
  const testData = [
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
      <div className="test-page">
        <TestGallery data={testData} />
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
export default Test
