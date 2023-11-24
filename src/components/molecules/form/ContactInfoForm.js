import React, { useRef, useState } from "react"
import * as styles from "./styles.module.scss"
import { useForm } from "react-hook-form"
import ReCAPTCHA from 'react-google-recaptcha';

import { Oval, useLoading } from "@agney/react-loading"
import { TextInput } from "./form-fields/TextInput"
import { EmailInput } from "./form-fields/EmailInput"
import { ErrorMessage } from "@hookform/error-message"
import { TextArea } from "./form-fields/TextArea"
import { Anchor, Button, Heading, Text, Spacer } from "@components/atoms"
import classNames from "classnames"
import { RadioIcons } from "@components/molecules/form/form-fields/RadioIcons"
import { Helmet } from "react-helmet"
import axios from "axios"
import { useSiteMetadata } from "@lib/hooks/useSiteData"
import Social from "@components/atoms/social"
import { Radios } from "@components/molecules/form/form-fields/Radios"

const cx = classNames


function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

const Meta = () => {
  const siteData = useSiteMetadata()

  return (
    <div className={cx(styles.meta)}>
      <div className={cx(styles.metaItem)}>
        <Heading
          weight="100"
          variant="h6"
          node="div"
          className={cx(styles.metaTitle)}>
          Call us on:
        </Heading>

        <a href={`tel:${siteData.phone_number}`}>
          <Heading
            weight="bold"
            variant="h5"
            node="div"
            className={cx(styles.metaValue, styles.phone)}>
            {siteData.phone_number}
          </Heading>
        </a>
      </div>
      <div className={cx(styles.metaItem)}>
        <Heading
          weight="100"
          variant="h6"
          node="div"
          className={cx(styles.metaTitle)}>
          Email us:
        </Heading>
        <a>
          <Heading
            weight="bold"
            variant="h5"
            node="div"
            className={cx(styles.metaValue, styles.email)}>
            {siteData.email}
          </Heading>
        </a>
      </div>
      <div className={cx(styles.metaItem)}>
        <Heading
          weight="100"
          variant="h6"
          node="div"
          className={cx(styles.metaTitle)}>
          Follow us:
        </Heading>
        <Heading
          weight="100"
          variant="h5"
          node="div"
          className={cx(styles.metaValue, styles.social)}>
          <Social baseColors={false} />
        </Heading>
      </div>
    </div>
  )
}

