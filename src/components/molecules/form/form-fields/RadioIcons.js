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

export const RadioIcons = props => {
  const { label, name, radios, placeholder, register, errors } = props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      {radios &&
        radios.map(({ value, label, svg }, key) => {
          const id = name + "_" + value
          return (
            <div
              className={cx(
                styles.formFieldRadioIconWrap,
                fieldWrapClass(fieldErrors)
              )}
            >
              <FormElementWrap>
                <input
                  id={id}
                  className={cx(fieldClass())}
                  {...register(name, validationSetup(props))}
                  placeholder={placeholder}
                  defaultChecked={key === 0}
                  value={value}
                  type="radio"
                />
                <label htmlFor={id}>
                  <div className={styles.selectIcon}>{svg}</div>
                  <span>{label}</span>
                </label>
              </FormElementWrap>
            </div>
          )
        })}

      <FormErrors name={name} errors={errors} />
    </>
  )
}
