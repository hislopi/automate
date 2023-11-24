import { graphql, useStaticQuery } from "gatsby"
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

export const useSiteMetadata = () => {
  const staticData = useStaticQuery(graphql`
    query {
      prismicSiteData {
        data {
          certifications {
            image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            link {
              link_type
              url
            }
          }
          contact_form_content {
            richText
          }
          footer_navigation {
            nav_link {
              link_type
              url
            }
            nav_text
          }
          feature_dropdown_links {
            nav_text
            nav_link {
              link_type
              url
            }
          }
          navigation {
            nav_link {
              type
              link_type
              url
              slug
            }
            nav_text
          }
          email
          cta_text
          cta_link {
            link_type
            url
            slug
          }
          address_map {
            longitude
            latitude
          }
          address {
            richText
          }
          phone_number
          social {
            social_icon
            social_link {
              link_type
              url
              slug
            }
          }
        }
      }
    }
  `)

  const { data } = useMergePrismicPreviewData(staticData)

  return data?.prismicSiteData.data
}
