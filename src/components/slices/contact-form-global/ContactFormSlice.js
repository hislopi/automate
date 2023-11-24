import React from "react"
import { Container, Prose } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"
import { ContactInfoForm } from "@components/molecules/form/ContactInfoForm"
import Spacer from "@components/atoms/spacer"
import * as styles from "./styles.module.scss"
import { useSiteMetadata } from "@lib/hooks/useSiteData"
import { FadeInSAL } from "@components/utils/animate"

export const ContactFormGlobal = ({ slices }) => {
  const siteData = useSiteMetadata()

  if (
    slices?.filter(({ slice_type }) => slice_type === "contact_form")?.length
  ) {
    return <></>
  }

  return (
    <div id="contact_form" className={styles.contactFormCon} {...FadeInSAL}>
      <Container size="lg">
        <Spacer y="md">
          <Prose align="center">
            {siteData?.contact_form_content && (
              <PRichText field={siteData.contact_form_content.richText} />
            )}
          </Prose>

          <Spacer y="md" />
          <Container size="md" padding="none">
            <ContactInfoForm />
          </Container>
        </Spacer>
      </Container>
    </div>
  )
}

export default ContactFormGlobal
