import * as React from "react"
import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews"
import { Helmet } from "react-helmet"
import { SEO } from "@components/utils/SEO"
import { Hero, SplitIntro } from "@components/molecules"
import { Button, Heading, Prose, Text } from "@components/atoms"
import Img from "../assets/images/showroom-1.jpg"

const NotFoundPage = () => {
  return (
    <SplitIntro title={<Heading>Whoops! Page not found!</Heading>}>
      <Prose>
        <Button to="/">Go home</Button>
      </Prose>
    </SplitIntro>
  )
}

export const Head = props => {
  return <SEO title="404" pathname={props.pathname} />
}

export default withPrismicUnpublishedPreview(NotFoundPage)
