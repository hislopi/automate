import React from "react"
import { Button, Heading, Prose, Text } from "@components/atoms"

import Banner from "@components/molecules/banner"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/Banner",
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Banner {...args}>
    <Prose align="center">
      <Heading node="h3" variant="h3" weight="300">
        Visit our showroom and experience
        <br /> <strong>home automation</strong> by loxone
      </Heading>
      <Button>Book a private tour</Button>
    </Prose>
  </Banner>
)

export const Default = Template.bind({})
