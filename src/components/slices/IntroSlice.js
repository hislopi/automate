import React from "react"
import { Prose, Spacer } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"

export const IntroSlice = ({ slice }) => {
  const { primary } = slice
  const { title, content, spacing } = primary
  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <SplitIntro
        title={<PRichText field={title.richText} />}
        addServiceIcons={primary?.add_service_icons}>
        <Prose>
          <PRichText field={content.richText} />
        </Prose>
      </SplitIntro>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyIntroductionContent on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyIntroductionContent {
      primary {
        spacing
        title {
          richText
        }
        content {
          richText
        }
        add_service_icons
      }
    }
    ... on PrismicPageDataBodyIntroductionContent {
      primary {
        spacing
        title {
          richText
        }
        content {
          richText
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyIntroductionContent {
      primary {
        spacing
        title {
          richText
        }
        content {
          richText
        }
      }
    }
  }
`

export default IntroSlice
