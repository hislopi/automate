import { useEffect, useState } from "react"
import useWindowDimensions from "./useWindowDimensions"

export function useSmallScreen() {
  const { width } = useWindowDimensions()
  const [isSmallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    if (width < 992) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }, [width])

  return isSmallScreen
}
