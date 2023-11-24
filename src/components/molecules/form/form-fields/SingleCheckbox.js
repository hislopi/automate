import React from "react"
import {
  fieldClass,
  fieldWrapClass,
  FormElementWrap,
  FormErrors,
  FormLabel,
  validationSetup,
} from "../form-fields"

import classNames from "classnames/bind"
import * as styles from "../styles.module.scss"

let cx = classNames

export const SingleCheckbox = props => {
  const { label, name, placeholder, register, errors } = props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      <div
        className={cx(
          styles.formFieldCheckboxWrap,
          fieldWrapClass(fieldErrors)
        )}
      >
        <FormLabel />
        <FormElementWrap>
          <input
            id={name}
            className={cx(fieldClass())}
            {...register(name, validationSetup(props))}
            placeholder={placeholder}
            type="checkbox"
          />

          <label htmlFor={name}>{label}</label>
        </FormElementWrap>
        <FormErrors name={name} errors={errors} />
      </div>
    </>
  )
}
