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

export const Radios = props => {
  const { label, name, radios, required, placeholder, register, errors } = props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      <div
        className={cx(styles.formFieldRadioWrap, fieldWrapClass(fieldErrors))}>
        <FormLabel label={label} required={required} />
        <div className={styles.formFieldRadios}>
          {radios &&
            radios.map(({ value, label }, key) => {
              const id = name + "_" + key
              return (
                <FormElementWrap>
                  <input
                    id={id}
                    className={cx(fieldClass())}
                    {...register(name, validationSetup(props))}
                    placeholder={placeholder}
                    defaultChecked={key === 0}
                    value={value}
                    type="radio"
                    required={required}
                  />
                  <label htmlFor={id}>
                    <span>{label}</span>
                  </label>
                </FormElementWrap>
              )
            })}
        </div>
      </div>
      <FormErrors name={name} errors={errors} />
    </>
  )
}
