import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import IndexIntro from "../components/IndexIntro/IndexIntro"

import "./styles/index.scss"

function IndexPage(props) {
  const indexData = [
    {
      image: props.data.image1.childImageSharp.fluid,
      title: "Ведущий",
      subtitle: "пожалуй, один из лучших",
      text:
        "живой механизм со своей душой, который составляют специалисты различных профилей, обладающие талантом создания красоты, радости и настоящего фейерверка эмоций для любого события вашей жизни.",
      link: {
        to: "/responses",
        text: "подробнее",
        title: "подробнее",
      },
    },
    {
      image: props.data.image2.childImageSharp.fluid,
      title: "свадьбы",
      subtitle: "ведущий на свадьбу",
      text:
        "Свадьба – это не один назначенный день в пригласительном, а целые месяцы исканий, встреч, решений. Свадьба. Новая точка отсчета.",
      link: {
        to: "/weddings",
        text: "Подробнее",
        title: "свадьбы",
      },
    },
    {
      image: props.data.image3.childImageSharp.fluid,
      title: "Корпоративы",
      subtitle: "ведущий на корпоратив",
      text:
        "Мы знаем, как сделать так, чтобы ваше корпоративное мероприятие было успешным и запоминающимся! И еще один важный момент: мы умеем вместить праздник в желаемый бюджет.",
      link: {
        to: "/corporates",
        text: "Подробнее",
        title: "корпоративы",
      },
    },
    {
      image: props.data.image4.childImageSharp.fluid,
      title: "детские праздники",
      subtitle: "ведущий на радость детям",
      text:
        "День рождения, пока ты ребенок — самый волшебный праздник! Дети и их родители рассказывают нам о своих желаниях, а мы, как и положено волшебникам, воплощаем их в жизнь.",
      link: {
        to: "/children",
        text: "Подробнее",
        title: "детские праздники",
      },
    },
  ]
  return (
    <Layout>
      <SEO title="Главная" />
      <SocialLinks />
      <div className="page">
        <IndexIntro data={indexData} />
        <section className="test1"></section>
        <section className="test2"></section>
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

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "index/alex.jpg" }) {
      ...indexPageImage
    }
    image2: file(relativePath: { eq: "index/footer.jpg" }) {
      ...indexPageImage
    }
    image3: file(relativePath: { eq: "index/pull.jpg" }) {
      ...indexPageImage
    }
    image4: file(relativePath: { eq: "index/party.jpg" }) {
      ...indexPageImage
    }
  }
`

export default IndexPage
