import React from "react"
import { Hero } from "@components/molecules"
import { Heading, Prose, Text } from "@components/atoms"

import Showroom from "@components/molecules/showroom"
import Img from "../../assets/showroom-1.jpg"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Loxone/Molecules/Showroom",
  component: Showroom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
  args: {
    title: "What can you expect to see at the showroom",
  },
}

// More on component templates: https://storybook .js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Showroom {...args}>
    <Showroom.Room bgImageUrl={Img}>
      <Showroom.RoomInterest pos={{ y: 22, x: 20 }} isRight bgImageUrl={Img}>
        <Prose>
          <Heading variant="h5">The Loxone Experience, London 0</Heading>
          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>

          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>

          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>

          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>
        </Prose>
      </Showroom.RoomInterest>
      <Showroom.RoomInterest pos={{ y: 22, x: 70 }} bgImageUrl={Img}>
        <Prose>
          <Heading variant="h5">The Loxone Experience, London 1</Heading>
          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>

          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>

          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>

          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>
        </Prose>
      </Showroom.RoomInterest>
      <Showroom.RoomInterest pos={{ y: 52, x: 64 }} bgImageUrl={Img}>
        <Prose>
          <Heading variant="h5">The Loxone Experience, London 2</Heading>
          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>
        </Prose>
      </Showroom.RoomInterest>
      <Showroom.RoomInterest pos={{ y: 39, x: 85 }} bgImageUrl={Img}>
        <Prose>
          <Heading variant="h5">The Loxone Experience, London 3</Heading>
          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>
        </Prose>
      </Showroom.RoomInterest>
      <Showroom.RoomInterest pos={{ y: 42, x: 92 }} bgImageUrl={Img}>
        <Prose>
          <Heading variant="h5">The Loxone Experience, London 4</Heading>
          <Text>
            Featuring the latest smart automation technology products and
            functions that improve the way we live.
          </Text>
        </Prose>
      </Showroom.RoomInterest>
    </Showroom.Room>
  </Showroom>
)

export const Default = Template.bind({})
