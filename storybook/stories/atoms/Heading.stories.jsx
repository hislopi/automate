import React from "react"

import Heading from "@components/atoms/heading"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Atoms/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Heading {...args}>Heading</Heading>
export const Default = Template.bind({})
Default.args = {
  variant: "h1",
}

export const H1 = Template.bind({})
H1.args = {
  variant: "h1",
}

export const H2 = Template.bind({})
H2.args = {
  variant: "h2",
}

export const H3 = Template.bind({})
H3.args = {
  variant: "h3",
}

export const H4 = Template.bind({})
H4.args = {
  variant: "h4",
}

export const H5 = Template.bind({})
H5.args = {
  variant: "h5",
}

export const H6 = Template.bind({})
H6.args = {
  variant: "h6",
}
