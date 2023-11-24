import React, { useEffect, useState } from "react"
import * as styles from "./styles.module.scss"
import { globalHistory } from "@gatsbyjs/reach-router"
import {
  Anchor,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Logo,
} from "@components/atoms"
import classNames from "classnames"
import Spacer from "@components/atoms/spacer"
import { Link } from "gatsby"
import { useShortHead } from "@lib/hooks/useShortHead"
import { PrismicLink } from "@prismicio/react"
import { useSiteMetadata } from "@lib/hooks/useSiteData"
import InlineLogo from "@components/atoms/inline-logo"
import { slide as Menu } from "react-burger-menu"
import { useSmallScreen } from "@lib/hooks/useSmallScreen"
import Social from "@components/atoms/social"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Cta = ({ link, text, className, ...props }) => {
  const Component = ({ children, ...props }) => (
    <Button {...props}>{children}</Button>
  )
  return (
    <PrismicLink
      field={link}
      externalComponent={Component}
      internalComponent={Component}
      className={className}
      {...props}>
      <span>{text}</span>
    </PrismicLink>
  )
}

const burgerStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmCrossButton: {
    width: "36px",
    height: "36px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
  },
  bmMenu: {
    background: "var(--color-brand-white)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: 0,
    left: 0,
  },
}

const LinkComponent = ({ children, href, ...props }) => {
  return (
    <Anchor className={styles.navItem} to={href} {...props}>
      {children}
    </Anchor>
  )
}

