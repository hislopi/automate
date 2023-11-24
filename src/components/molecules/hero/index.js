import React from "react"
import cn from "classnames"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

export const Hero = ({ bgImageUrl, bgImage, children, ...props }) => {
  const bgImageConvert =
    bgImage && convertToBgImage(getImage(bgImage.localFile))
  return (
    <>
      <div className={cn(styles.hero)}>
        {(bgImageUrl || bgImage) && (
          <div className={styles.bgImage}>
            {bgImage && (
              <BackgroundImage alt={bgImage.alt} {...bgImageConvert} />
            )}
            {bgImageUrl && (
              <>
                <img className={styles.bgImageImg} src={bgImageUrl} alt="" />
                <Helmet>
                  <link rel="preload" href={bgImageUrl} as="image" />
                </Helmet>
              </>
            )}
          </div>
        )}
        <Container size="lg" className={styles.heroContent}>
          {children}
        </Container>
      </div>
    </>
  )
}

Hero.propTypes = {}

export default Hero
