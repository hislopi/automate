import React from "react"
import { useSiteMetadata } from "@lib/hooks/use-site-meta"

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  const _title = title || pathname || "Page"

  const seo = {
    title: _title + " | " + defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : "",
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  const robots = process.env.GATSBY_NO_INDEX
    ? "noindex, nofollow"
    : "index, follow"

  const hideReactDevTools = process.env.GATSBY_REACT_DEVTOOLS === "false"

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#69c350" />
      <meta name="apple-mobile-web-app-title" content="Loxone" />
      <meta name="application-name" content="Loxone" />
      <meta name="msapplication-TileColor" content="#69c350" />
      <meta name="theme-color" content="#69c350" />
      <meta name="robots" content={robots} />
      {hideReactDevTools && (
        <script>{`if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}}`}</script>
      )}

      {children}
    </>
  )
}
