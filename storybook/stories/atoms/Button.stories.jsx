import React from "react"

import { Button } from "@components/atoms"
import { Light } from "./Anchor.stories"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args}>Button</Button>

export const Default = Template.bind({})
Default.args = {
  variant: "button",
  color: "green",
}

export const Green = Template.bind({})
Green.args = {
  variant: "button",
  color: "green",
}

export const DarkGrey = Template.bind({})
DarkGrey.args = {
  variant: "button",
  color: "dark-grey",
}

export const GreenOutline = Template.bind({})
GreenOutline.args = {
  variant: "button",
  color: "green",
  isOutlined: true,
}

export const DarkGreyOutline = Template.bind({})
DarkGreyOutline.args = {
  variant: "button",
  color: "dark-grey",
  isOutlined: true,
}

export const Clear = args => (
  <Button {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M16.4062 1.78125L13.1562 1.03125C12.8125 0.9375 12.4375 1.125 12.2812 1.46875L10.7812 4.96875C10.6562 5.28125 10.75 5.625 11 5.84375L12.9062 7.40625C11.7812 9.78125 9.8125 11.7812 7.375 12.9375L5.8125 11.0312C5.59375 10.7812 5.25 10.6875 4.9375 10.8125L1.4375 12.3125C1.09375 12.4688 0.9375 12.8438 1 13.1875L1.75 16.4375C1.84375 16.7812 2.125 17 2.5 17C10.5 17 17 10.5312 17 2.5C17 2.15625 16.75 1.875 16.4062 1.78125Z"
        fill="#69C350"
      />
    </svg>{" "}
    <span>020 8342 5016</span>
  </Button>
)

Clear.args = {
  variant: "text",
  color: "clear",
}
Clear.parameters = {
  docs: {
    description: {
      story: "Clear buttons can be used to aid the user with extra padding. ",
    },
  },
}

export const ClearWhite = args => (
  <Button {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M16.4062 1.78125L13.1562 1.03125C12.8125 0.9375 12.4375 1.125 12.2812 1.46875L10.7812 4.96875C10.6562 5.28125 10.75 5.625 11 5.84375L12.9062 7.40625C11.7812 9.78125 9.8125 11.7812 7.375 12.9375L5.8125 11.0312C5.59375 10.7812 5.25 10.6875 4.9375 10.8125L1.4375 12.3125C1.09375 12.4688 0.9375 12.8438 1 13.1875L1.75 16.4375C1.84375 16.7812 2.125 17 2.5 17C10.5 17 17 10.5312 17 2.5C17 2.15625 16.75 1.875 16.4062 1.78125Z"
        fill="#69C350"
      />
    </svg>{" "}
    <span>020 8342 5016</span>
  </Button>
)
ClearWhite.args = {
  variant: "text",
  color: "clear-white",
}
ClearWhite.parameters = {
  backgrounds: { default: "dark" },
}

export const WithIcon = args => (
  <Button {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
    >
      <path
        d="M5.99998 9.79994C4.67323 9.79994 3.59998 8.72632 3.59998 7.39994C3.59998 6.07357 4.67323 5.03369 5.99998 5.03369C7.32673 5.03369 8.39998 6.10694 8.39998 7.39994C8.39998 8.69294 7.32748 9.79994 5.99998 9.79994ZM18 9.79994C16.6732 9.79994 15.6 8.72632 15.6 7.39994C15.6 6.07357 16.6732 5.03369 18 5.03369C19.3267 5.03369 20.4 6.10694 20.4 7.39994C20.4 8.69294 19.3275 9.79994 18 9.79994Z"
        fill="#69C350"
      />
      <path
        opacity="0.4"
        d="M21.6 0.800049H2.4C1.08 0.800049 0 1.88005 0 3.20005V12.8C0 14.12 1.08 15.2 2.4 15.2L7.21125 15.2C8.1555 15.2 9.01237 14.6462 9.40013 13.7852L10.4411 11.4733C10.7364 10.817 11.3411 10.3997 12.0023 10.3997C12.6634 10.3997 13.2679 10.817 13.5634 11.4733L14.604 13.7844C14.9921 14.6462 15.849 15.2 16.794 15.2L21.6 15.2C22.92 15.2 24 14.12 24 12.8V3.20005C24 1.88005 22.92 0.800049 21.6 0.800049ZM6 9.80005C4.67325 9.80005 3.6 8.72642 3.6 7.40005C3.6 6.07367 4.67325 5.0338 6 5.0338C7.32675 5.0338 8.4 6.10705 8.4 7.40005C8.4 8.69305 7.3275 9.80005 6 9.80005ZM18 9.80005C16.6733 9.80005 15.6 8.72642 15.6 7.40005C15.6 6.07367 16.6733 5.0338 18 5.0338C19.3268 5.0338 20.4 6.10705 20.4 7.40005C20.4 8.69305 19.3275 9.80005 18 9.80005Z"
        fill="#69C350"
      />
    </svg>{" "}
    <span>Button</span>
  </Button>
)
WithIcon.args = {
  variant: "button",
  color: "green",
}

export const WithIconOutline = args => (
  <Button {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
    >
      <path
        d="M6.00001 9.79994C4.67326 9.79994 3.60001 8.72632 3.60001 7.39994C3.60001 6.07357 4.67326 5.03369 6.00001 5.03369C7.32676 5.03369 8.40001 6.10694 8.40001 7.39994C8.40001 8.69294 7.32751 9.79994 6.00001 9.79994ZM18 9.79994C16.6733 9.79994 15.6 8.72632 15.6 7.39994C15.6 6.07357 16.6733 5.03369 18 5.03369C19.3268 5.03369 20.4 6.10694 20.4 7.39994C20.4 8.69294 19.3275 9.79994 18 9.79994Z"
        fill="white"
      />
      <path
        opacity="0.4"
        d="M21.6 0.800049H2.4C1.08 0.800049 0 1.88005 0 3.20005V12.8C0 14.12 1.08 15.2 2.4 15.2L7.21125 15.2C8.1555 15.2 9.01237 14.6462 9.40013 13.7852L10.4411 11.4733C10.7364 10.817 11.3411 10.3997 12.0023 10.3997C12.6634 10.3997 13.2679 10.817 13.5634 11.4733L14.604 13.7844C14.9921 14.6462 15.849 15.2 16.794 15.2L21.6 15.2C22.92 15.2 24 14.12 24 12.8V3.20005C24 1.88005 22.92 0.800049 21.6 0.800049ZM6 9.80005C4.67325 9.80005 3.6 8.72642 3.6 7.40005C3.6 6.07367 4.67325 5.0338 6 5.0338C7.32675 5.0338 8.4 6.10705 8.4 7.40005C8.4 8.69305 7.3275 9.80005 6 9.80005ZM18 9.80005C16.6733 9.80005 15.6 8.72642 15.6 7.40005C15.6 6.07367 16.6733 5.0338 18 5.0338C19.3268 5.0338 20.4 6.10705 20.4 7.40005C20.4 8.69305 19.3275 9.80005 18 9.80005Z"
        fill="white"
      />
    </svg>{" "}
    <span>Button</span>
  </Button>
)
WithIcon.args = {
  variant: "button",
  color: "green",
  isOutlined: true,
}
