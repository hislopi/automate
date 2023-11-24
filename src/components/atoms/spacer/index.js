import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./styles.module.scss"
import { camelize } from "@lib/helper"

export const Spacer = ({
  x,
  y = "md",
  type = "padding",
  topOnly = false,
  isHR = false,
  isHRGreen = true,
  responsive = true,
  children,
  className,
  ...props
}) => {
  const Node = !isHR ? "div" : "hr"
  return (
    <Node
      className={cn(
        styles.spacer,
        styles[type],
        isHRGreen && styles.greenHrColor,
        responsive && styles.responsive,
        topOnly && styles.topOnly,
        x && styles[camelize(`x-${x}`)],
        y && styles[camelize(`y-${y}`)],
        className
      )}
      {...props}>
      {children}
    </Node>
  )
}

Spacer.propTypes = {
  x: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl"]),
  y: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl"]),
  type: PropTypes.oneOf(["", "padding", "margin"]),
}

export default Spacer
