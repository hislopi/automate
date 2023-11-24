import React from "react"
import { Button, ButtonGroup, Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { MediaBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"

export const ImageBlockSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image, spacing } = primary

  if (!image) {
    return <></>
  }

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <MediaBlock>
        {content && (
          <MediaBlock.Content>
            <Prose align="center">
              {content && <PRichText field={content.richText} />}
            </Prose>
          </MediaBlock.Content>
        )}

        <MediaBlock.Image image={image} />

        {items && (
          <MediaBlock.Content>
            <Prose align="center">
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
            </Prose>
          </MediaBlock.Content>
        )}
      </MediaBlock>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyImageBlock on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyImageBlock {
      primary {
        spacing
        content {
          richText
        }
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
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

    ... on PrismicPageDataBodyImageBlock {
      primary {
        spacing
        content {
          richText
        }
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
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
    ... on PrismicCaseStudiesDataBodyImageBlock {
      primary {
        spacing
        content {
          richText
        }
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
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

export default ImageBlockSlice
