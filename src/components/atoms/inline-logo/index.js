import React from "react"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./styles.module.scss"
import Img from "./logo.png"

export const InlineLogo = ({
  variant = "medium",
  className,
  children,
  ...props
}) => {
  return (
    <i className={cn(styles.logo, className)} {...props}>
      <img src={Img} alt="" width="178" />
    </i>
  )
}

InlineLogo.propTypes = {}

export default InlineLogo
