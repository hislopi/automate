/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import * as React from "react"
import { Link } from "gatsby"
import { PrismicProvider } from "@prismicio/react"
import Layout from "@components/organisms/layout"
import { linkResolver } from "./config/prismic/linkResolver"

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: `en` })
}

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link to={href} {...props} />
        )}>
        {element}
      </PrismicProvider>
    </Layout>
  )
}
