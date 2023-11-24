import React from "react"
import * as styles from "./styles.module.scss"

export const ButtonGroup = ({ children, ...props }) => {
  return (
    <div className={styles.buttonGroup} {...props}>
      {children}
    </div>
  )
}

export default ButtonGroup
