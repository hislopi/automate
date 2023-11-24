import React, { useContext } from "react"
import { Link as GatsbyLink } from "gatsby"
import { SiteContext } from "@lib/context/siteContext"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  href,
  activeClassName,
  partiallyActive,
  onClick,
  ...other
}) => {
  let link = to || href
  let onLinkClick = e => {
    onClick && onClick(e)
  }

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  let internal = /^\/(?!\/)/.test(link)

  //if the link has the booking modal has, prevent the user from going to url
  //and open booking modal
  if (link === "https://#contact_form") {
    link = "#contact_form"
    internal = false

    onLinkClick = e => {
      e.preventDefault()

      const section = document.querySelector("#contact_form")
      section && section.scrollIntoView({ behavior: "smooth", block: "start" })

      onClick && onClick(e)
    }
  }

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={link}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        onClick={onLinkClick}
        {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={link} onClick={onLinkClick} {...other}>
      {children}
    </a>
  )
}

export default Link
