import React from "react"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./styles.module.scss"

export const Arrows = ({ direction = "left", className, ...props }) => {
  return (
    <div className={cn(styles.arrow, className)} {...props}>
      {direction === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
        >
          <path
            d="M7.20703 13.0469L7.61328 12.6914C7.81641 12.4375 7.81641 12.082 7.61328 11.8281L3.34766 7.61328L22.3906 7.61328C22.7461 7.61328 23 7.30859 23 7.00391L23 6.49609C23 6.14062 22.7461 5.88672 22.3906 5.88672L3.34765 5.88672L7.61328 1.6211C7.8164 1.36719 7.8164 1.01172 7.61328 0.757814L7.20703 0.402345C7.0039 0.148439 6.59765 0.148439 6.34375 0.402345L0.453124 6.29297C0.199217 6.54688 0.199218 6.90235 0.453124 7.15625L6.34375 13.0469C6.59766 13.3008 7.00391 13.3008 7.20703 13.0469Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
        >
          <path
            d="M15.793 0.953125L15.3867 1.30859C15.1836 1.5625 15.1836 1.91797 15.3867 2.17188L19.6523 6.38672H0.609375C0.253906 6.38672 0 6.69141 0 6.99609V7.50391C0 7.85938 0.253906 8.11328 0.609375 8.11328H19.6523L15.3867 12.3789C15.1836 12.6328 15.1836 12.9883 15.3867 13.2422L15.793 13.5977C15.9961 13.8516 16.4023 13.8516 16.6562 13.5977L22.5469 7.70703C22.8008 7.45312 22.8008 7.09766 22.5469 6.84375L16.6562 0.953125C16.4023 0.699219 15.9961 0.699219 15.793 0.953125Z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  )
}

Arrows.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
}

export default Arrows
