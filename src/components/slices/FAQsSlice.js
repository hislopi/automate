import React from "react"
import { Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { FAQs } from "@components/molecules"
import { graphql } from "gatsby"

export const FAQsSlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, spacing } = primary

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <FAQs>
        {content && (
          <Prose align="center">
            <PRichText field={content.richText} />
          </Prose>
        )}
        {items?.map(({ question, answer }, key) => {
          return (
            <FAQs.FAQ question={question} key={key}>
              <PRichText field={answer.richText} />
            </FAQs.FAQ>
          )
        })}
      </FAQs>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyFAQs on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyFaqs {
      primary {
        spacing
        content {
          richText
        }
      }
      items {
        question
        answer {
          richText
        }
      }
    }
    ... on PrismicPageDataBodyFaqs {
      primary {
        spacing
        content {
          richText
        }
      }
      items {
        question
        answer {
          richText
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyFaqs {
      primary {
        spacing
        content {
          richText
        }
      }
      items {
        question
        answer {
          richText
        }
      }
    }
  }
`

export default FAQsSlice
