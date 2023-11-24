import React from "react"
import { Feature } from "@components/molecules"
import { Button, ButtonGroup, Heading, Prose, Text } from "@components/atoms"

import Img from "../../assets/img_1.png"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/Feature",
  component: Feature,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {
    bgImageUrl: Img,
    title: "The Loxone Experience, London",
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Feature {...args}>
    <Feature.Asset>
      <img src={Img} />
    </Feature.Asset>
    <Feature.Content>
      <Prose>
        <Heading variant="h2">Automate</Heading>
        <Text>
          We deliver projects that provide full building control, whether you
          are looking for a next level smart home which is properly centrally
          managed, a hotel which needs the wow factor or a commercial space
          which needs to be efficient and easily monitored. Loxone provides
          robust systems that reach further than their own product range, so you
          know it’s all covered. What’s more it’s simple to use and truly
          automated!
        </Text>
        <Text>
          We provide the control system bridging the gap between all contractors
          on projects making sure our clients get the very best solution.
        </Text>
        <Text>
          Automate doesn’t just deliver great projects we maintain them too,
          with over 40 of years combined experience in the technology support
          world.
        </Text>
        <ButtonGroup>
          <Button color="dark-grey">View our projects</Button>
          <Button color="green">Book a tour</Button>
        </ButtonGroup>
      </Prose>
    </Feature.Content>
  </Feature>
)

export const Default = Template.bind({})

export const ImageIsRight = Template.bind({})
ImageIsRight.args = {
  isImageRight: true,
}
