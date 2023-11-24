import React from "react"
import * as styles from "./styles.module.scss"
import ReactLoading from "react-loading"
import Spacer from "@components/atoms/spacer"

const Loader = ({ isFull }) => {
  return (
    <div>
      <Spacer className={styles.inner} y="sm">
        <ReactLoading type="spin" color="var(--color-brand-green)" />
      </Spacer>
    </div>
  )
}

export default Loader
