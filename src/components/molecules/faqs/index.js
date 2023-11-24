import React, { useState } from "react"
import * as styles from "./styles.module.scss"
import { Container, Heading } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import classNames from "classnames"
import { FadeInSAL } from "@components/utils/animate"

export const FAQs = ({ children, ...props }) => {
  return (
    <div className={classNames(styles.faqs)} {...props} {...FadeInSAL}>
      <Container size="md">{children}</Container>
    </div>
  )
}
FAQs.propTypes = {}

const FAQ = ({ question, children }) => {
  const [isActive, setIsActive] = useState()
  return (
    <div className={classNames(styles.faq, isActive && styles.active)}>
      <div className={styles.question} onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div className={styles.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none">
            <path
              d="M13.8594 0.546875L13.6406 0.328125C13.4844 0.171875 13.2656 0.171875 13.1094 0.328125L7.01562 6.42188L0.890625 0.328125C0.734375 0.171875 0.515625 0.171875 0.359375 0.328125L0.140625 0.546875C-0.015625 0.703125 -0.015625 0.921875 0.140625 1.07812L6.73438 7.67188C6.89062 7.82812 7.10938 7.82812 7.26562 7.67188L13.8594 1.07812C14.0156 0.921875 14.0156 0.703125 13.8594 0.546875Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className={styles.answer}>{children}</div>
    </div>
  )
}
FAQs.FAQ = FAQ

export default FAQs
