import React from "react"
import { Feature } from "@components/molecules"
import {
  Button,
  ButtonGroup,
  Heading,
  Prose,
  Spacer,
  Text,
} from "@components/atoms"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"

export const FeatureSliderSlice = ({ slice }) => {
  const { primary, items } = slice
  const {
    content,
    label,
    is_image_right,
    button_text,
    button_link,
    dark_background,
    spacing,
  } = primary

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <Feature
        isImageRight={is_image_right}
        hasDarkBackground={dark_background}>
        {items && <Feature.Slider slides={items} />}
        <Feature.Content>
          <Prose>
            {label && (
              <Heading color="green" node="h6" weight="100" variant="h6">
                {label}
              </Heading>
            )}
            {content && <PRichText field={content.richText} />}
            {button_text && button_link && (
              <ButtonGroup>
                <PrismicLink
                  field={button_link}
                  internalComponent={props => <Button {...props} />}
                  externalComponent={props => <Button {...props} />}>
                  {button_text}
                </PrismicLink>
              </ButtonGroup>
            )}
          </Prose>
        </Feature.Content>
      </Feature>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyFeatureSlider on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyFeatureSlider {
      primary {
        spacing
        content {
          richText
        }
        is_image_right
        button_link {
          url
          target
          link_type
        }
        button_text
        dark_background
        label
      }
      items {
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        title
      }
    }

    ... on PrismicPageDataBodyFeatureSlider {
      primary {
        spacing
        content {
          richText
        }
        is_image_right
        button_link {
          url
          target
          link_type
        }
        button_text
        dark_background
        label
      }
      items {
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        title
      }
    }
    ... on PrismicCaseStudiesDataBodyFeatureSlider {
      primary {
        spacing
        content {
          richText
        }
        is_image_right
        button_link {
          url
          target
          link_type
        }
        button_text
        dark_background
        label
      }
      items {
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        title
      }
    }
  }
`

export default FeatureSliderSlice
