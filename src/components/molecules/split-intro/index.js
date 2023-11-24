import React from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import { FadeInSAL } from "@components/utils/animate"

import DoorSVG from "@assets/images/services/door.svg"
import EnergySVG from "@assets/images/services/energy.svg"
import LightSVG from "@assets/images/services/light.svg"
import TempSVG from "@assets/images/services/temp.svg"
import MusicSVG from "@assets/images/services/music.svg"

const ServiceIcons = () => {
  return (
    <div className={styles.serviceIcons}>
      <img src={DoorSVG} alt="Security and Access" />
      <img src={EnergySVG} alt="Energy Management" />
      <img src={LightSVG} alt="Lighting Control" />
      <img src={TempSVG} alt="Climate Control" />
      <img src={MusicSVG} alt="Multiroom Audio" />
    </div>
  )
}

export const SplitIntro = ({ title, addServiceIcons, children, ...props }) => {
  return (
    <div className={styles.splitIntroCon} {...FadeInSAL}>
      <div className={styles.bgShape}>
        <svg
          width="489"
          height="550"
          viewBox="0 0 489 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M243.797 61.625L138.791 243.5L33.7854 61.625L243.797 61.625Z"
            fill="#FAFAFA"
            stroke="#333333"
          />
          <path
            opacity="0.4"
            d="M33.6228 426.729L244.5 61.4785L455.377 426.729H33.6228Z"
            stroke="#69C350"
          />
        </svg>
      </div>
      <Spacer y="lg">
        <Container size="lg">
          <div className={styles.splitIntroGrid}>
            {title && (
              <div>
                {title} {addServiceIcons && <ServiceIcons />}
              </div>
            )}
            {children && <div>{children}</div>}
          </div>
        </Container>
      </Spacer>
    </div>
  )
}

SplitIntro.propTypes = {}

export default SplitIntro
