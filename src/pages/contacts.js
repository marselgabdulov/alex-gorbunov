import React from "react"
import "./styles/contacts.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactsPage(props) {
  return (
    <Layout>
      <SEO title="Контакты | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div className="contacts-page">
        <div className="contacts">
          <div
            className="phone"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <h2>телефон</h2>
            <a href="tel:+79856446489">+7 985 644 64 89</a>
          </div>
          <div
            className="email"
            data-aos="fade"
            data-aos-delay="450"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            <h2>email</h2>
            <a href="mailto:gorbunov_show@mail.ru">gorbunov_show@mail.ru</a>
          </div>
        </div>
        <div className="social">
          <div className="facebook">
            <a
              href="https://www.facebook.com/alex.gorbunov.969"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              Facebook
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              Instagram
            </a>
          </div>
          <div className="vk">
            <a
              href="https://vk.com/alexgrantshow"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade"
              data-aos-delay="350"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center-bottom"
            >
              Vk
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactsPage
