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

export const TextArea = props => {
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
          <textarea
            className={cx(fieldClass())}
            placeholder={placeholder}
            {...register(name, validationSetup(props))}
          />
        </FormElementWrap>
        <FormErrors name={name} errors={errors} />
      </div>
    </>
  )
}
