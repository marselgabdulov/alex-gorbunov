import React from "react"
import "./BackgroundVideo.scss"
import VideoMP4 from "../../video/video-bg.mp4"
import VideoWEBM from "../../video/video-bg.webm"
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
      <div className="background-video">
        <div className="background-video__cover-layer"></div>
        <video loop autoPlay muted ref="vidRef">
          <source type="video/webm" src={VideoWEBM} />
          <source type="video/mp4" src={VideoMP4} />
        </video>
        <button
          className="video-control"
          onClick={event => this.handlePlayingState(event)}
        >
          {this.state.isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    )
  }
}

export default BackgroundVideo
