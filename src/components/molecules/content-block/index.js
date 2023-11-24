import React from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"
import PropTypes from "prop-types"
import { FadeInSAL } from "@components/utils/animate"

export const ContentBlock = ({ isMini, hasBG, children, ...props }) => {
  return (
    <div className={classNames(styles.contentBlock)} {...props} {...FadeInSAL}>
      {hasBG && (
        <div className={styles.bg}>
          <StaticImage
            src="./simple-block-bg.jpg"
            alt=""
            objectFit="cover"
            objectPosition="center"
            width="1290"
            height="359"
          />
        </div>
      )}
      <Container size="lg" style={{ position: "relative" }}>
        <Spacer y={hasBG ? (isMini ? "md" : "xl") : ""}>
          <Container size="md">
            <div className={classNames(styles.inner)}>{children}</div>
          </Container>
        </Spacer>
      </Container>
    </div>
  )
}

ContentBlock.propTypes = {
  isMini: PropTypes.bool,
}

export default ContentBlock
