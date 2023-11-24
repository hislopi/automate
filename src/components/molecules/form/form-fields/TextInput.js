import React from "react"
import {
  fieldWrapClass,
  FormElementWrap,
  FormErrors,
  FormLabel,
  validationSetup,
} from "../form-fields"

import classNames from "classnames/bind"
import * as styles from "../styles.module.scss"

let cx = classNames

export const TextInput = props => {
  const { label, name, placeholder, required, description, register, errors } =
    props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      <div className={cx(fieldWrapClass(fieldErrors))}>
        <FormLabel
          label={label}
          required={required}
          description={description}
        />
        <FormElementWrap>
          <input
            {...register(name, validationSetup(props))}
            className={cx(styles.formFieldText, styles.formField)}
            placeholder={placeholder}
            type="text"
          />
        </FormElementWrap>
        <FormErrors name={name} errors={errors} />
      </div>
    </>
  )
}
