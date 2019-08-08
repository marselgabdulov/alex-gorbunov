import React from "react"
import { Link, graphql } from "gatsby"
import "./styles/index.scss"
import Video from "../components/Video/Video"
import IndexGallery from "../components/IndexGallery/IndexGallery"
import Footer from "../components/Footer/Footer"
import Layout from "../components/layout"
import Image from "../components/Image/Image"
import SEO from "../components/seo"
import ReactPageScroller from "react-page-scroller"
import Instagram from "../images/icons/social/instagram.svg"
import Facebook from "../images/icons/social/facebook.svg"
import Vk from "../images/icons/social/vk.svg"

class IndexPage extends React.Component {
  state = {
    currentPage: 1,
  }
  pageScroller = null

  goToPage = eventKey => {
    this.pageScroller.goToPage(eventKey)
  }

  pageOnChange = number => {
    this.setState({ currentPage: number })
  }

  // getPagesNumbers = () => {
  //   const pageNumbers = []
  //
  //   for (let i = 1; i <= 5; i++) {
  //     pageNumbers.push(
  //       <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>
  //         {i}
  //       </Pager.Item>
  //     )
  //   }
  //
  //   return [...pageNumbers]
  // }

  render() {
    return (
      <Layout>
        <SEO title="Главная" />
        <div className="index-page">
          <ReactPageScroller
            ref={c => (this._pageScroller = c)}
            pageOnChange={this.pageOnChange}
          >
            <section className="index-intro">
              <div
                className="intro__contacts"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
                data-aos-anchor-placement="center-bottom"
              >
                <a href="mailto:gorbunov_show@mail.ru" className="email">
                  gorbunov_show@mail.ru
                </a>
                <a href="tel:+79856446489" className="phone">
                  +7 985 644 64 89
                </a>
              </div>
              <div className="intro__social">
                <a
                  className="social-link"
                  href="https://vk.com/alexgrantshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Vk />
                </a>
                <a
                  className="social-link"
                  href="https://www.facebook.com/alex.gorbunov.969"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade"
                  data-aos-delay="250"
                  data-aos-duration="1200"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Facebook />
                </a>

                <a
                  className="social-link"
                  href="https://instagram.com/alexgrant_show?igshid=1loy3l4uz5erh"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                  data-aos-anchor-placement="center-bottom"
                >
                  <Instagram />
                </a>
              </div>
              <div
                data-aos="fade"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="true"
                data-aos-anchor-placement="center-bottom"
                className="intro__background"
                style={{
                  backgroundImage: `url(${this.props.data.image0.childImageSharp.fluid.src})`,
                }}
              ></div>
              <div className="intro__title">
                <h1
                  data-aos="fade"
                  data-aos-delay="250"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Ведущий Алексей Горбунов
                </h1>
              </div>
              <p
                className="intro__text"
                data-aos="fade"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
                data-aos-anchor-placement="center-bottom"
              >
                С 2000 года работает ведущим праздничных мероприятий абсолютно
                любого формата. За эти годы провел огромное количество свадеб,
                дней рождений, корпоративных вечеринок, вёл промо-акции,
                новогодние и тематические вечера, несколько шоу – проектов,
                концертов, разнообразные городские мероприятия, детские
                праздники и даже один развод. 
              </p>
            </section>
            <section className="index-about">
              <div
                className="about__image"
                style={{
                  backgroundImage: `url(${this.props.data.image1.childImageSharp.fluid.src})`,
                }}
              ></div>
              <div className="about__text">
                <h2 className="about__title">Обо мне</h2>
                <p>
                  Родился в Москве в 1980 году. Получил высшее образование по
                  специальности режиссёр-постановщик культурно-досуговых
                  программ.
                </p>
                <p>
                  С 1999 по 2003 год играл в команде КВН «Новые Гусары» Открытой
                  лиги Москвы и Подмосковья КВН (ныне Премьер-лига КВН). При
                  этом в Клубе весёлых и находчивых не только выходил на сцену,
                  но и был автором сценария большинства игр своей команды.
                </p>
                <p>
                  Как у квнщика со стажем у Алексея в программе много
                  импровизированных шуток, интерактивного общения с гостями,
                  выступления в жанре стенд – ап, но при этом юмор никогда не
                  «опускается ниже пояса».
                </p>
                <p>
                  Манера общения и подачи шуток опираются на дружелюбность и в
                  то же время умение быть "своим парнем" для любого из гостей.
                </p>
                <p>
                  В зависимости от поведения публики Алексей легко перестраивет
                  сценарный план и программу вечера прямо по ходу праздника.
                </p>
              </div>
            </section>
            <section className="index-about2">
              <div
                className="about2__image"
                style={{
                  backgroundImage: `url(${this.props.data.image3.childImageSharp.fluid.src})`,
                }}
              ></div>
              <div className="about2__text">
                <p>
                  Поскольку всю свою творческую жизнь Алексей сам пишет
                  сценарии, к каждому празднику он старается подходить
                  индивидульно. В зависимости от темы, места, повода, состава
                  гостей и их численности, а, самое главное, ваших пожеланий,
                  готовится та или иная программа. 
                </p>
                <p>
                  При её обсуждении Алексей готов предложить уже готовые
                  сценарные планы либо написать сценарий "с нуля", использовав
                  вашу или его идею.
                </p>
                <p>
                  Алексей обладает прекрасным вокалом. В 2005 году он стал
                  лауреатом конкурса «Золотой голос», проводимым продюсерским
                  центром Игоря Матвиенко. Бонусом к его выступлению всегда идет
                  один музыкальный сет для гостей с «живым звуком». Программа
                  этого сета может быть составлена с учетом ваших пожеланий.
                </p>
                <p>
                  С момента подписания договора и до дня проведения вашего
                  праздничного мероприятия Алексей будет помогать вам своими
                  советами и при необходимости консультировать по всем
                  интересующим вас вопросам.
                </p>
              </div>
            </section>
            <section className="index-media">
              <div className="media__video">
                <h3>Видео</h3>
                <div className="video__items">
                  <div className="video__item">
                    <Video
                      top="300"
                      url="https://www.youtube.com/watch?v=33gGO3nu4Yk&feature=youtu.be"
                      name="Демонстрация возможностей"
                      cover={this.props.data.image2.childImageSharp.fluid}
                    />
                  </div>
                  <div className="video__item">
                    <Video
                      top="300"
                      url="https://www.youtube.com/watch?v=33gGO3nu4Yk&feature=youtu.be"
                      name="Демонстрация возможностей"
                      cover={this.props.data.image2.childImageSharp.fluid}
                    />
                  </div>
                  <div className="video__item">
                    <Video
                      top="300"
                      url="https://www.youtube.com/watch?v=33gGO3nu4Yk&feature=youtu.be"
                      name="Демонстрация возможностей"
                      cover={this.props.data.image2.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>
              <div className="media__gallery">
                <h3>Фото</h3>
                <IndexGallery
                  images={[
                    this.props.data.image0.childImageSharp.fluid,
                    this.props.data.image1.childImageSharp.fluid,
                    this.props.data.image2.childImageSharp.fluid,
                  ]}
                />
              </div>
            </section>
            <Footer />
          </ReactPageScroller>
        </div>
      </Layout>
    )
  }
}

export const indexPageImage = graphql`
  fragment indexPageImage on File {
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
      ...indexPageImage
    }
    image1: file(relativePath: { eq: "index/alex-about.jpg" }) {
      ...indexPageImage
    }
    image2: file(relativePath: { eq: "index/alex-cover.jpg" }) {
      ...indexPageImage
    }
    image3: file(relativePath: { eq: "index/alex-and.jpg" }) {
      ...indexPageImage
    }
  }
`
export default IndexPage

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

// <div>Icons made by <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">Lucy G</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
