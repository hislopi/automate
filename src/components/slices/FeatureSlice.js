import React from "react"
import { Feature } from "@components/molecules"
import { Button, ButtonGroup, Prose, Spacer } from "@components/atoms"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"

export const FeatureSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image, is_image_right, spacing } = primary

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <Feature isImageRight={is_image_right}>
        {image && (
          <Feature.Asset>
            <GatsbyImage alt={image.alt} image={getImage(image.localFile)} />
          </Feature.Asset>
        )}
        <Feature.Content>
          <Prose>
            {content && <PRichText field={content.richText} />}
            {items && (
              <ButtonGroup>
                {items?.map(({ button_text, button_link, colour }, key) => {
                  return (
                    <PrismicLink
                      key={key}
                      field={button_link}
                      internalComponent={props => (
                        <Button color={colour} {...props} />
                      )}
                      externalComponent={props => (
                        <Button color={colour} {...props} />
                      )}>
                      {button_text}
                    </PrismicLink>
                  )
                })}
              </ButtonGroup>
            )}
          </Prose>
        </Feature.Content>
      </Feature>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyFeature on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyFeature {
      primary {
        spacing
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        content {
          richText
        }
        is_image_right
      }
      items {
        button_link {
          url
          target
          link_type
        }
        colour
        button_text
      }
    }

    ... on PrismicPageDataBodyFeature {
      primary {
        spacing
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        content {
          richText
        }
        is_image_right
      }
      items {
        button_link {
          url
          target
          link_type
        }
        colour
        button_text
      }
    }
    ... on PrismicCaseStudiesDataBodyFeature {
      primary {
        spacing
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        content {
          richText
        }
        is_image_right
      }
      items {
        button_link {
          url
          target
          link_type
        }
        colour
        button_text
      }
    }
  }
`

export default FeatureSlice
