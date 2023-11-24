import React from "react"

import { Text } from "@components/atoms/text"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Atoms/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Text {...args}>
    Spicy jalapeno bacon ipsum dolor amet incididunt do doner, elit meatloaf
    nisi drumstick turducken frankfurter. Tri-tip brisket capicola frankfurter
    pig deserunt exercitation incididunt nostrud bresaola eu cupidatat meatball
    chislic. Ex pork loin incididunt in bacon tail beef sunt occaecat spare ribs
    venison porchetta. Short ribs occaecat minim, landjaeger ut eu hamburger.
  </Text>
)
export const Default = Template.bind({})
Default.args = {
  size: "regular",
}
export const Regular = Template.bind({})
Regular.args = {
  size: "regular",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
}
