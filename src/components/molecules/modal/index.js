import React from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import classNames from "classnames"
import PropTypes from "prop-types"

export const Modal = ({
  isOpen,
  hasScroll,
  onClose,
  isMini,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(
        styles.modalContainer,
        hasScroll && styles.scroll,
        isOpen && styles.isOpen
      )}
      {...props}
    >
      <div className={styles.modalOverlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.closeBtn} onClick={() => onClose()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M21 0.90625C9.76172 0.90625 0.65625 10.0117 0.65625 21.25C0.65625 32.4883 9.76172 41.5938 21 41.5938C32.2383 41.5938 41.3438 32.4883 41.3438 21.25C41.3438 10.0117 32.2383 0.90625 21 0.90625ZM21 38.9688C11.2383 38.9688 3.28125 31.0938 3.28125 21.25C3.28125 11.5703 11.1562 3.53125 21 3.53125C30.6797 3.53125 38.7188 11.4883 38.7188 21.25C38.7188 31.0117 30.7617 38.9688 21 38.9688ZM28.7109 15.5898C29.1211 15.1797 29.1211 14.6055 28.7109 14.1953L28.0547 13.5391C27.6445 13.1289 27.0703 13.1289 26.6602 13.5391L21 19.1992L15.2578 13.5391C14.9297 13.1289 14.2734 13.1289 13.8633 13.5391L13.207 14.1953C12.7969 14.6055 12.7969 15.1797 13.207 15.5898L18.8672 21.25L13.207 26.9922C12.7969 27.3203 12.7969 27.9766 13.207 28.3867L13.8633 29.043C14.2734 29.4531 14.9297 29.4531 15.2578 29.043L21 23.3828L26.6602 29.043C27.0703 29.4531 27.6445 29.4531 28.0547 29.043L28.7109 28.3867C29.1211 27.9766 29.1211 27.3203 28.7109 26.9922L23.0508 21.25L28.7109 15.5898Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isMini: PropTypes.bool,
}

export default Modal
