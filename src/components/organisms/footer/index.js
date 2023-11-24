import React from "react"
import * as styles from "./styles.module.scss"
import { Anchor, Container, Heading, Logo, Text } from "@components/atoms"
import classNames from "classnames"
import Spacer from "@components/atoms/spacer"
import Banner from "@components/molecules/banner"
import { Link } from "gatsby"
import { useSiteMetadata } from "@lib/hooks/useSiteData"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"
import Social from "@components/atoms/social"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const FooterNav = ({ children, ...props }) => {
  const siteData = useSiteMetadata()

  return (
    <div className={styles.footerNav}>
      <div>
        <div className={styles.footerNavTitle}>
          <Text color="grey" weight="600">
            Get in touch
          </Text>
        </div>
        <nav className={styles.footerNavi}>
          {siteData?.address && (
            <div className={styles.footerNavItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none">
                <path
                  d="M4 4.625C4 4.84375 4.15625 5 4.375 5H5.625C5.8125 5 6 4.84375 6 4.625V3.375C6 3.1875 5.8125 3 5.625 3H4.375C4.15625 3 4 3.1875 4 3.375V4.625ZM8.375 5H9.625C9.8125 5 10 4.84375 10 4.625V3.375C10 3.1875 9.8125 3 9.625 3H8.375C8.15625 3 8 3.1875 8 3.375V4.625C8 4.84375 8.15625 5 8.375 5ZM4.375 8H5.625C5.8125 8 6 7.84375 6 7.625V6.375C6 6.1875 5.8125 6 5.625 6H4.375C4.15625 6 4 6.1875 4 6.375V7.625C4 7.84375 4.15625 8 4.375 8ZM8.375 8H9.625C9.8125 8 10 7.84375 10 7.625V6.375C10 6.1875 9.8125 6 9.625 6H8.375C8.15625 6 8 6.1875 8 6.375V7.625C8 7.84375 8.15625 8 8.375 8ZM6 10.625V9.375C6 9.1875 5.8125 9 5.625 9H4.375C4.15625 9 4 9.1875 4 9.375V10.625C4 10.8438 4.15625 11 4.375 11H5.625C5.8125 11 6 10.8438 6 10.625ZM8.375 11H9.625C9.8125 11 10 10.8438 10 10.625V9.375C10 9.1875 9.8125 9 9.625 9H8.375C8.15625 9 8 9.1875 8 9.375V10.625C8 10.8438 8.15625 11 8.375 11ZM14 14.875C14 14.6875 13.8125 14.5 13.625 14.5H13V0.75C13 0.34375 12.6562 0 12.25 0H1.71875C1.3125 0 0.96875 0.34375 0.96875 0.75V14.5H0.375C0.15625 14.5 0 14.6875 0 14.875V16H14V14.875ZM2.46875 14.4688L2.5 1.5L11.5 1.53125V14.4688H8V12.375C8 12.1875 7.8125 12 7.625 12H6.375C6.15625 12 6 12.1875 6 12.375V14.4688H2.46875Z"
                  fill="#666666"
                />
              </svg>
              <span>
                <PRichText field={siteData.address.richText} />
              </span>
            </div>
          )}

          {siteData?.email && (
            <Anchor href={`#`} className={styles.footerNavItem} underlined>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none">
                <path
                  d="M14.5 0H1.5C0.65625 0 0 0.6875 0 1.5V10.5C0 11.3438 0.65625 12 1.5 12H14.5C15.3125 12 16 11.3438 16 10.5V1.5C16 0.6875 15.3125 0 14.5 0ZM14.5 1.5V2.78125C13.7812 3.375 12.6562 4.25 10.2812 6.125C9.75 6.53125 8.71875 7.53125 8 7.5C7.25 7.53125 6.21875 6.53125 5.6875 6.125C3.3125 4.25 2.1875 3.375 1.5 2.78125V1.5H14.5ZM1.5 10.5V4.71875C2.1875 5.28125 3.21875 6.09375 4.75 7.3125C5.4375 7.84375 6.65625 9.03125 8 9C9.3125 9.03125 10.5 7.84375 11.2188 7.3125C12.75 6.09375 13.7812 5.28125 14.5 4.71875V10.5H1.5Z"
                  fill="#666666"
                />
              </svg>
              <span>{siteData.email}</span>
            </Anchor>
          )}

          {siteData?.phone_number && (
            <Anchor
              href={`tel:${siteData?.phone_number}`}
              className={styles.footerNavItem}
              underlined>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none">
                <path
                  d="M15.875 1.71875L12.9375 1.0625C12.25 0.90625 11.5625 1.25 11.3125 1.875L9.9375 5.0625C9.6875 5.625 9.84375 6.3125 10.3438 6.71875L11.5938 7.75C10.7188 9.375 9.34375 10.7188 7.71875 11.625L6.6875 10.375C6.28125 9.875 5.59375 9.71875 5.03125 9.96875L1.84375 11.3125C1.21875 11.5938 0.875 12.2812 1.03125 12.9688L1.6875 15.9062C1.84375 16.5625 2.4375 17 3.09375 17C10.75 17 17 10.8125 17 3.125C17 2.46875 16.5312 1.875 15.875 1.71875ZM3.15625 15.5L2.5 12.6875L5.5625 11.375L7.3125 13.5C10.4062 12.0312 12 10.4375 13.4688 7.34375L11.3438 5.59375L12.6562 2.53125L15.5 3.1875C15.4688 9.96875 9.9375 15.4688 3.15625 15.5Z"
                  fill="#666666"
                />
              </svg>
              <span>{siteData?.phone_number}</span>
            </Anchor>
          )}
        </nav>
      </div>
      <div>
        <div className={styles.footerNavTitle}>
          <Text color="grey" weight="600">
            Explore
          </Text>
        </div>
        {siteData?.footer_navigation && (
          <nav className={styles.footerNavi}>
            {siteData?.footer_navigation?.map(({ nav_link, nav_text }, key) => {
              const Component = ({ children, ...props }) => (
                <Anchor className={styles.footerNavItem} {...props}>
                  {children}
                </Anchor>
              )
              return (
                <PrismicLink
                  field={nav_link}
                  externalComponent={Component}
                  internalComponent={Component}>
                  <span>{nav_text}</span>
                </PrismicLink>
              )
            })}
          </nav>
        )}
      </div>
    </div>
  )
}

export const Footer = ({ children, ...props }) => {
  const siteData = useSiteMetadata()
  return (
    <footer className={classNames(styles.footer)} {...props}>
      <Spacer y="md">
        <Container size="lg">
          <div className={styles.inner}>
            <div className={styles.logoWrap}>
              <Link to="/">
                <Logo variant="" />
              </Link>
              {siteData?.certifications && (
                <div className={styles.isoImage}>
                  {siteData?.certifications.map(({ image, link }, key) => {
                    if (!image?.localFile) {
                      return <></>
                    }

                    return (
                      <PrismicLink field={link}>
                        <GatsbyImage
                          objectFit="contain"
                          alt={image.alt}
                          image={getImage(image.localFile)}
                        />
                      </PrismicLink>
                    )
                  })}
                </div>
              )}
            </div>
            <div className={styles.nav}>
              <FooterNav />
            </div>
            <div className={styles.cta}>
              <Banner isMini>
                <Heading variant="h6" color="white">
                  Find out more about Loxone at:
                </Heading>
                <Spacer y="xs" />
                <Heading variant="h6" color="white">
                  <Anchor
                    target="_blank"
                    href="https://loxone.com"
                    isLight
                    underlined>
                    loxone.com
                  </Anchor>
                </Heading>
              </Banner>
            </div>
          </div>
        </Container>
      </Spacer>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
