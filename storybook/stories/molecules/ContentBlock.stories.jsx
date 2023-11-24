import React from "react"
import { ContentBlock, Feature } from "@components/molecules"
import { Button, Heading, Prose, Text } from "@components/atoms"

import Banner from "@components/molecules/banner"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/ContentBlock",
  component: ContentBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {
    hasBG: true,
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <ContentBlock {...args}>
    <Prose align="center">
      <Heading node="h2" variant="h2">
        Simple Content Block
      </Heading>
      <Text>
        Placerat vestibulum lectus mauris ultrices eros in. Est pellentesque
        elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
        Euismod elementum nisi quis eleifend.
      </Text>
      <Text>
        Placerat vestibulum lectus mauris ultrices eros in. Est pellentesque
        elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
        Euismod elementum nisi quis eleifend.
      </Text>
    </Prose>
  </ContentBlock>
)

export const Default = Template.bind({})
