import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import { camelize } from "@lib/helper"

export const Text = ({
  node: Node = "p",
  size = "regular",
  color = "inherit",
  weight = "",
  children,
  className,
  ...props
}) => {
  return (
    <Node
      className={classNames(
        styles.text,
        weight && styles[camelize(`weight-${weight}`)],
        size && styles[camelize(`size-${size}`)],
        color && styles[camelize(`color-${color}`)],
        className
      )}
      {...props}
    >
      {children}
    </Node>
  )
}

Text.propTypes = {
  node: PropTypes.string,
  size: PropTypes.oneOf(["regular", "large"]),
  weight: PropTypes.oneOf([
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "bold",
  ]),
  color: PropTypes.oneOf(["green", "black", "dark-grey", "grey", "inherit"]),
}

export default Text
