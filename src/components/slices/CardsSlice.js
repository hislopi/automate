import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Cards, Card } from "@components/molecules/cards"
import {
  Button,
  ButtonGroup,
  Container,
  Prose,
  Spacer,
} from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"

export const CardsSlice = ({ slice }) => {
  const { primary, items } = slice
  const {
    section_title,
    button_text_1,
    button_link_1,
    button_text_2,
    button_link_2,
    spacing,
  } = primary

  const buttons = []

  button_text_1 &&
    buttons.push({
      button_text: button_text_1,
      button_link: button_link_1,
    })

  button_text_2 &&
    buttons.push({
      button_text: button_text_2,
      button_link: button_link_2,
    })

  return (
    <Container>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      {section_title && (
        <div style={{ textAlign: "center" }}>
          <PRichText field={section_title.richText} />
        </div>
      )}

      {items && (
        <>
          <Spacer y="md">
            <Cards>
              {items.map(({ card_content, card_image, link }) => {
                return (
                  <PrismicLink field={link} style={{ textDecoration: "none" }}>
                    <Card>
                      {card_image && (
                        <Card.Asset>
                          <GatsbyImage
                            alt={card_image.alt}
                            image={getImage(card_image.localFile)}
                          />
                        </Card.Asset>
                      )}
                      <Card.Content hasLink={link}>
                        <Prose>
                          {card_content && (
                            <PRichText field={card_content.richText} />
                          )}
                        </Prose>
                      </Card.Content>
                    </Card>
                  </PrismicLink>
                )
              })}
            </Cards>
          </Spacer>
        </>
      )}

      <img src="" alt="" width="100px" />

      <Prose align="center">
        <ButtonGroup>
          {buttons?.map(({ button_text, button_link }, key) => {
            const color = key === 0 ? "green" : "dark-grey"
            return (
              <PrismicLink
                key={key}
                field={button_link}
                internalComponent={props => <Button color={color} {...props} />}
                externalComponent={props => (
                  <Button color={color} {...props} />
                )}>
                {button_text}
              </PrismicLink>
            )
          })}
        </ButtonGroup>
      </Prose>
    </Container>
  )
}

export const query = graphql`
  fragment PageDataBodyCards on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyCards {
      primary {
        spacing
        section_title {
          richText
        }
        button_link_1 {
          url
          target
          link_type
        }
        button_text_1
        button_link_2 {
          url
          target
          link_type
        }
        button_text_2
      }
      items {
        card_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        card_content {
          richText
        }
      }
    }

    ... on PrismicPageDataBodyCards {
      primary {
        spacing
        section_title {
          richText
        }
        button_link_1 {
          url
          target
          link_type
        }
        button_text_1
        button_link_2 {
          url
          target
          link_type
        }
        button_text_2
      }
      items {
        card_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        card_content {
          richText
        }
        link {
          url
          target
          link_type
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyCards {
      primary {
        spacing
        section_title {
          richText
        }
        button_link_1 {
          url
          target
          link_type
        }
        button_text_1
        button_link_2 {
          url
          target
          link_type
        }
        button_text_2
      }
      items {
        card_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        card_content {
          richText
        }
        link {
          url
          target
          link_type
        }
      }
    }
  }
`

export default CardsSlice
