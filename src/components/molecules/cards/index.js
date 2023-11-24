import React from "react"
import * as styles from "./styles.module.scss"
import classNames from "classnames"
import Link from "@components/atoms/Link"
import { FadeInSAL } from "@components/utils/animate"

export const Card = ({ hasLink, children, ...props }) => {
  return (
    <div className={classNames(styles.card)} {...props}>
      {children}
    </div>
  )
}

export const Cards = ({ children }) => {
  return (
    <div className={classNames(styles.cards)} {...FadeInSAL}>
      {children}
    </div>
  )
}

const Asset = ({ children }) => {
  return <div className={styles.asset}>{children}</div>
}

const Content = ({ hasLink, children }) => {
  return (
    <div className={classNames(styles.content, hasLink && styles.hasLink)}>
      {children}
      {hasLink && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none">
          <path
            d="M12.0625 0.511719L11.2812 1.29297C11.125 1.48828 11.125 1.76172 11.3203 1.95703L14.4453 4.96484H1.00781C0.734375 4.96484 0.539062 5.19922 0.539062 5.43359V6.52734C0.539062 6.80078 0.734375 6.99609 1.00781 6.99609H14.4453L11.3203 10.043C11.125 10.2383 11.125 10.5117 11.2812 10.707L12.0625 11.4883C12.2578 11.6445 12.5312 11.6445 12.7266 11.4883L17.8828 6.33203C18.0391 6.13672 18.0391 5.86328 17.8828 5.66797L12.7266 0.511719C12.5312 0.355469 12.2578 0.355469 12.0625 0.511719Z"
            fill="#69C350"
          />
        </svg>
      )}
    </div>
  )
}

Card.Asset = Asset
Card.Content = Content
