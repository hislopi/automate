import React from "react"
import { Button, ButtonGroup, Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { MediaBlock } from "@components/molecules"
import { PrismicLink } from "@prismicio/react"
import { graphql } from "gatsby"

export const VideoBlockSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, image, video_embed, spacing } = primary

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

        <MediaBlock.Video image={image} videoEmbed={video_embed} />

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
  fragment PageDataBodyVideoBlock on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyVideoBlock {
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
        video_embed {
          title
          html
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

    ... on PrismicPageDataBodyVideoBlock {
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
        video_embed {
          title
          html
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
    ... on PrismicCaseStudiesDataBodyVideoBlock {
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
        video_embed {
          title
          html
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

export default VideoBlockSlice
