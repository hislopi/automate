import React from "react"
import { Hero } from "@components/molecules"
import { Button, ButtonGroup, Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"

export const FullHeroSlice = ({ slice }) => {
  const { primary, items } = slice
  const { hero_title, hero_content, hero_image, spacing } = primary
  return (
    <>
      {spacing && <Spacer y={spacing || "lg"} type="margin" topOnly />}
      <Hero bgImage={hero_image}>
        <Prose>
          <PRichText field={hero_title.richText} />
          <PRichText field={hero_content.richText} />

          <ButtonGroup>
            {items?.map(({ button_text, button_link }, key) => {
              return (
                <PrismicLink
                  key={key}
                  field={button_link}
                  internalComponent={Button}
                  externalComponent={Button}>
                  {button_text}
                </PrismicLink>
              )
            })}
          </ButtonGroup>
        </Prose>
      </Hero>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyFullHero on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyFullHero {
      primary {
        spacing
        hero_content {
          richText
        }
        hero_title {
          richText
        }
        hero_image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
      items {
        button_text
        button_link {
          url
          link_type
          type
        }
      }
    }

    ... on PrismicPageDataBodyFullHero {
      primary {
        spacing
        hero_content {
          richText
        }
        hero_title {
          richText
        }
        hero_image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
      items {
        button_text
        button_link {
          url
          link_type
          type
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyFullHero {
      primary {
        spacing
        hero_content {
          richText
        }
        hero_title {
          richText
        }
        hero_image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
      items {
        button_text
        button_link {
          url
          link_type
          type
        }
      }
    }
  }
`

export default FullHeroSlice
