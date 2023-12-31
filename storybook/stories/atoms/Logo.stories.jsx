import React from "react"

import { Anchor, Logo } from "@components/atoms"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Atoms/Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Logo {...args} />

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  isLarge: true,
}
