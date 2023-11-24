import React from "react"
import { Hero } from "@components/molecules"
import { Button, Heading, Prose, Text } from "@components/atoms"

import Img from "../../assets/img.png"
import { Header } from "@components/organisms"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/Hero",
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {
    bgImageUrl: Img,
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Hero {...args}>
    <Prose>
      <Heading>The Loxone Experience, London</Heading>
      <Text>
        Featuring the latest smart automation technology products and functions
        that improve the way we live.
      </Text>
      <Button>Book a tour of the showroom</Button>
    </Prose>
  </Hero>
)

export const Default = Template.bind({})

export const HomeHero = args => (
  <div style={{ position: "relative" }}>
    <Header isLight style={{ position: "absolute" }} {...args} />
    <Hero bgImageUrl={Img}>
      <Prose>
        <Heading>The Loxone Experience, London</Heading>
        <Text>
          Featuring the latest smart automation technology products and
          functions that improve the way we live.
        </Text>
        <Button>Book a tour of the showroom</Button>
      </Prose>
    </Hero>
  </div>
)
