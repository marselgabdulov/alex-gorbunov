import React, { useState, useEffect } from "react"
import Image from "../Image/Image"
import "./IntroGallery.scss"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import ProgressBar from "../ProgressBar/ProgressBar"
import CustomLink from "../CustomLink/CustomLink"
import MobileCarousel from "../MobileCarousel/MobileCarousel"

function IntroGallery({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  let galleryTimeout

  useEffect(() => {
    startGallery()
  }, [])

  function startGallery() {
    if (isPlaying) {
      galleryTimeout = setTimeout(() => {
        handleNext()
      }, 7000)
    }
  }

  function stopGallery() {
    clearTimeout(galleryTimeout)
    setIsPlaying(false)
  }

  function handlePrev() {
    return currentIndex === 0
      ? setCurrentIndex(data.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  function handleNext() {
    return currentIndex === data.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }
  return (
    <>
      <div className="intro-gallery-mobile">
        <MobileCarousel data={data} />
      </div>

      <div className="intro-gallery">
        <div className="intro-gallery__progress-bar--wrapper">
          <ProgressBar />
        </div>
        <div className="intro-gallery__logo">
          <span>Алексей Горбунов</span>
        </div>
        <div className="intro-gallery__contacts">
          <div className="intro-gallery__phone">
            T:
            <a href="tel:+79166228889" title="позвонить">
              +7 916 622 88 89
            </a>
          </div>
          <div className="intro-gallery__email">
            E:
            <a href="mailto:alex.gorbunov@gmail.com" title="написать">
              alex.gorbunov@gmail.com
            </a>
          </div>
        </div>
        <div className="intro-gallery__manifest">
          VERY BERRY EVENT – живой механизм со своей душой, который составляют
          специалисты различных профилей, обладающие талантом создания красоты,
          радости и настоящего фейерверка эмоций для любого события вашей жизни.
        </div>

        <TransitionGroup className="intro-gallery__images">
          <CSSTransition
            key={`image-${currentIndex}`}
            timeout={2000}
            classNames="fade"
          >
            <Image image={data[currentIndex].image} />
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup className="intro-gallery__titles">
          <CSSTransition
            timeout={2000}
            classNames="slide"
            key={`title-${currentIndex}`}
          >
            <div className="intro-gallery__title">
              <h2>{data[currentIndex].title}</h2>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup className="intro-gallery__subtitles">
          <CSSTransition
            key={`subtitle-${currentIndex}`}
            timeout={2000}
            classNames="slide"
          >
            <div className="intro-gallery__subtitle">
              <h4>{data[currentIndex].subtitle}</h4>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <div className="intro-gallery__links">
          <CustomLink
            color={"white"}
            to="/weddings"
            title="Свадьбы"
            text="Свадьбы"
          />
          <CustomLink
            color={"white"}
            to="/corporates"
            title="Корпоративы"
            text="Корпоративы"
          />
          <CustomLink
            color={"white"}
            to="/children"
            title="Детские праздники"
            text="Детские праздники"
          />
          <CustomLink
            color={"white"}
            to="/responses"
            title="Отзывы"
            text="Отзывы"
          />
          <CustomLink
            color={"white"}
            to="/contacts"
            title="Контакты"
            text="Контакты"
          />
        </div>
      </div>
    </>
  )
}

export default IntroGallery
