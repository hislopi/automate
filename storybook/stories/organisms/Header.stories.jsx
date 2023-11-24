import React from "react"
import { Feature, Hero } from "@components/molecules"
import { Button, Heading, Prose, Text } from "@components/atoms"

import Banner from "@components/molecules/banner"
import { Footer } from "@components/organisms"
import { Header } from "@components/organisms"
import Img from "../../assets/img.png"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Organism/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = args => (
  <div style={{ position: "relative", height: "200px" }}>
    <Header style={{ position: "absolute" }} {...args} />
  </div>
)

export const Default = Template.bind({})