const MenuNavDropdown = ({ children, active }) => {
  return (
    <div
      className={classNames(styles.navDropdown, {
        [styles.active]: active,
      })}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}

const FeatureDropdown = ({ links }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={classNames(styles.navItemWrap)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      <Anchor
        className={styles.navItem}
        href="#"
        onClick={e => e.preventDefault()}>
        <span>Features</span>
      </Anchor>
      <MenuNavDropdown active={isActive}>
        {links.map(({ nav_link, nav_text }, key) => {
          return (
            <PrismicLink
              field={nav_link}
              externalComponent={LinkComponent}
              internalComponent={LinkComponent}>
              <span>{nav_text}</span>
            </PrismicLink>
          )
        })}
      </MenuNavDropdown>
    </div>
  )
}

export const Header = ({ children, hasHero, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const siteData = useSiteMetadata()
  const isShort = useShortHead()
  const isSmallScreen = useSmallScreen()

  useEffect(() => {
    const unListen = globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        setIsOpen(false)
      }
    })

    return () => {
      unListen()
    }
  }, [])

  useEffect(() => {
    if (isShort) {
      document.body.classList.add("short-head")
    } else {
      document.body.classList.remove("short-head")
    }
  }, [isShort])

  return (
    <>
      {isSmallScreen && (
        <Menu
          isOpen={isOpen}
          right
          customBurgerIcon={false}
          customCrossIcon={
            <div className={styles.closeBtn}>
              <i></i>
              <i></i>
            </div>
          }
          styles={burgerStyles}
          onClose={() => setIsOpen(false)}
          itemListClassName={styles.mobileMenuNav}>
          {siteData?.feature_dropdown_links && (
            <>
              <Anchor
                className={styles.navItem}
                href="#"
                onClick={e => e.preventDefault()}>
                <span>Features</span>
              </Anchor>
              <div className={styles.mobileMenuNavSub}>
                {siteData?.feature_dropdown_links.map(
                  ({ nav_link, nav_text }, key) => {
                    return (
                      <PrismicLink
                        field={nav_link}
                        externalComponent={LinkComponent}
                        internalComponent={LinkComponent}>
                        <span>{nav_text}</span>
                      </PrismicLink>
                    )
                  }
                )}
              </div>
            </>
          )}
          {siteData?.navigation?.map(({ nav_link, nav_text }, key) => {
            return (
              <PrismicLink
                field={nav_link}
                externalComponent={LinkComponent}
                internalComponent={LinkComponent}>
                <span>{nav_text}</span>
              </PrismicLink>
            )
          })}

          {siteData?.cta_text && (
            <>
              <Spacer y="xs" />
              <Cta
                text={siteData.cta_text}
                link={siteData.cta_link}
                className={styles.ctaBtn}
                onClick={() => setIsOpen(false)}
              />
            </>
          )}

          <Spacer isHR isHRGreen={false} y="xs" />

          <div className={styles.socialMobile}>
            <Heading color="black" weight="100" node="div" variant="h6">
              Follow us:
            </Heading>
            <Social baseColors={false} />
          </div>

          {siteData?.certifications && (
            <div>
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
            </div>
          )}
        </Menu>
      )}
      <header
        className={classNames(
          styles.header,
          isShort && styles.short,
          hasHero && styles.hasHero
        )}
        {...props}>
        <Container size="none" padding="xs">
          <div className={styles.inner}>
            <Link to="/" className={styles.logoWrap}>
              <Logo
                variant={isShort ? "small" : "large"}
                className={styles.logo}
              />
              <InlineLogo className={styles.inlineLogo} />
            </Link>

            <div className={styles.navCtaCol}>
              <div className={styles.navCtaWrap}>
                <div className={styles.navCol}>
                  <Spacer y="sm">
                    <nav className={styles.nav}>
                      {siteData?.feature_dropdown_links && (
                        <FeatureDropdown
                          links={siteData?.feature_dropdown_links}
                        />
                      )}
                      {siteData?.navigation?.map(
                        ({ nav_link, nav_text }, key) => {
                          return (
                            <PrismicLink
                              field={nav_link}
                              externalComponent={LinkComponent}
                              internalComponent={LinkComponent}>
                              <span>{nav_text}</span>
                            </PrismicLink>
                          )
                        }
                      )}
                    </nav>
                  </Spacer>
                </div>

                <div className={styles.buttons}>
                  <div className={styles.social}>
                    <Social baseColors={false} />
                  </div>
                  <div className={styles.sep} />
                  <ButtonGroup>
                    {siteData.phone_number && (
                      <Button
                        variant="text"
                        color="inherit"
                        to={`tel:${siteData.phone_number}`}
                        className={styles.phoneNumberBtn}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none">
                          <path
                            d="M16.4062 1.78125L13.1562 1.03125C12.8125 0.9375 12.4375 1.125 12.2812 1.46875L10.7812 4.96875C10.6562 5.28125 10.75 5.625 11 5.84375L12.9062 7.40625C11.7812 9.78125 9.8125 11.7812 7.375 12.9375L5.8125 11.0312C5.59375 10.7812 5.25 10.6875 4.9375 10.8125L1.4375 12.3125C1.09375 12.4688 0.9375 12.8438 1 13.1875L1.75 16.4375C1.84375 16.7812 2.125 17 2.5 17C10.5 17 17 10.5312 17 2.5C17 2.15625 16.75 1.875 16.4062 1.78125Z"
                            fill="#69C350"
                          />
                        </svg>{" "}
                        <span>{siteData.phone_number}</span>
                      </Button>
                    )}
                    <Button
                      variant="text"
                      color="inherit"
                      to={`/contact`}
                      className={styles.mailBtn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none">
                        <path
                          d="M15.6875 4.46875C14.9688 5.03125 14.0625 5.71875 10.875 8.03125C10.25 8.5 9.09375 9.53125 8 9.53125C6.875 9.53125 5.75 8.5 5.09375 8.03125C1.90625 5.71875 1 5.03125 0.28125 4.46875C0.15625 4.375 0 4.46875 0 4.625V11C0 11.8438 0.65625 12.5 1.5 12.5H14.5C15.3125 12.5 16 11.8438 16 11V4.625C16 4.46875 15.8125 4.375 15.6875 4.46875ZM8 8.5C8.71875 8.53125 9.75 7.59375 10.2812 7.21875C14.4375 4.21875 14.75 3.9375 15.6875 3.1875C15.875 3.0625 16 2.84375 16 2.59375V2C16 1.1875 15.3125 0.5 14.5 0.5H1.5C0.65625 0.5 0 1.1875 0 2V2.59375C0 2.84375 0.09375 3.0625 0.28125 3.1875C1.21875 3.9375 1.53125 4.21875 5.6875 7.21875C6.21875 7.59375 7.25 8.53125 8 8.5Z"
                          fill="#69C350"
                        />
                      </svg>
                    </Button>

                    {siteData?.cta_text && (
                      <Cta
                        text={siteData.cta_text}
                        link={siteData.cta_link}
                        className={styles.ctaBtn}
                      />
                    )}

                    <div
                      className={styles.mobileMenu}
                      onClick={() => setIsOpen(true)}>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}

Header.propTypes = {}

export default Header
