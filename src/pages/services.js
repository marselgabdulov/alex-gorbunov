import React from "react"
import "./styles/services.scss"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/Image/Image"

function Services(props) {
  const images = [
    props.data.image1.childImageSharp.fluid,
    props.data.image2.childImageSharp.fluid,
    props.data.image3.childImageSharp.fluid,
    props.data.image4.childImageSharp.fluid,
    props.data.image5.childImageSharp.fluid,
    props.data.image6.childImageSharp.fluid,
  ]
  function scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    })
  }

  return (
    <Layout>
      <div className="page">
        <section className="services-intro">
          <div className="services__menu">
            <div
              className="corner-so"
              data-aos="fade"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-anchor-placement="bottom"
            ></div>
            <div
              className="corner-st"
              data-aos="fade"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-anchor-placement="bottom"
            ></div>
            <div
              className="corner-big"
              data-aos="custom-slide-left"
              data-aos-once="true"
              data-aos-anchor-placement="bottom"
              data-aos-duration="750"
            ></div>
            <div
              className="promo"
              data-aos="custom-slide-left"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom"
            >
              <span onClick={() => scrollTo(document.getElementById("promo"))}>
                Промо
              </span>
            </div>
            <div
              className="city"
              data-aos="custom-slide-left"
              data-aos-duration="5000"
              data-aos-once="true"
            >
              <div className="image__wrapper">
                <Image image={images[5]} />
              </div>
              <span onClick={() => scrollTo(document.getElementById("city"))}>
                Городские
                <br />
                праздники
              </span>
            </div>
            <div
              className="birthday"
              data-aos="custom-slide-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="image__wrapper">
                <Image image={images[4]} />
              </div>
              <span
                onClick={() => scrollTo(document.getElementById("birthday"))}
              >
                Дни рождения
              </span>
            </div>
            <div
              className="private"
              data-aos="custom-slide-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div className="image__wrapper">
                <Image image={images[3]} />
              </div>
              <span
                onClick={() => scrollTo(document.getElementById("private"))}
              >
                Частные праздники
              </span>
            </div>
            <div
              className="kids"
              data-aos="custom-slide-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="image__wrapper">
                <Image image={images[2]} />
              </div>
              <span onClick={() => scrollTo(document.getElementById("kids"))}>
                Детские праздники
              </span>
            </div>
            <div
              className="corporate"
              data-aos="custom-slide-left"
              data-aos-duration="3000"
              data-aos-once="true"
            >
              <div className="image__wrapper">
                <Image image={images[1]} />
              </div>
              <span
                onClick={() => scrollTo(document.getElementById("corporate"))}
              >
                Корпоративы
              </span>
            </div>
            <div
              className="wedding"
              data-aos="custom-slide-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="image__wrapper">
                <Image image={images[0]} />
              </div>
              <span
                onClick={() => scrollTo(document.getElementById("wedding"))}
              >
                Свадьбы
              </span>
            </div>
          </div>
          <div className="services__mobile-menu">
            <div className="menu-wrapper">
              <div
                className="menu-item"
                style={{ backgroundColor: "#911600" }}
              ></div>
              <div className="menu-item" style={{ backgroundColor: "#962a17" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("wedding"))}
                >
                  свадьбы
                </span>
              </div>
              <div className="menu-item" style={{ backgroundColor: "#be7062" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("corporate"))}
                >
                  корпоративы
                </span>
              </div>
              <div className="menu-item" style={{ backgroundColor: "#c38e84" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("kids"))}
                >
                  детские праздники
                </span>
              </div>
              <div className="menu-item" style={{ backgroundColor: "#974e79" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("private"))}
                >
                  частные праздники
                </span>
              </div>
              <div className="menu-item" style={{ backgroundColor: "#872d62" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("birthday"))}
                >
                  дни рождения
                </span>
              </div>
              <div className="menu-item" style={{ backgroundColor: "#77124d" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("city"))}
                >
                  городские праздники
                </span>
              </div>
              <div className="menu-item" style={{ backgroundColor: "#730043" }}>
                <span
                  className="menu-link"
                  onClick={() => scrollTo(document.getElementById("promo"))}
                >
                  промоакции
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="services-wedding" id="wedding">
          свадьбы
        </section>
        <section className="services-corporate" id="corporate">
          корпоративы
        </section>
        <section className="services-kids" id="kids">
          детские праздники
        </section>
        <section className="services-private" id="private">
          частные праздники
        </section>
        <section className="services-birthday" id="birthday">
          дни рождения
        </section>
        <section className="services-city" id="city">
          городские праздники
        </section>
        <section className="services-promo" id="promo">
          промоакции
        </section>
      </div>
    </Layout>
  )
}

export const servicesPageImage = graphql`
  fragment servicesPageImage on File {
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
      ...servicesPageImage
    }
    image2: file(relativePath: { eq: "index/party.jpg" }) {
      ...servicesPageImage
    }
    image3: file(relativePath: { eq: "services/kids.jpg" }) {
      ...servicesPageImage
    }
    image4: file(relativePath: { eq: "index/pull.jpg" }) {
      ...servicesPageImage
    }
    image5: file(relativePath: { eq: "index/hb.jpg" }) {
      ...servicesPageImage
    }
    image6: file(relativePath: { eq: "index/salut.jpg" }) {
      ...servicesPageImage
    }
    image7: file(relativePath: { eq: "index/microphone.jpg" }) {
      ...servicesPageImage
    }
    image8: file(relativePath: { eq: "index/smoke.jpg" }) {
      ...servicesPageImage
    }
  }
`

export default Services
