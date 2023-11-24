import React from "react"
import Spacer from "@components/atoms/spacer"
import { graphql } from "gatsby"

export const SpacerSlice = ({ slice }) => {
  const { primary } = slice
  const { x_axis, y_axis } = primary
  return <Spacer x={x_axis} y={y_axis} />
}

export const query = graphql`
  fragment PageDataBodySpacer on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodySpacer {
      primary {
        x_axis
        y_axis
      }
    }
    ... on PrismicPageDataBodySpacer {
      primary {
        x_axis
        y_axis
      }
    }
    ... on PrismicCaseStudiesDataBodySpacer {
      primary {
        x_axis
        y_axis
      }
    }
  }
`

export default SpacerSlice
