import React from "react"
import { FAQs } from "@components/molecules"
import { Heading, Prose, Text } from "@components/atoms"

import Img from "../../assets/img_1.png"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/FAQs",
  component: FAQs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <FAQs {...args}>
    <Prose align="center">
      <Heading variant="h2" node="h2">
        Frequently asked question
      </Heading>
    </Prose>
    <FAQs.FAQ question="Frequently asked question title">
      <Text>
        We deliver projects that provide full building control, whether you are
        looking for a next level smart home which is properly centrally managed,
        a hotel which needs the wow factor or a commercial space which needs to
        be efficient and easily monitored. Loxone provides robust systems that
        reach further than their own product range, so you know it’s all
        covered. What’s more it’s simple to use and truly automated!
      </Text>
    </FAQs.FAQ>

    <FAQs.FAQ question="Frequently asked question title">
      <Text>
        We deliver projects that provide full building control, whether you are
        looking for a next level smart home which is properly centrally managed,
        a hotel which needs the wow factor or a commercial space which needs to
        be efficient and easily monitored. Loxone provides robust systems that
        reach further than their own product range, so you know it’s all
        covered. What’s more it’s simple to use and truly automated!
      </Text>
    </FAQs.FAQ>

    <FAQs.FAQ question="Frequently asked question title">
      <Text>
        We deliver projects that provide full building control, whether you are
        looking for a next level smart home which is properly centrally managed,
        a hotel which needs the wow factor or a commercial space which needs to
        be efficient and easily monitored. Loxone provides robust systems that
        reach further than their own product range, so you know it’s all
        covered. What’s more it’s simple to use and truly automated!
      </Text>
    </FAQs.FAQ>
  </FAQs>
)

export const Default = Template.bind({})

export const ImageIsRight = Template.bind({})
ImageIsRight.args = {
  isImageRight: true,
}
