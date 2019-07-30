import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/contacts.scss"
import { graphql } from "gatsby"

function ContactsPage(props) {
  return (
    <Layout>
      <SEO title="Контакты" />
      <div className="page">
        <div className="contacts__wrapper">
          <div className="contacts__info">
            <div className="contacts__email">
              <h4>Email: </h4>
              <a href="mailto:alex.gorbunov@gmail.com">
                alex.gorbunov@gmail.com
              </a>
            </div>
            <div className="contacts__phone">
              <h4>Телефон: </h4>
              <a href="tel:+79166228889">+7 916 622 88 89</a>
            </div>

            <h4 className="contacts__social--title">Социальные сети:</h4>
            <div className="contacts__social">
              <div className="contacts__social--link">
                <a
                  href="vk.com"
                  title="в контакте"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Вконтакте
                </a>
              </div>
              <div className="contacts__social--link">
                <a
                  href="https://www.facebook.com/alex.gorbunov.969"
                  title="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div className="contacts__social--link">
                <a
                  href="https://www.instagram.com/"
                  title="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className="contacts__social--link">
                <a
                  href="https://www.youtube.com/watch?v=xkAQ6bhpwYw"
                  title="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </div>
              <div className="contacts__social--link">
                <a
                  href="https://vimeo.com/"
                  title="vimeo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>
          <div
            className="contacts__image"
            style={{
              backgroundImage: `url(${props.data.image1.childImageSharp.fluid.src})`,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const contactsImage = graphql`
  fragment contactsImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "alex2.jpg" }) {
      ...contactsImage
    }
  }
`

export default ContactsPage
