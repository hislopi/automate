import React from "react"
import { Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import TwoColContent from "@components/molecules/two-column-content"
import { graphql } from "gatsby"

export const TwoColContentSlice = ({ slice }) => {
  const { items, primary } = slice
  const { spacing } = primary

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <TwoColContent>
        {items?.map(({ content }, key) => {
          return (
            <TwoColContent.Col key={key}>
              <Prose>
                <PRichText field={content.richText} />
              </Prose>
            </TwoColContent.Col>
          )
        })}
      </TwoColContent>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyTwoColumnContent on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyTwoColumnContent {
      primary {
        spacing
      }
      items {
        content {
          richText
        }
      }
    }

    ... on PrismicPageDataBodyTwoColumnContent {
      primary {
        spacing
      }
      items {
        content {
          richText
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyTwoColumnContent {
      primary {
        spacing
      }
      items {
        content {
          richText
        }
      }
    }
  }
`

export default TwoColContentSlice
