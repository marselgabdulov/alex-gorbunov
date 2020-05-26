import React from "react"
import "./BackgroundVideoMobile.scss"
import VideoMP4 from "../../video/video-mobile.mp4"
import VideoWEBM from "../../video/video-mobile.webm"

class BackgroundVideoMobile extends React.Component {
  state = {
    isPlaying: false,
  }

  componentDidMount() {
    this.setState({ isPlaying: true })
  }

  render() {
    return (
      <div
        className="background-video-mobile"
        data-aos="fade"
        data-aos-delay="1100"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <video loop autoPlay muted ref="vidRef">
          <source type="video/webm" src={VideoWEBM} />
          <source type="video/mp4" src={VideoMP4} />
        </video>
      </div>
    )
  }
}

export default BackgroundVideoMobile
