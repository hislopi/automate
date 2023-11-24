import React, { useState } from "react"
import * as styles from "./styles.module.scss"
import { Anchor, Button, Container, Prose } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from "classnames"
import PropTypes from "prop-types"
import { useSmallScreen } from "@lib/hooks/useSmallScreen"
import { PrismicLink } from "@prismicio/react"
import { FadeInSAL } from "@components/utils/animate"

//TODO: refactor to use data instead of components. Current way over complicates the component.

const Showroom = ({ title, children, ...props }) => {
  const isSmallScreen = useSmallScreen()
  const [activeRoom, setActiveRoom] = useState(0)

  //select all room components
  const Rooms = React.Children.toArray(children).filter((child, index) => {
    return React.isValidElement(child) && child.props.__TYPE__ === "room"
  })

  //get rooms titles for dropdown
  const roomSelectionTitles = React.Children.map(Rooms, (child, index) => {
    return {
      text: child.props.title.text,
      value: index,
    }
  })

  //get active room
  const ActiveRoom = React.Children.toArray(Rooms).filter(
    (child, index) => activeRoom === index
  )?.[0]

  const onActiveRoomUpdate = ({ target }) => {
    setActiveRoom(parseInt(target.value))
  }

  //add room options and update function to active room
  const ActiveRoomComponent =
    ActiveRoom &&
    React.cloneElement(ActiveRoom, {
      activeRoom: activeRoom,
      options: roomSelectionTitles,
      onUpdate: onActiveRoomUpdate,
    })

  const ActiveRoomData = ActiveRoom?.props

  return (
    <div className={classNames(styles.showroomCon)} {...props}>
      <div className={styles.showroomBg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="792"
          height="1108"
          viewBox="0 0 792 1108"
          fill="none">
          <path
            opacity="0.4"
            d="M803.669 -17.5001L456.393 584L109.116 -17.5L803.669 -17.5001Z"
            fill="#FAFAFA"
            stroke="#333333"
          />
          <path
            opacity="0.4"
            d="M108.582 1185.38L804 -19.1251L1499.42 1185.38H108.582Z"
            stroke="#69C350"
          />
        </svg>
      </div>
      <Spacer y="lg" className={styles.showroomInner}>
        <Container size="lg">
          <Prose>{title}</Prose>
          <div className={classNames(styles.showcase)}>
            {isSmallScreen && (
              <MobileRooms
                room={ActiveRoom?.props}
                activeRoom={activeRoom}
                options={roomSelectionTitles}
                onUpdate={onActiveRoomUpdate}
              />
            )}
            {!isSmallScreen && <RoomBackground {...ActiveRoomData} />}
            {!isSmallScreen && ActiveRoomComponent}
          </div>
        </Container>
      </Spacer>
    </div>
  )
}
Showroom.propTypes = {
  title: PropTypes.node,
}

const RoomBackground = ({ bgImageUrl, bgImage }) => {
  return (
    <>
      {(bgImageUrl || bgImage) && (
        <div className={styles.roomBgImage}>
          {bgImage && (
            <GatsbyImage alt={bgImage.alt} image={bgImage.gatsbyImageData} />
          )}
          {bgImageUrl && (
            <img className={styles.bgImageImg} src={bgImageUrl} alt="" />
          )}
        </div>
      )}
    </>
  )
}

const RoomSelection = ({ activeRoom, options, onUpdate }) => {
  return (
    <div className={styles.roomSelection}>
      <select onChange={onUpdate} value={activeRoom}>
        {options.map(({ text, value }, key) => {
          return (
            <option value={value} key={key}>
              {text}
            </option>
          )
        })}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none">
        <path
          d="M14.8438 1.09375L14.625 0.875C14.4688 0.71875 14.25 0.71875 14.0938 0.875L8 6.96875L1.875 0.875C1.71875 0.71875 1.5 0.71875 1.34375 0.875L1.125 1.09375C0.96875 1.25 0.96875 1.46875 1.125 1.625L7.71875 8.21875C7.875 8.375 8.09375 8.375 8.25 8.21875L14.8438 1.625C15 1.46875 15 1.25 14.8438 1.09375Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

const Room = props => {
  const { children, options, onUpdate, activeRoom } = props
  const [isOpen, setIsOpen] = useState(false)
  const [activeInterest, setActiveInterest] = useState(null)

  const CurrentInterest = React.Children.toArray(children).filter(
    ({ props }, index) =>
      props.__TYPE__ === "interest" && activeInterest === index
  )

  const setInterest = index => {
    setActiveInterest(index)
    setIsOpen(true)
  }

  const closeInterest = () => {
    setActiveInterest(null)
    setIsOpen(false)
  }

  const Points = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.props.__TYPE__ === "interest") {
      return (
        <Point
          pos={child.props.pos}
          pinIcon={child.props.pinIcon}
          pinColor={child.props.pinColor}
          onClick={() => setInterest(index)}
          active={activeInterest === index}
        />
      )
    }
    return child
  })

  return (
    <div className={styles.room}>
      <RoomSelection
        options={options}
        onUpdate={onUpdate}
        activeRoom={activeRoom}
      />
      <div className={styles.points}>{Points}</div>

      <div
        className={classNames(
          styles.roomInterests,
          isOpen && styles.isOpen,
          CurrentInterest?.[0]?.props.isRight && styles.isRight
        )}>
        <div className={styles.closeBtn} onClick={() => closeInterest(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none">
            <path
              d="M21 0.90625C9.76172 0.90625 0.65625 10.0117 0.65625 21.25C0.65625 32.4883 9.76172 41.5938 21 41.5938C32.2383 41.5938 41.3438 32.4883 41.3438 21.25C41.3438 10.0117 32.2383 0.90625 21 0.90625ZM21 38.9688C11.2383 38.9688 3.28125 31.0938 3.28125 21.25C3.28125 11.5703 11.1562 3.53125 21 3.53125C30.6797 3.53125 38.7188 11.4883 38.7188 21.25C38.7188 31.0117 30.7617 38.9688 21 38.9688ZM28.7109 15.5898C29.1211 15.1797 29.1211 14.6055 28.7109 14.1953L28.0547 13.5391C27.6445 13.1289 27.0703 13.1289 26.6602 13.5391L21 19.1992L15.2578 13.5391C14.9297 13.1289 14.2734 13.1289 13.8633 13.5391L13.207 14.1953C12.7969 14.6055 12.7969 15.1797 13.207 15.5898L18.8672 21.25L13.207 26.9922C12.7969 27.3203 12.7969 27.9766 13.207 28.3867L13.8633 29.043C14.2734 29.4531 14.9297 29.4531 15.2578 29.043L21 23.3828L26.6602 29.043C27.0703 29.4531 27.6445 29.4531 28.0547 29.043L28.7109 28.3867C29.1211 27.9766 29.1211 27.3203 28.7109 26.9922L23.0508 21.25L28.7109 15.5898Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={styles.backPlate}
          onClick={() => closeInterest(false)}></div>
        <div className={styles.roomInterestInner}>{CurrentInterest}</div>
      </div>
    </div>
  )
}
Room.propTypes = {
  bgImageUrl: PropTypes.string,
  bgImage: PropTypes.object,
}
Room.defaultProps = {
  __TYPE__: "room",
}

const MobileRooms = ({ room, options, onUpdate, activeRoom }) => {
  return (
    <div>
      <RoomSelection
        options={options}
        onUpdate={onUpdate}
        activeRoom={activeRoom}
      />
      {room && <MobileRoom {...room} />}
    </div>
  )
}

const MobileRoom = ({ children, title }) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.props.__TYPE__ === "interest") {
      return React.cloneElement(child, {
        isSmall: true,
      })
    }
    return child
  })

  return (
    <div>
      <Spacer y="sm" />
      <div className={styles.mobileRooms}>{childrenWithProps}</div>
    </div>
  )
}

