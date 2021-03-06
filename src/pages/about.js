import React from "react"
import { graphql } from "gatsby"
import "./styles/about.scss"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  state = {
    currentIndex: 0,
    bgImages: [
      this.props.data.imageFirst.childImageSharp.fluid.src,
      this.props.data.imageSecond.childImageSharp.fluid.src,
      this.props.data.imageThird.childImageSharp.fluid.src,
    ],
  }

  componentDidMount() {
    this.interval = setInterval(() => this.handleNext(), 7000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleNext() {
    if (this.state.currentIndex === this.state.bgImages.length - 1) {
      this.setState({ currentIndex: 0 })
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
    console.log(this.state.currentIndex)
  }

  render() {
    return (
      <Layout>
        <SEO title="Обо мне | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
        <div
          className="about-page"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
        >
          <TransitionGroup className="about-page__bg">
            <CSSTransition
              appear={true}
              key={this.state.currentIndex}
              timeout={2000}
              classNames="fade"
            >
              <div
                className="bg__item"
                style={{
                  backgroundImage: `url(${
                    this.state.bgImages[this.state.currentIndex]
                  })`,
                }}
              ></div>
            </CSSTransition>
          </TransitionGroup>

          <div className="about-page__scroll">
            <div className="about-page__text">
              <h2 className="about__title">
                Привет, я хочу немного рассказать вам о себе. <br />
              </h2>
              <p>
                Ведь если вы решите доверить мне свой праздник, думаю, мы уже
                навсегда останемся в теплых отношениях.
              </p>
              <p>
                И если так случится, это будет самый главный итог нашей встречи
                лично для меня.
              </p>
              <p>
                Очень часто я становлюсь для людей своим, семейным,
                корпоративным, постоянным ведущим на долгие годы. И потом,
                должны же мы перед первой встречей быть немного знакомы!
              </p>
              <p>
                Я родился в Москве в 1980 году. Получил высшее образование по
                специальности режиссёр-постановщик культурно-досуговых программ.
              </p>
              <p>
                С 1999 по 2003 год играл в команде КВН «Новые Гусары» Открытой
                лиги Москвы и Подмосковья КВН (ныне Премьер-лига КВН). При этом
                в Клубе весёлых и находчивых не только выходил на сцену, но и
                был автором сценария большинства игр своей команды, всегда
                участвовал во всех мозговых штурмах и брифах. Креатив и выдумка
                - это мой конек.
              </p>
              <p>
                С 2001 года я работаю ведущим праздничных мероприятий абсолютно
                любого формата. За эти годы провел более тысячи свадеб, юбилеев,
                дней рождений, корпоративных вечеров, работал ведущим концертов,
                фестивалей, шоу программ на городских площадках, частных и
                государственных мероприятий по всей стране.
              </p>
              <p>
                Мое главное правило в общении - легкость, тактичность и
                порядочность.
              </p>
              <p>
                Как у КВНщика и стендапера со стажем у меня в программе много
                импровизированных шуток, интерактивного общения с гостями,​ но
                при этом юмор никогда не опускается ниже пояса.
              </p>
              <p>
                Манера общения и подачи шуток опираются на дружелюбность и в то
                же время умение быть "своим парнем" для любого из гостей.
              </p>
              <p>
                В зависимости от поведения публики и ее настроения я легко
                перестраиваю сценарный план и программу вечера прямо по ходу
                праздника.
              </p>
              <p>
                Поскольку я всю свою творческую жизнь сам пишу сценарии, к
                каждому событию я подхожу индивидульно. В зависимости от темы,
                места, повода, состава гостей и их численности, а самое главное
                - ваших пожеланий я готовлю ту или иную программу, которая будет
                уникальной. Вы смело сможете сказать, что так, как у вас, не
                было нигде больше.
              </p>
              <p>
                Я поющий ведущий. <br />
                У меня есть своя музыкальная команда. <br />
                Я пишу музыку и стихи. <br />В 2005 году я стал лауреатом
                конкурса «Золотой голос», проводившегося продюсерским центром
                Игоря Матвиенко. Бонусом к моему выступлению всегда идет
                музыкальный сет для гостей с «живым звуком». Программа этого
                сета может быть составлена с учетом ваших пожеланий.
              </p>
              <p>
                С момента подписания договора и до дня проведения вашего
                мероприятия я буду буквально вести вас за руку к вашему
                празднику, буду помогать вам своими советами и при необходимости
                консультировать по всем интересующим вас вопросам.
              </p>
              <p>До встречи!</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const aboutPageImage = graphql`
  fragment aboutPageImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const aboutPageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "about/agent1.jpg" }) {
      ...aboutPageImage
    }
    imageSecond: file(relativePath: { eq: "about/agent2.jpg" }) {
      ...aboutPageImage
    }
    imageThird: file(relativePath: { eq: "about/agent3.jpg" }) {
      ...aboutPageImage
    }
  }
`

export default AboutPage
