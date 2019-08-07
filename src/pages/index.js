import React from "react"
import { Link } from "gatsby"
import "./styles/index.scss"
import IndexGallery from "../components/IndexGallery/IndexGallery"
import Video from "../components/Video/Video"
import Layout from "../components/layout"
import Image from "../components/Image/Image"
import SEO from "../components/seo"

import Instagram from "../images/icons/social/instagram.svg"
import Facebook from "../images/icons/social/facebook.svg"
import Vk from "../images/icons/social/vk.svg"

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

  const indexLinks = [
    {
      to: "/services#wedding",
      title: "Свадьбы",
    },
    {
      to: "/services#corporate",
      title: "Корпоративы",
    },
    {
      to: "/services#kids",
      title: "Детские праздники",
    },
    {
      to: "/services#private",
      title: "Частные праздники",
    },
    {
      to: "/services#birthday",
      title: "Дни рождения",
    },
    {
      to: "/services#city",
      title: "Городские праздники",
    },
    {
      to: "/services#promo",
      title: "Промоакции",
    },
  ]
  return (
    <Layout>
      <SEO title="Главная" />
      <div className="index-page">
        <section className="index-intro">
          <div className="intro__contacts">
            <a href="tel:+79166228889" className="phone">
              +7 916 622 88 89
            </a>

            <a href="mailto:alex.gorbunov@gmail.com" className="email">
              alex.gorbunov@gmail.com
            </a>
          </div>
          <div className="intro__social">
            <a
              className="social-link"
              href="https://vk.com/alexgrantshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Vk />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/alex.gorbunov.969"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>

            <a
              className="social-link"
              href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
          <div className="intro__background">
            <Image image={props.data.image0.childImageSharp.fluid} />
          </div>
          <h1 className="intro__title">Ведущий Алексей Горбунов</h1>
          <p className="intro__text">
            С 2000 года работает ведущим праздничных мероприятий абсолютно
            любого формата. За эти годы провел огромное количество свадеб, дней
            рождений, корпоративных вечеринок, вёл промо-акции, новогодние и
            тематические вечера, несколько шоу – проектов, концертов,
            разнообразные городские мероприятия, детские праздники и даже один
            развод. 
          </p>
        </section>
        <section className="index-about"></section>
      </div>
    </Layout>
  )
}

export const testPageImage = graphql`
  fragment testPageImage on File {
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
      ...testPageImage
    }
    image1: file(relativePath: { eq: "index/wedding.jpg" }) {
      ...testPageImage
    }
    image2: file(relativePath: { eq: "index/party2.jpg" }) {
      ...testPageImage
    }
    image3: file(relativePath: { eq: "index/children.jpg" }) {
      ...testPageImage
    }
    image4: file(relativePath: { eq: "reviews/cappy.jpg" }) {
      ...testPageImage
    }
  }
`
export default IndexPage

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
