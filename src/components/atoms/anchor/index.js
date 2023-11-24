import React from "react"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./styles.module.scss"
import Link from "@components/atoms/Link"

export const Anchor = ({
  isLight = false,
  to,
  underlined,
  colored,
  className,
  children,
  ...props
}) => {
  return (
    <Link
      className={cn(
        styles.link,
        underlined && styles.underlined,
        colored && styles.colored,
        isLight && styles.light,
        className
      )}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

Anchor.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  isLight: PropTypes.bool,
  underlined: PropTypes.bool,
}

export default Anchor