export const ContactInfoForm = ({ onSubmitOk, enquiryTitle }) => {
  const SITE_KEY = process.env.GATSBY_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.GATSBY_reCAPTCHA_SECRET_KEY;

  const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY
  const form = useForm({
    mode: "onChange",
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = form

  const [formStatus, setFormStatus] = useState(null)
  const [valid_token, setValidToken] = useState([]);
  const [SuccessMsg, setSuccessMsg] = useState("")
  const [ErrorMsg, setErrorMsg] = useState("")

  const captchaRef = useRef(null)

  const isLoading = formStatus === "loading"

  const { containerProps, indicatorEl } = useLoading({
    loading: isLoading,
    indicator: (
      <div className={cx(styles.loadingCon)}>
        <Oval width="50" />
      </div>
    ),
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()

    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (token) {
      submitData(data, e, token);
    } else {
      setErrorMsg("Please confirm you are not a robot")
    }
  }



  const submitData = (data, e, recaptchaToken) => {
    setFormStatus("loading")

    const bodyData = {
      ...data,
      recaptcha_token: recaptchaToken,
    }

    axios({
      url: process.env.MAIL_ENDPOINT || "/api/submit-message",
      method: "POST",
      data: bodyData,
    })
      .then(data => {
        //clear form errors if there are any
        clearErrors("form")

        //set form status to ok
        setFormStatus("ok")

        //reset form
        e.target.reset()

        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: "form_submit" })

        if (onSubmitOk) {
          onSubmitOk(bodyData)
        }
      })
      .catch(error => {
        setFormStatus("error")

        setError("form", {
          type: "manual",
          message:
            "There seems to be an issue with our form. Please check back later",
        })
      })
  }

  return (
    <>
      <Helmet>
        <script
          key="recaptcha"
          type="text/javascript"
          src={`https://www.google.com/recaptcha/api.js?render="${SITE_KEY}"`}
        />
      </Helmet>

      <div className={cx(styles.formCols)}>
        <Meta />
        <div className={cx(styles.formWrap)}>
          <form
            id="contact_info_form"
            method="POST"
            className={cx(styles.form)}
            onSubmit={handleSubmit(onSubmit)}
            {...containerProps}>
            <div className={cx(styles.formRows)}>
              {enquiryTitle && (
                <Heading node="div" variant="h6" weight="700">
                  {enquiryTitle}
                </Heading>
              )}

              <div className={cx(styles.fieldsRequired)}>
                Fields marked with an{" "}
                <span className={cx(styles.formsReqSymbol)}>*</span> are
                required
              </div>

              <div className={cx(styles.formRow)}>
                <Radios
                  name="nature_of_enquiry"
                  label="Nature Of Enquiry"
                  register={register}
                  required={true}
                  errors={errors}
                  radios={[
                    {
                      label: "Showroom tour",
                      value: "Showroom tour",
                    },
                    {
                      label: "Loxone Project",
                      value: "Loxone Project",
                    },
                    {
                      label: "CPD",
                      value: "CPD",
                    },
                  ]}
                />
              </div>

              <div className={cx(styles.formRow)}>
                <TextInput
                  label="First Name"
                  name="first_name"
                  required={true}
                  maxLength={100}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Last Name"
                  name="last_name"
                  required={true}
                  maxLength={100}
                  register={register}
                  errors={errors}
                />
              </div>

              <div className={cx(styles.formRow)}>
                <EmailInput
                  label="Email"
                  name="email"
                  required={true}
                  maxLength={100}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Phone Number"
                  name="phone_number"
                  maxLength={100}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            <div className={cx(styles.formRows)}>
              <div className={cx(styles.formRow)}>
                <TextArea
                  label="Additional Information (optional)"
                  name="additional_information"
                  maxLength={2000}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            <ReCAPTCHA
              sitekey={SITE_KEY}
              ref={captchaRef}
            />
            {valid_token.length > 0 && valid_token[0].success === true ? <h3 className="textSuccess">{SuccessMsg}</h3> : <h3 className="textError">{ErrorMsg} </h3>}

            {errors && (
              <ErrorMessage
                errors={errors}
                name="form"
                render={({ message }) => (
                  <div className={cx(styles.formMessage, styles.error)}>
                    <p className={cx(styles.errorMessage)}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="exclamation-triangle"
                        className="svg-inline--fa fa-exclamation-triangle fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path
                          fill="currentColor"
                          d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                        />
                      </svg>
                      {message}
                    </p>
                  </div>
                )}
              />
            )}
            {Object.keys(errors).length > 0 && (
              <div className={cx(styles.formMessage, styles.error)}>
                <p className={cx(styles.errorMessage)}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="exclamation-triangle"
                    className="svg-inline--fa fa-exclamation-triangle fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                      fill="currentColor"
                      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                    />
                  </svg>
                  Please correct errors before submitting this form.
                </p>
              </div>
            )}
            {formStatus === "ok" && (
              <div className={cx(styles.quoteThanks)}>
                <div className={cx(styles.inner)}>
                  <h2>Thank you for your submission</h2>
                </div>
              </div>
            )}

            <Spacer y="sm" />
            {formStatus !== "ok" && (
              <div className={cx(styles.formRows)}>
                <div className={cx(styles.formRow, styles.submitRow)}>
                  <div className={styles.terms}>
                    <Text>
                      I consent to my details being used for the purpose of this
                      request.
                      <br /> For more information, view our{" "}
                      <Anchor underlined colored to="/privacy-policy">
                        privacy policy
                      </Anchor>
                    </Text>
                  </div>
                  <div>
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              </div>
            )}
            {indicatorEl}
          </form>
        </div>
      </div>
    </>
  )
}

const EnvelopeSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none">
      <path
        d="M22.6562 0.25H2.34375C1.02539 0.25 0 1.32422 0 2.59375V16.6562C0 17.9746 1.02539 19 2.34375 19H22.6562C23.9258 19 25 17.9746 25 16.6562V2.59375C25 1.32422 23.9258 0.25 22.6562 0.25ZM2.34375 1.8125H22.6562C23.0469 1.8125 23.4375 2.20312 23.4375 2.59375V4.64453C22.3633 5.52344 20.8008 6.79297 16.0645 10.5527C15.2344 11.2363 13.623 12.7988 12.5 12.75C11.3281 12.7988 9.7168 11.2363 8.88672 10.5527C4.15039 6.79297 2.58789 5.52344 1.5625 4.64453V2.59375C1.5625 2.20312 1.9043 1.8125 2.34375 1.8125ZM22.6562 17.4375H2.34375C1.9043 17.4375 1.5625 17.0957 1.5625 16.6562V6.64648C2.63672 7.57422 4.39453 8.99023 7.91016 11.7734C8.93555 12.6035 10.6934 14.3613 12.5 14.3125C14.2578 14.3613 16.0156 12.6035 17.041 11.7734C20.5566 8.99023 22.3145 7.57422 23.4375 6.64648V16.6562C23.4375 17.0957 23.0469 17.4375 22.6562 17.4375Z"
        fill="white"
      />
    </svg>
  )
}

const MicSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none">
      <path
        d="M9.375 10.2812C9.375 9.45117 8.64258 8.71875 7.8125 8.71875H7.03125C5.27344 8.71875 3.90625 10.1348 3.90625 11.8438V14.1875C3.90625 15.9453 5.27344 17.3125 7.03125 17.3125H7.8125C8.64258 17.3125 9.375 16.6289 9.375 15.75V10.2812ZM17.9688 17.3125C19.6777 17.3125 21.0938 15.9453 21.0938 14.1875V11.8438C21.0938 10.1348 19.6777 8.71875 17.9688 8.71875H17.1875C16.3086 8.71875 15.625 9.45117 15.625 10.2812V15.75C15.625 16.6289 16.3086 17.3125 17.1875 17.3125H17.9688ZM12.5 0.125C5.51758 0.125 0.195312 5.93555 0 12.625V13.4062C0 13.8457 0.341797 14.1875 0.78125 14.1875H1.5625C1.95312 14.1875 2.34375 13.8457 2.34375 13.4062V12.625C2.34375 7.05859 6.88477 2.46875 12.5 2.46875C18.0664 2.46875 22.6562 7.05859 22.6562 12.625H22.6074C22.6074 12.7715 22.6562 20.7305 22.6562 20.7305C22.6562 21.9023 21.7285 22.7812 20.5566 22.7812H15.625C15.625 21.5117 14.5508 20.4375 13.2812 20.4375H11.7188C10.4004 20.4375 9.375 21.5117 9.375 22.7812C9.375 24.0996 10.4004 25.125 11.7188 25.125H20.5566C22.998 25.125 25 23.1719 25 20.7305V12.625C24.7559 5.93555 19.4336 0.125 12.5 0.125Z"
        fill="#333333"
      />
    </svg>
  )
}
