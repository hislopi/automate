import { graphql } from "gatsby"

export const SliceType = graphql`
  fragment SliceType on PrismicSliceType {
    slice_type
    slice_label
    id
  }
`
