import React from "react"
import * as styles from "./styles.module.scss"
import classNames from "classnames"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import { FadeInSAL } from "@components/utils/animate"

export const GridCard = ({ cardImage, children, ...props }) => {
  const image = getImage(cardImage.localFile)

  // Use like this:
  const bgImage = image && convertToBgImage(image)
  return (
    <BackgroundImage
      className={classNames(styles.card)}
      {...props}
      {...bgImage}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
    </BackgroundImage>
  )
}

export const GridCards = ({ children }) => {
  return (
    <div className={classNames(styles.cards)} {...FadeInSAL}>
      {children}
    </div>
  )
}