const Point = ({ pinIcon, pinColor, pos, active, onClick }) => {
  return (
    <i
      onClick={onClick}
      style={{
        top: `${pos.y}%`,
        left: `${pos.x}%`,
      }}
      className={classNames(
        styles.point,
        pinIcon?.gatsbyImageData && styles.pointIcon,
        active && styles.active
      )}>
      {pinIcon?.gatsbyImageData ? (
        <GatsbyImage
          objectFit="contain"
          alt={pinIcon.alt}
          image={pinIcon.gatsbyImageData}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none">
          <circle
            cx="16.9998"
            cy="16.9998"
            r="10.2"
            fill={pinColor || "#FFF"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 31.875C25.2152 31.875 31.875 25.2152 31.875 17C31.875 8.78477 25.2152 2.125 17 2.125C8.78477 2.125 2.125 8.78477 2.125 17C2.125 25.2152 8.78477 31.875 17 31.875ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
            fill={pinColor || "#FFF"}
          />
        </svg>
      )}
    </i>
  )
}

const RoomInterest = ({ bgImageUrl, bgImage, learnMoreLink, children }) => {
  return (
    <div className={styles.roomInterest}>
      {(bgImageUrl || bgImage) && (
        <div className={styles.bgImage}>
          {bgImage && (
            <GatsbyImage alt={bgImage.alt} image={bgImage.gatsbyImageData} />
          )}
          {bgImageUrl && (
            <img className={styles.bgImageImg} src={bgImageUrl} alt="" />
          )}
        </div>
      )}
      <Spacer x="sm" y="sm" className={styles.roomInterestContent}>
        <div>{children}</div>
        {learnMoreLink && (
          <div className={styles.linkWrap}>
            <PrismicLink
              field={learnMoreLink}
              internalComponent={props => (
                <Anchor colored underlined {...props} />
              )}
              externalComponent={props => (
                <Anchor colored underlined {...props} />
              )}>
              Learn more
            </PrismicLink>
          </div>
        )}
      </Spacer>
    </div>
  )
}

RoomInterest.propTypes = {
  bgImageUrl: PropTypes.string,
  bgImage: PropTypes.object,
  isRight: PropTypes.bool,
  isSmall: PropTypes.bool,
  pos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
}
RoomInterest.defaultProps = {
  __TYPE__: "interest",
}

Showroom.RoomInterest = RoomInterest
Showroom.Room = Room

export default Showroom
