import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import { camelize } from "@lib/helper"

export const Heading = ({
  node: Node = "div",
  variant = "h1",
  color = "inherit",
  weight = "bold",
  children,
  className,
  ...rest
}) => {
  return (
    <Node
      className={classNames(
        styles.heading,
        weight && styles[camelize(`weight-${weight}`)],
        variant && styles[camelize(`variant-${variant}`)],
        color && styles[camelize(`color-${color}`)],
        className
      )}
      {...rest}
    >
      {children}
    </Node>
  )
}

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  node: PropTypes.string,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "span"]),
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
  color: PropTypes.oneOf([
    "green",
    "black",
    "white",
    "dark-grey",
    "grey",
    "inherit",
  ]),
}

export default Heading
