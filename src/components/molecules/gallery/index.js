import React from "react"
import * as styles from "./styles.module.scss"
import { Arrows, Container, Heading, Prose } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import classNames from "classnames"
import { Navigation } from "swiper"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PRichText } from "@lib/richtext"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { FadeInSAL } from "@components/utils/animate"

export const Gallery = ({ hasDarkBackground, children, ...props }) => {
  return (
    <div className={classNames(styles.gallery)} {...props} {...FadeInSAL}>
      <Spacer type="padding" y="lg">
        {children}
      </Spacer>
    </div>
  )
}

const Slider = ({ slides }) => {
  return (
    <div className={classNames(styles.slider)}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.swiperPrev}`,
          nextEl: `.${styles.swiperNext}`,
        }}
        breakpoints={{
          660: {
            slidesPerView: "auto",
          },
        }}>
        {slides &&
          slides.map(({ image, caption, title }) => {
            const imageConvert =
              image && convertToBgImage(getImage(image.localFile))
            return (
              <SwiperSlide className={styles.slide}>
                <BackgroundImage
                  alt={image.alt}
                  {...imageConvert}
                  className={styles.gImage}
                />
                <div className={styles.content}>
                  <div className={styles.titleWrap}>
                    <Heading
                      variant="h4"
                      node="h4"
                      weight="bold"
                      className={styles.title}>
                      {title}
                    </Heading>
                  </div>
                  <div className={styles.caption}>
                    <PRichText field={caption.richText} />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}

        <Arrows direction="left" className={styles.swiperPrev} />
        <Arrows direction="right" className={styles.swiperNext} />
      </Swiper>
    </div>
  )
}

const Content = ({ children }) => {
  return (
    <Container size="md">
      <div className={styles.content}>
        <Spacer y="sm">{children}</Spacer>
      </div>
    </Container>
  )
}

Gallery.Slider = Slider
Gallery.Content = Content

export default Gallery
