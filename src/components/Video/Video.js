import React from "react"
import Image from "../Image/Image"
import ReactPlayer from "react-player"
import ArrowIcon from "../../images/icons/play-button.svg"
import Cross from "../../images/icons/cross.svg"
import "./Video.scss"

class Video extends React.Component {
  state = {
    visible: false,
    playing: false,
    muted: false,
  }

  render() {
    return (
      <div className="video-cover">
        <div className="cover__wrapper">
          <Image image={this.props.cover} />
        </div>
        <div
          className="cover__button"
          onClick={() => {
            this.setState({ visible: true, playing: true, muted: false })
          }}
        >
          <ArrowIcon />
        </div>
        <div className="video-name">Relieve Your Stress</div>
        <div
          className={
            this.state.visible ? "video__full--visible" : "video-full--hidden"
          }
        >
          <div
            className="close-full"
            onClick={() => {
              this.setState({ visible: false, playing: false, muted: true })
            }}
          >
            <Cross />
          </div>
          <div className="full__wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=tNs3exn6PKk"
              width="100%"
              height="100%"
              playing={this.state.playing}
              muted={this.state.muted}
              controls={true}
              volume="0.5"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Video
