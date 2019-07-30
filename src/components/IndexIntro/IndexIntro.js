import React from "react"
import "./IndexIntro.scss"
import { Link } from "gatsby"
import Image from "../Image/Image"
import Arrow from "../../images/icons/play-button.svg"
import CustomLink from "../CustomLink/CustomLink"

class IndexIntro extends React.Component {
  state = {
    currentIndex: 0,
    modalIsVisible: false,
  }

  handleCurrentIndex = index => {
    this.setState({ currentIndex: index })
  }

  handleNext = () => {
    const current = this.state.currentIndex
    const length = this.props.data.length
    if (current === length - 1) {
      this.setState({ currentIndex: 0 })
    } else {
      this.setState({ currentIndex: current + 1 })
    }
  }

  handlePrev = () => {
    const current = this.state.currentIndex
    const length = this.props.data.length
    if (current === 0) {
      this.setState({ currentIndex: length - 1 })
    } else {
      this.setState({ currentIndex: current - 1 })
    }
  }

  render() {
    const data = this.props.data
    const otherImages = this.props.otherImages
    const { currentIndex, modalIsVisible } = this.state
    return (
      <section className="index-intro">
        <div className={modalIsVisible ? "index-modal" : "index-modal--hidden"}>
          <div className="index-modal__main">
            <div
              className="index-modal__close"
              onClick={() => this.setState({ modalIsVisible: false })}
            >
              закрыть
            </div>
            <div className="index-modal__links">
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={data[0].image} />
                  </div>
                </div>
                <Link to="/">Свадьбы</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={data[1].image} />
                  </div>
                </div>
                <Link to="/">Корпоративы</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={data[2].image} />
                  </div>
                </div>
                <Link to="/">Детские праздники</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={data[3].image} />
                  </div>
                </div>
                <Link to="/">Частные праздники</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={otherImages[0]} />
                  </div>
                </div>
                <Link to="/">Дни рождения</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={otherImages[1]} />
                  </div>
                </div>
                <Link to="/">Городские праздники</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={otherImages[2]} />
                  </div>
                </div>
                <Link to="/">Промоакции</Link>
              </div>
              <div className="index-modal__link">
                <div className="modal-link__bg--wrapper">
                  <div className="modal-link__bg">
                    <Image image={otherImages[3]} />
                  </div>
                </div>
                <Link to="/">Другое</Link>
              </div>
            </div>
          </div>
          <div
            className="index-modal__sider"
            onClick={() => this.setState({ modalIsVisible: false })}
          ></div>
        </div>
        <div className="index-intro__title">
          <h2>{data[currentIndex].subtitle}</h2>
        </div>

        <div className="index-intro__link">
          <CustomLink
            color={"#e82a6e"}
            to={data[currentIndex].link.to}
            text="Подробнее"
          />
        </div>
        <div className="index-intro__current-image">
          <Image image={data[currentIndex].image} />
        </div>

        <div className="index-intro__gallery-control">
          <div className="prev" onClick={this.handlePrev}>
            <Arrow />
          </div>
          <div className="next" onClick={this.handleNext}>
            <Arrow />
          </div>
        </div>

        <div className="index-intro__gallery">
          {data.map((dataItem, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "index-intro__gallery-item--active"
                  : "index-intro__gallery-item"
              }
              onClick={() => this.handleCurrentIndex(index)}
            >
              <div className="item__title">
                <span>{dataItem.title.split(" ")[0]}</span>
              </div>
              <div className="item__image">
                <Image image={dataItem.image} />
              </div>
            </div>
          ))}
          <div
            className="index-intro__see-all"
            onClick={() => this.setState({ modalIsVisible: true })}
          >
            всё
          </div>
        </div>
      </section>
    )
  }
}

export default IndexIntro
