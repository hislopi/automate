import React from "react"

import { Prose, Heading, Text } from "@components/atoms"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Atoms/Prose",
  component: Prose,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Prose {...args}>
    <Heading variant="h1" node="h1">
      Heading
    </Heading>
    <Text>
      Spicy jalapeno bacon ipsum dolor amet incididunt do doner, elit meatloaf
      nisi drumstick turducken frankfurter. Tri-tip brisket capicola frankfurter
      pig deserunt exercitation incididunt nostrud bresaola eu cupidatat
      meatball chislic. Ex pork loin incididunt in bacon tail beef sunt occaecat
      spare ribs venison porchetta. Short ribs occaecat minim, landjaeger ut eu
      hamburger.
    </Text>
  </Prose>
)
export const Default = Template.bind({})
