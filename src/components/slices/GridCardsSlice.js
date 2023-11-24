import React from "react"
import { graphql } from "gatsby"
import { Container, Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { GridCard, GridCards } from "@components/molecules"

export const CardsSlice = ({ slice }) => {
  const { primary, items } = slice
  const { spacing } = primary

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <Container>
        <GridCards>
          {items &&
            items.map(({ card_content, card_image }) => {
              return (
                <GridCard cardImage={card_image}>
                  <Prose>
                    {card_content && (
                      <PRichText field={card_content.richText} />
                    )}
                  </Prose>
                </GridCard>
              )
            })}
        </GridCards>
      </Container>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyGridCards on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyGridCards {
      primary {
        spacing
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
    ... on PrismicPageDataBodyGridCards {
      primary {
        spacing
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
    ... on PrismicCaseStudiesDataBodyGridCards {
      primary {
        spacing
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
  }
`

export default CardsSlice
