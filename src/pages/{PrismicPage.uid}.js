import * as React from "react"
import { graphql } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import { PageTemplate } from "../templates/page"
import { PageHead } from "@components/organisms/layout"

const Page = props => {
  return <PageTemplate {...props} />
}

export const Head = props => {
  return <PageHead {...props} />
}

export const query = graphql`
  query PageTemplate($id: String) {
    page: prismicPage(id: { eq: $id }) {
      _previewable
      data {
        meta_description
        meta_title
        body {
          ...PageDataBodyFullHero
          ...PageDataBodyIntroductionContent
          ...PageDataBodyFeature
          ...PageDataBodyBanner
          ...PageDataBodyShowroom
          ...PageDataBodyContentBlock
          ...PageDataBodySpacer
          ...PageDataBodyTwoColumnContent
          ...PageDataBodyImageBlock
          ...PageDataBodyVideoBlock
          ...PageDataBodyFAQs
          ...PageDataBodyFeatureSlider
          ...PageDataBodyGallery
          ...PageDataBodyContactForm
          ...PageDataBodyCards
          ...PageDataBodyGridCards
        }
      }
    }
  }
`

export default withPrismicPreview(Page)
