import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import IndexIntro from "../components/IndexIntro/IndexIntro"

import "./styles/index.scss"

function IndexPage(props) {
  const otherImages = [
    props.data.image5.childImageSharp.fluid,
    props.data.image6.childImageSharp.fluid,
    props.data.image7.childImageSharp.fluid,
    props.data.image8.childImageSharp.fluid,
  ]
  const indexData = [
    {
      image: props.data.image1.childImageSharp.fluid,
      title: "Свадьбы",
      subtitle: "ведущий на свадьбу",

      link: {
        to: "/services#wedding",
        text: "подробнее",
        title: "подробнее",
      },
    },
    {
      image: props.data.image2.childImageSharp.fluid,
      title: "Корпоративы",
      subtitle: "ведущий на корпоратив",

      link: {
        to: "/services#corporate",
        text: "Подробнее",
        title: "свадьбы",
      },
    },
    {
      image: props.data.image3.childImageSharp.fluid,
      title: "детские праздники",
      subtitle: "ведущий на радость детям",
      link: {
        to: "/services#kids",
        text: "Подробнее",
        title: "корпоративы",
      },
    },
    {
      image: props.data.image4.childImageSharp.fluid,
      title: "частные праздники",
      subtitle: "юбилеи и не только",
      link: {
        to: "/services#private",
        text: "Подробнее",
        title: "детские праздники",
      },
    },
    {
      image: props.data.image5.childImageSharp.fluid,
      title: "дни рождения",
      subtitle: "лучший подарок",
      link: {
        to: "/services#birthday",
        text: "Подробнее",
        title: "Дни рождения",
      },
    },
    {
      image: props.data.image6.childImageSharp.fluid,
      title: "городские праздники",
      subtitle: "веду массовые мероприятия",
      link: {
        to: "/services#city",
        text: "Подробнее",
        title: "городские праздники",
      },
    },
    {
      image: props.data.image7.childImageSharp.fluid,
      title: "промоакции",
      subtitle: "ведущий",
      link: {
        to: "/services#promo",
        text: "Подробнее",
        title: "промоакции",
      },
    },
  ]
  return (
    <Layout>
      <SEO title="Главная" />
      <SocialLinks />
      <div className="page">
        <IndexIntro data={indexData} otherImages={otherImages} />
        <section className="about"></section>
      </div>
    </Layout>
  )
}

export const indexPageImage = graphql`
  fragment indexPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const indexPageSmallImage = graphql`
  fragment indexPageSmallImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "index/wedding.jpg" }) {
      ...indexPageImage
    }
    image2: file(relativePath: { eq: "index/party.jpg" }) {
      ...indexPageImage
    }
    image3: file(relativePath: { eq: "index/children.jpg" }) {
      ...indexPageImage
    }
    image4: file(relativePath: { eq: "index/pull.jpg" }) {
      ...indexPageImage
    }
    image5: file(relativePath: { eq: "index/hb.jpg" }) {
      ...indexPageSmallImage
    }
    image6: file(relativePath: { eq: "index/salut.jpg" }) {
      ...indexPageSmallImage
    }
    image7: file(relativePath: { eq: "index/microphone.jpg" }) {
      ...indexPageSmallImage
    }
    image8: file(relativePath: { eq: "index/smoke.jpg" }) {
      ...indexPageSmallImage
    }
  }
`

export default IndexPage