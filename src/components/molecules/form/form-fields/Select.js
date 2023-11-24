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

export const Select = props => {
  const { label, name, options, defaultOption, required, register, errors } =
    props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      <div className={cx(fieldWrapClass(fieldErrors))}>
        <FormLabel label={label} required={required} />
        <FormElementWrap>
          <select
            className={cx(fieldClass())}
            {...register(name, validationSetup(props))}
            defaultValue={defaultOption}
          >
            {options &&
              options.map(({ value, label }, key) => {
                const optionValue = value || label
                return (
                  <option key={key} value={optionValue}>
                    {label}
                  </option>
                )
              })}
          </select>
        </FormElementWrap>
        <FormErrors name={name} errors={errors} />
      </div>
    </>
  )
}
