import React from "react"
import { ErrorMessage } from "@hookform/error-message"

import classNames from "classnames/bind"
import * as styles from "./styles.module.scss"

let cx = classNames

export const ErrorMessaging = {
  required: "This field is required",
  minLength: value => `Please input more than ${value} characters`,
  maxLength: value => `Please input less than ${value} characters`,
}

//setup validation for fields
export const validationSetup = ({
  required,
  pattern,
  minLength,
  maxLength,
  ...rest
}) => {
  return {
    required: required ? ErrorMessaging.required : false,
    pattern,
    minLength: typeof minLength !== "undefined" && {
      value: minLength,
      message: ErrorMessaging.minLength(minLength),
    },
    maxLength: {
      value: maxLength,
      message: ErrorMessaging.maxLength(maxLength),
    },
    ...rest,
  }
}

export const fieldClass = () => {
  return {
    [styles.formField]: true,
  }
}

//setup field wrap class(mainly for errors and success)
export const fieldWrapClass = errors => {
  return {
    [styles.formFieldWrap]: true,
    [styles.hasError]: typeof errors !== "undefined",
  }
}

export const FormElementWrap = ({ children }) => (
  <div className={cx([styles.formElementWrap])}>{children}</div>
)

export const FormLabel = ({ label, required, description }) => (
  <div className={cx([styles.labelWrap])}>
    <label className={cx({ [styles.req]: required })}>{label}</label>
    {description && (
      <span className={cx([styles.description])}>({description})</span>
    )}
  </div>
)

//form error message
export const FormErrors = ({ name, errors }) => {
  if (!errors) return <></>

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className={cx(styles.errorMessage)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-triangle"
            className={cx(
              "svg-inline--fa",
              "fa-exclamation-triangle",
              "fa-w-18"
            )}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            />
          </svg>
          {message}
        </p>
      )}
    />
  )
}
