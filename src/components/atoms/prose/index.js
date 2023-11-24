import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import * as styles from "./styles.module.scss"

export const Prose = ({ align = "left", children, ...props }) => {
  return (
    <div className={classNames(styles.prose, styles[align])} {...props}>
      {children}
    </div>
  )
}

Prose.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
}

export default Prose
