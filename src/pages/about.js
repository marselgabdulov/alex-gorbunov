import React from "react"
import { Link, graphql } from "gatsby"
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
        <SEO title="Обо мне" />
        <div className="about-page">
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
                Алексей с 2000 года работает ведущим праздничных мероприятий
                абсолютно любого формата. <br />
                Провел огромное количество свадеб, дней рождений, корпоративных
                вечеринок... и даже один развод.
              </h2>
              <p>
                Родился в Москве в 1980 году. Получил высшее образование по
                специальности режиссёр-постановщик культурно-досуговых программ.
              </p>
              <p>
                С 1999 по 2003 год играл в команде КВН «Новые Гусары» Открытой
                лиги Москвы и Подмосковья КВН (ныне Премьер-лига КВН). При этом
                в Клубе весёлых и находчивых не только выходил на сцену, но и
                был автором сценария большинства игр своей команды.
              </p>
              <p>
                Как у квнщика со стажем у Алексея в программе много
                импровизированных шуток, интерактивного общения с гостями,
                выступления в жанре стенд – ап, но при этом юмор никогда не
                «опускается ниже пояса».
              </p>
              <p>
                Манера общения и подачи шуток опираются на дружелюбность и в то
                же время умение быть "своим парнем" для любого из гостей.
              </p>
              <p>
                В зависимости от поведения публики Алексей легко перестраивет
                сценарный план и программу вечера прямо по ходу праздника.
              </p>
              <p>
                Поскольку всю свою творческую жизнь Алексей сам пишет сценарии,
                к каждому празднику он старается подходить индивидульно. В
                зависимости от темы, места, повода, состава гостей и их
                численности, а, самое главное, ваших пожеланий, готовится та или
                иная программа. 
              </p>
              <p>
                При её обсуждении Алексей готов предложить уже готовые сценарные
                планы либо написать сценарий "с нуля", использовав вашу или его
                идею.
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
