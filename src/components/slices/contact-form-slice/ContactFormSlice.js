import React from "react"
import { Container, Prose } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"
import { ContactInfoForm } from "@components/molecules/form/ContactInfoForm"
import Spacer from "@components/atoms/spacer"
import * as styles from "./styles.module.scss"
import { FadeInSAL } from "@components/utils/animate"

export const ContactFormSlice = ({ slice }) => {
  const { primary } = slice

  return (
    <div id="contact_form" className={styles.contactFormCon} {...FadeInSAL}>
      <Container size="md">
        <Spacer y="md">
          <Prose align="center">
            {primary?.content && <PRichText field={primary.content.richText} />}
          </Prose>

          <Spacer y="md" />
          <Container size="md" padding="none">
            <ContactInfoForm enquiryTitle={primary?.enquiry_title} />
          </Container>
        </Spacer>
      </Container>
    </div>
  )
}

export const query = graphql`
  fragment PageDataBodyContactForm on PrismicSliceType {
    ...SliceType
    ... on PrismicHomepageDataBodyContactForm {
      primary {
        content {
          richText
        }
        enquiry_title
      }
    }

    ... on PrismicPageDataBodyContactForm {
      primary {
        content {
          richText
        }
        enquiry_title
      }
    }
    ... on PrismicCaseStudiesDataBodyContactForm {
      primary {
        content {
          richText
        }
        enquiry_title
      }
    }
  }
`

export default ContactFormSlice
