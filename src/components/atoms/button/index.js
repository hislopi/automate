import React from "react"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./styles.module.scss"
import { camelize } from "@lib/helper"
import Link from "@components/atoms/Link"

export const Button = ({
  as = "button",
  variant = "button",
  color = "green",
  size = "medium",
  isOutlined = false,
  className,
  children,
  ...props
}) => {
  let Node = ((props.href || props.to) && Link) || as

  return (
    <Node
      className={cn(
        styles.button,
        variant && styles[camelize(`variant-${variant}`)],
        size && styles[camelize(`size-${size}`)],
        isOutlined && styles.isOutlined,
        color && styles[camelize(`color-${color}`)],
        className
      )}
      {...props}
    >
      {children}
    </Node>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "button"]),
  isOutlined: PropTypes.bool,
  color: PropTypes.oneOf(["inherit", "green", "dark-grey", "clear-white"]),
  href: PropTypes.string,
  to: PropTypes.string,
}

export default Button
