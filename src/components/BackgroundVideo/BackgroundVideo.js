import React from "react"
import "./BackgroundVideo.scss"
import VideoMP4 from "../../video/video-bg2.mp4"
import VideoWEBM from "../../video/video-bg2.webm"
import Play from "../../images/icons/play.svg"
import Pause from "../../images/icons/pause.svg"

class BackgroundVideo extends React.Component {
  state = {
    isPlaying: false,
  }

  componentDidMount() {
    this.setState({ isPlaying: true })
  }

  handlePlayingState = event => {
    event.preventDefault()
    this.state.isPlaying
      ? this.setState({ isPlaying: false })
      : this.setState({ isPlaying: true })
    this.handlePause()
  }

  handlePause() {
    this.state.isPlaying ? this.refs.vidRef.pause() : this.refs.vidRef.play()
  }

  render() {
    return (
      <div
        className="background-video"
        data-aos="fade"
        data-aos-delay="1100"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <video loop autoPlay muted ref="vidRef">
          <source type="video/webm" src={VideoWEBM} />
          <source type="video/mp4" src={VideoMP4} />
        </video>
        <button
          className="video-control"
          onClick={event => this.handlePlayingState(event)}
          data-aos="fade"
          data-aos-delay="1000"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          {this.state.isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    )
  }
}

export default BackgroundVideo
