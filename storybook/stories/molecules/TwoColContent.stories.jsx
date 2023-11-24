import React from "react"
import { SplitIntro } from "@components/molecules"
import { Button, Heading, Prose, Text } from "@components/atoms"

import Img from "../../assets/img.png"
import TwoColContent from "@components/molecules/two-column-content"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/TwoColContent",
  component: TwoColContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <TwoColContent {...args}>
    <TwoColContent.Col>
      <Prose>
        <Heading variant="h2" node="h2">
          Two column content
        </Heading>
        <Text>
          Come and visit our large space demonstrating open plan living, meeting
          room, bedroom & bathroom suite as well as a family lounge.
        </Text>

        <Text>
          The showroom offers self-builders, renovators, developers, architects
          and planners alike the chance to experience building automation
          technology in its natural habitat and get hands-on with the products
          and features.
        </Text>
      </Prose>
    </TwoColContent.Col>
    <TwoColContent.Col>
      <Prose>
        <Heading variant="h2" node="h2">
          Two column content
        </Heading>
        <Text>
          Come and visit our large space demonstrating open plan living, meeting
          room, bedroom & bathroom suite as well as a family lounge.
        </Text>

        <Text>
          The showroom offers self-builders, renovators, developers, architects
          and planners alike the chance to experience building automation
          technology in its natural habitat and get hands-on with the products
          and features.
        </Text>
      </Prose>
    </TwoColContent.Col>
  </TwoColContent>
)

export const Default = Template.bind({})
