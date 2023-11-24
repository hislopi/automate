import React, { useState } from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { FadeInSAL } from "@components/utils/animate"

export const MediaBlock = ({ children, ...props }) => {
  return (
    <div className={classNames(styles.mediaBlock)} {...props} {...FadeInSAL}>
      <Container size="md">{children}</Container>
    </div>
  )
}

const Content = ({ children, ...props }) => {
  return <div className={classNames(styles.content)}>{children}</div>
}

const Image = ({ imageUrl, image, ...props }) => {
  return (
    <>
      {(imageUrl || image) && (
        <>
          <div className={styles.image}>
            {image && (
              <GatsbyImage
                objectFit="cover"
                objectPosition="center"
                alt={image.alt}
                image={getImage(image.localFile)}
              />
            )}
            {imageUrl && (
              <img className={styles.imageImg} src={imageUrl} alt="" />
            )}
          </div>
          <Spacer y="sm" />
        </>
      )}
    </>
  )
}

Image.propTypes = {
  imageUrl: PropTypes.string,
  image: PropTypes.object,
}

const Video = ({ imageUrl, image, videoEmbed, ...props }) => {
  const [isActive, setIsActive] = useState(false)

  if (!videoEmbed) {
    return <></>
  }

  return (
    <>
      <div className={styles.videoCon}>
        {!isActive && (
          <div className={styles.videoImage} onClick={() => setIsActive(true)}>
            <Image image={image} imageUrl={imageUrl} />
            <i className={styles.videoIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="49"
                viewBox="0 0 42 49"
                fill="none">
                <path
                  d="M39.75 20.1132L6.75 0.613178C4.03125 -0.980572 0 0.613177 0 4.45693V43.4569C0 47.0194 3.75 49.1757 6.75 47.3944L39.75 27.8944C42.6562 26.1132 42.6562 21.8944 39.75 20.1132Z"
                  fill="white"
                />
              </svg>
            </i>
          </div>
        )}
        {isActive && (
          <div
            className={styles.iframeCon}
            dangerouslySetInnerHTML={{ __html: videoEmbed.html }}></div>
        )}
      </div>
      <Spacer y="sm" />
    </>
  )
}

Video.propTypes = {
  imageUrl: PropTypes.string,
  image: PropTypes.object,
  video_embed: PropTypes.shape({
    title: PropTypes.string,
    html: PropTypes.string,
  }),
}

MediaBlock.Content = Content
MediaBlock.Image = Image
MediaBlock.Video = Video

export default MediaBlock
