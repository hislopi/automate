import React from "react"
import { PRichText } from "@lib/richtext"
import { Button, ButtonGroup, Prose, Spacer } from "@components/atoms"
import Showroom from "@components/molecules/showroom"
import { PrismicLink } from "@prismicio/react"

const MyComponent = ({ slice }) => {
  const { primary, items } = slice
  const { title } = primary
  return (
    <Showroom title={<PRichText field={title.richText} />}>
      {items.map(({ showroom }, key) => {
        const { interests, showroom_image, title } = showroom?.document.data
        return (
          <Showroom.Room key={key} title={title} bgImage={showroom_image}>
            {interests?.map((interest, key) => {
              const {
                interest_content,
                interest_image,
                interest_title,
                x_axis_percent,
                y_axis_percent,
                is_popup_right,
                pin_icon,
                pin_color,
                learn_more_link,
              } = interest

              return (
                <Showroom.RoomInterest
                  pos={{ y: y_axis_percent, x: x_axis_percent }}
                  isRight={is_popup_right}
                  bgImage={interest_image}
                  key={key}
                  pinColor={pin_color}
                  pinIcon={pin_icon}
                  learnMoreLink={learn_more_link}>
                  <Prose>
                    <PRichText field={interest_title.richText} />
                    <PRichText field={interest_content.richText} />
                  </Prose>
                </Showroom.RoomInterest>
              )
            })}
          </Showroom.Room>
        )
      })}
    </Showroom>
  )
}

MyComponent.propTypes = {}

export default MyComponent
