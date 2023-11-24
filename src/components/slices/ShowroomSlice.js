import React, { Suspense } from "react"
import Loader from "@components/atoms/loader"
import { graphql } from "gatsby"
import { FadeInSAL } from "@components/utils/animate"

const Showroom = React.lazy(() => import("./lazy/showroom"))

export const ShowroomSlice = ({ slice }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Showroom slice={slice} />
      </div>
    </Suspense>
  )
}

export const query = graphql`
  fragment PageDataBodyShowroom on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyShowroom {
      primary {
        title {
          richText
        }
      }
      items {
        showroom {
          document {
            ... on PrismicShowroom {
              id
              data {
                title {
                  text
                }
                showroom_image {
                  alt
                  copyright
                  url
                  gatsbyImageData(layout: FULL_WIDTH)
                }
                interests {
                  learn_more_link {
                    url
                    target
                    link_type
                  }
                  pin_icon {
                    gatsbyImageData
                  }
                  y_axis_percent
                  x_axis_percent
                  is_popup_right
                  pin_color
                  interest_title {
                    richText
                  }
                  interest_content {
                    richText
                  }
                  interest_image {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }

    ... on PrismicPageDataBodyShowroom {
      primary {
        title {
          richText
        }
      }
      items {
        showroom {
          document {
            ... on PrismicShowroom {
              id
              data {
                title {
                  text
                }
                showroom_image {
                  alt
                  copyright
                  url
                  gatsbyImageData(layout: FULL_WIDTH)
                }
                interests {
                  learn_more_link {
                    url
                    target
                    link_type
                  }
                  pin_icon {
                    gatsbyImageData
                  }
                  y_axis_percent
                  x_axis_percent
                  is_popup_right
                  pin_color
                  interest_title {
                    richText
                  }
                  interest_content {
                    richText
                  }
                  interest_image {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyShowroom {
      primary {
        title {
          richText
        }
      }
      items {
        showroom {
          document {
            ... on PrismicShowroom {
              id
              data {
                title {
                  text
                }
                showroom_image {
                  alt
                  copyright
                  url
                  gatsbyImageData(layout: FULL_WIDTH)
                }
                interests {
                  learn_more_link {
                    url
                    target
                    link_type
                  }
                  pin_icon {
                    gatsbyImageData
                  }
                  y_axis_percent
                  x_axis_percent
                  is_popup_right
                  pin_color
                  interest_title {
                    richText
                  }
                  interest_content {
                    richText
                  }
                  interest_image {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ShowroomSlice
