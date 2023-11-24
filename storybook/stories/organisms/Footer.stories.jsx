import React from "react"
import { Feature } from "@components/molecules"
import { Button, Heading, Prose, Text } from "@components/atoms"

import Banner from "@components/molecules/banner"
import { Footer } from "@components/organisms"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Organism/Footer",
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Footer {...args} />

export const Default = Template.bind({})
