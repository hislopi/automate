import React from "react"

import { Prose, Spacer } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"
import Gallery from "@components/molecules/gallery"

export const GallerySlice = ({ slice }) => {
  const { primary, items } = slice
  const { content, spacing } = primary

  return (
    <>
      <Spacer y={spacing || "lg"} type="margin" topOnly />
      <Gallery>
        <Gallery.Content>
          <Prose>{content && <PRichText field={content.richText} />}</Prose>
        </Gallery.Content>
        {items && <Gallery.Slider slides={items} />}
      </Gallery>
    </>
  )
}

export const query = graphql`
  fragment PageDataBodyGallery on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyGallery {
      primary {
        spacing
        content {
          richText
        }
      }
      items {
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 650
                height: 415
              )
            }
          }
        }
        title
        caption {
          richText
        }
      }
    }

    ... on PrismicPageDataBodyGallery {
      primary {
        spacing
        content {
          richText
        }
      }
      items {
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 650
                height: 415
              )
            }
          }
        }
        title
        caption {
          richText
        }
      }
    }
    ... on PrismicCaseStudiesDataBodyGallery {
      primary {
        spacing
        content {
          richText
        }
      }
      items {
        image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 650
                height: 415
              )
            }
          }
        }
        title
        caption {
          richText
        }
      }
    }
  }
`

export default GallerySlice
