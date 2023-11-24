import React from "react"
import * as styles from "./styles.module.scss"
import { Arrows, Container, Heading } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import classNames from "classnames"
import { Navigation } from "swiper"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FadeInSAL } from "@components/utils/animate"

export const Feature = ({
  isImageRight = false,
  hasDarkBackground,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.feature, hasDarkBackground && styles.darkBG)}
      {...props}
      {...FadeInSAL}>
      <Spacer type={hasDarkBackground ? "padding" : ""} y="lg">
        <Container size="md">
          <div
            className={classNames(
              styles.featureGrid,
              isImageRight && styles.isRight
            )}>
            {children}
          </div>
        </Container>
      </Spacer>
    </div>
  )
}

const Slider = ({ slides }) => {
  return (
    <div className={classNames(styles.asset, styles.slider)}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.swiperPrev}`,
          nextEl: `.${styles.swiperNext}`,
        }}>
        {slides &&
          slides.map(({ image, title }) => {
            return (
              <SwiperSlide className={styles.slide}>
                <GatsbyImage
                  alt={image.alt}
                  image={getImage(image.localFile)}
                />
                <Heading
                  variant="h6"
                  node="span"
                  color="white"
                  weight="bold"
                  className={styles.title}>
                  {title}
                </Heading>
              </SwiperSlide>
            )
          })}

        <Arrows direction="left" className={styles.swiperPrev} />
        <Arrows direction="right" className={styles.swiperNext} />
      </Swiper>
    </div>
  )
}

const Asset = ({ children }) => {
  return <div className={styles.asset}>{children}</div>
}

const Content = ({ children }) => {
  return (
    <div className={styles.content}>
      <Spacer y="sm">{children}</Spacer>
    </div>
  )
}

Feature.Asset = Asset
Feature.Slider = Slider
Feature.Content = Content

export default Feature
