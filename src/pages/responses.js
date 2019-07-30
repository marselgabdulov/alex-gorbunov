import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import "./styles/responses.scss"

function ResponsesPage(props) {
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleFullResponse(index) {
    setCurrentIndex(index)
    setVisible(true)
  }

  const responses = [
    {
      image: props.data.image1.childImageSharp.fluid,
      author: "Алексей",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Все началось с того, что с Very Berry Event мы встретились в кафе примерно за пол года до свадьбы. Когда я увидела Вику, сразу стало понятно что контакт есть и всё будет ок. Вот есть такие люди, с твоей планеты Когда мы просматривали их работы, было видно что каждый праздник- это маленькая отдельная история, ребята даже сами одеваются в соответствии с тематикой праздника:)\nМы обсудили то какой мой жених и я видим нашу свадьбу и распрощались на несколько месяцев. Все это время мы с Викой обменивались фотографиями декора, букетов, скатертей и стульев. Ни одного раза я не почувствовала что Вика как-то нехотя мне отвечает или не заинтересована в нашем мероприятии так же как и мы.\n Вика очень тонко чувствовала где я хочу сама выбрать какие-то детали декора, а где мне нужна её помощь, никогда не навязывала ничего лишнего, но в то же время я понимала, ни одна деталь не будет упущена агентством, ребята обо всем позаботятся. \nВся подготовка проходила весело, интересно, мы встречались в ресторане где было намечено проведение нашей свадьбы обсуждали меню, декор, программу, музыку, даже платье невестыБыло понятно что команде нравится то что они делают!\n Спасибо за то что нам хочется еще раз пережить не только сам день свадьбы, а и месяц подготовки к ней) спасибо что отнеслись с интересом к нашим желаниям и смогли их воплотить в рамках нашего бюджета) Спасибо что вытакие творческие и креативные! Надеюсь мы организуем нам когда нибудь такую же незабываемую годовщину",
    },
    {
      image: props.data.image2.childImageSharp.fluid,
      author: "Маша и Миша",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Пользуемся ребятами уже не первый раз. В октябре столкнулись с проблемой — свадьба и ее декор. Определились со стилем — рустик. На первой встрече даже не пришлось объяснять как я это вижу, Вике удалось каким-то образом проникнуть мне в голову и сделать в итоге все именно так как хотелось. P.S. декор был выполнен надежно и на совесть. Проверено — невменяемыми танцами гостей. Спасибо!",
    },
    {
      image: props.data.image3.childImageSharp.fluid,
      author: "Сергей",
      link: "https://www.facebook.com/alex.gorbunov.969",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non maxime velit quasi omnis voluptate suscipit? Vitae aut ducimus eos enim harum esse facere libero quasi fugiat, molestiae accusamus rerum perferendis debitis quas a eaque provident consectetur assumenda earum, eveniet. Nobis labore, ipsum doloribus sint sunt quasi, officia consequuntur reiciendis animi.",
    },
  ]
  return (
    <Layout>
      <SEO title="Отзывы" />
      <div className="page">
        <SocialLinks />
        <div className="responses__wrapper">
          <h2 className="responses__title">Отзывы</h2>
          <div className="responses__question">
            Что говорят мои клиенты о моей работе?
          </div>

          <div className={visible ? "full-response" : "full-response--hidden"}>
            <div
              className="full-response__sider"
              onClick={() => setVisible(false)}
            ></div>
            <div className="full-response__wrapper">
              <div
                className="full-response__close"
                onClick={() => setVisible(false)}
              >
                закрыть
              </div>
              <div className="full-response__text">
                {responses[currentIndex].text
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="responses">
            {responses.map((response, index) => (
              <div className="response" key={index}>
                <div className="response__text">
                  <div className="response__author">
                    <a
                      href={response.link}
                      title="ссылка на автора"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {response.author}
                    </a>
                  </div>
                  {response.text.length > 300
                    ? response.text.slice(0, 300)
                    : response.text}
                  {response.text.length > 300 ? (
                    <span
                      className="read-more"
                      onClick={() => handleFullResponse(index)}
                    >
                      ...читать дальше
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className="response__image"
                  style={{ backgroundImage: `url(${response.image.src})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const responsesImage = graphql`
  fragment responsesImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "index/party.jpg" }) {
      ...responsesImage
    }
    image2: file(relativePath: { eq: "index/pull.jpg" }) {
      ...responsesImage
    }
    image3: file(relativePath: { eq: "index/footer.jpg" }) {
      ...responsesImage
    }
    image4: file(relativePath: { eq: "index/smile.jpg" }) {
      ...responsesImage
    }
  }
`

export default ResponsesPage
