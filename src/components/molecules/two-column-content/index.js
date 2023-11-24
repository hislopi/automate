import React from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { FadeInSAL } from "@components/utils/animate"

const Col = ({ title, children, ...props }) => {
  return <div {...props}>{children}</div>
}
export const TwoColContent = ({ title, children, ...props }) => {
  return (
    <div className={styles.twoColContent} {...props} {...FadeInSAL}>
      <Container size="md">
        <div className={styles.twoColContentGrid}>{children}</div>
      </Container>
    </div>
  )
}

TwoColContent.Col = Col

export default TwoColContent
