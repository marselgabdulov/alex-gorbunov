import React, { useState } from "react"
import { graphql } from "gatsby"
import Swipe from "react-easy-swipe"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/photos.scss"

import Next from "../images/icons/right.svg"
import Back from "../images/icons/left.svg"
import Cross from "../images/icons/cross.svg"

function PhotosPage(props) {
  const pageImages = [
    props.data.image13.childImageSharp.fluid,
    props.data.image14.childImageSharp.fluid,
    props.data.image15.childImageSharp.fluid,
    props.data.image16.childImageSharp.fluid,
    props.data.image17.childImageSharp.fluid,
    props.data.image1.childImageSharp.fluid,
    props.data.image2.childImageSharp.fluid,
    props.data.image3.childImageSharp.fluid,
    props.data.image4.childImageSharp.fluid,
    props.data.image5.childImageSharp.fluid,
    props.data.image6.childImageSharp.fluid,
    props.data.image7.childImageSharp.fluid,
    props.data.image8.childImageSharp.fluid,
    props.data.image9.childImageSharp.fluid,
    props.data.image10.childImageSharp.fluid,
    props.data.image11.childImageSharp.fluid,
    props.data.image12.childImageSharp.fluid,
    props.data.imageA1.childImageSharp.fluid,
    props.data.imageA2.childImageSharp.fluid,
    props.data.imageA3.childImageSharp.fluid,
    props.data.imageA4.childImageSharp.fluid,
    props.data.imageA5.childImageSharp.fluid,
    props.data.imageA6.childImageSharp.fluid,
    props.data.imageA7.childImageSharp.fluid,
  ]

  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleVisible() {
    visible ? setVisible(false) : setVisible(true)
  }

  function handlePrev() {
    return currentIndex === 0
      ? setCurrentIndex(pageImages.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  function handleNext() {
    return currentIndex === pageImages.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
    <Layout>
      <SEO title="Фото | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div className="photos-page">
        <div className="photos-page__scroll">
          <div
            className="photo-gallery"
            data-aos="fade"
            data-aos-delay="150"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            {pageImages.map((image, index) => (
              <div
                className="gallery-image"
                key={index}
                style={{ backgroundImage: `url(${image.src})` }}
                onClick={() => {
                  setCurrentIndex(index)
                  handleVisible()
                }}
              ></div>
            ))}
          </div>
          <Swipe onSwipeLeft={handleNext} onSwipeRight={handlePrev}>
            <div
              className={
                visible ? "full-gallery--visible" : "full-gallery--hidden"
              }
            >
              <div
                className="current-image"
                style={{
                  backgroundImage: `url(${pageImages[currentIndex].src})`,
                }}
              ></div>
              <div className="prev" onClick={handlePrev}>
                <Back />
              </div>
              <div className="next" onClick={handleNext}>
                <Next />
              </div>
              <div className="close" onClick={handleVisible}>
                <Cross />
              </div>
            </div>
          </Swipe>
        </div>
      </div>
    </Layout>
  )
}

export const photosPageImage = graphql`
  fragment photosPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "photos/1.jpg" }) {
      ...photosPageImage
    }
    image2: file(relativePath: { eq: "photos/2.jpg" }) {
      ...photosPageImage
    }
    image3: file(relativePath: { eq: "photos/3.jpg" }) {
      ...photosPageImage
    }
    image4: file(relativePath: { eq: "photos/4.jpg" }) {
      ...photosPageImage
    }
    image5: file(relativePath: { eq: "photos/5.jpg" }) {
      ...photosPageImage
    }
    image6: file(relativePath: { eq: "photos/6.jpg" }) {
      ...photosPageImage
    }
    image7: file(relativePath: { eq: "photos/7.jpg" }) {
      ...photosPageImage
    }
    image8: file(relativePath: { eq: "photos/8.jpg" }) {
      ...photosPageImage
    }
    image9: file(relativePath: { eq: "photos/9.jpg" }) {
      ...photosPageImage
    }
    image10: file(relativePath: { eq: "photos/10.jpg" }) {
      ...photosPageImage
    }
    image11: file(relativePath: { eq: "photos/11.jpg" }) {
      ...photosPageImage
    }
    image12: file(relativePath: { eq: "photos/12.jpg" }) {
      ...photosPageImage
    }
    image13: file(relativePath: { eq: "photos/13.jpg" }) {
      ...photosPageImage
    }
    image14: file(relativePath: { eq: "photos/14.jpg" }) {
      ...photosPageImage
    }
    image15: file(relativePath: { eq: "photos/15.jpg" }) {
      ...photosPageImage
    }
    image16: file(relativePath: { eq: "photos/16.jpg" }) {
      ...photosPageImage
    }
    image17: file(relativePath: { eq: "photos/17.jpg" }) {
      ...photosPageImage
    }
    imageA1: file(relativePath: { eq: "photos/a1.jpg" }) {
      ...photosPageImage
    }
    imageA2: file(relativePath: { eq: "photos/a2.jpg" }) {
      ...photosPageImage
    }
    imageA3: file(relativePath: { eq: "photos/a3.jpg" }) {
      ...photosPageImage
    }
    imageA4: file(relativePath: { eq: "photos/a4.jpg" }) {
      ...photosPageImage
    }
    imageA5: file(relativePath: { eq: "photos/a5.jpg" }) {
      ...photosPageImage
    }
    imageA6: file(relativePath: { eq: "photos/a6.jpg" }) {
      ...photosPageImage
    }
    imageA7: file(relativePath: { eq: "photos/a7.jpg" }) {
      ...photosPageImage
    }
  }
`

export default PhotosPage
