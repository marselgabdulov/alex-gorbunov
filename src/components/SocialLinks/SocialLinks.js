import React from "react"
import "./SocialLinks.scss"
import Instagram from "../../images/icons/social/instagram.svg"
import Facebook from "../../images/icons/social/facebook.svg"
import Youtube from "../../images/icons/social/youtube.svg"
import Vimeo from "../../images/icons/social/vimeo.svg"
import Vk from "../../images/icons/social/vk.svg"

const SocialLinks = () => (
  <div
    className="social-links"
    data-aos="fade"
    data-aos-delay="100"
    data-aos-duration="1200"
    data-aos-once="true"
  >
    <div className="social-link">
      <a
        href="vk.com"
        title="в контакте"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Vk />
      </a>
    </div>
    <div className="social-link">
      <a
        href="https://www.facebook.com/alex.gorbunov.969"
        title="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
    </div>
    <div className="social-link">
      <a
        href="https://www.instagram.com/"
        title="instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
    </div>
    <div className="social-link">
      <a
        href="https://www.youtube.com/watch?v=xkAQ6bhpwYw"
        title="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube />
      </a>
    </div>
    <div className="social-link">
      <a
        href="https://vimeo.com/"
        title="vimeo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Vimeo />
      </a>
    </div>
  </div>
)

export default SocialLinks
